import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

interface Folder {
  id: string;
  name: string;
  createdAt: string;
}

const Folders = () => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        console.log('❌ 로그인되지 않음');
        return;
      }

      try {
        const token = await user.getIdToken();
        await axios.post('/auth/login', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

        const res = await axios.get('/folders');

        // 폴더가 없으면 onboarding 폴더 생성
        if (res.data.length === 0) {
          const onboarding = await axios.post('/folders/onboarding');
          setFolders([{
            id: onboarding.data.folderId,
            name: '나의 첫 클리핑 폴더',
            createdAt: new Date().toISOString()
          }]);
        } else {
          setFolders(res.data);
        }
      } catch (err) {
        console.error('❌ 폴더 조회 실패:', err);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>{"로딩 중..."}</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📁 내 폴더 목록</h2>
      <ul>
        {folders.map((folder) => (
          <li key={folder.id}>
            {folder.name} ({new Date(folder.createdAt).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Folders;