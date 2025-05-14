import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export interface Folder {
  id: string;
  name: string;
  createdAt: string;
}

export const useFolders = () => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      try {
        const token = await user.getIdToken();

        await axios.post('/auth/login', {}, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const res = await axios.get('/folders', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.length === 0) {
          const onboarding = await axios.post('/folders/onboarding', {}, {
            headers: { Authorization: `Bearer ${token}` },
          });

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

  return { folders, loading };
};
