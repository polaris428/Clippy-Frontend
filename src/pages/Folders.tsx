import { useFolders } from '../hooks/useFolders';

const Folders = () => {
  const { folders, loading } = useFolders();

  if (loading) return <p>로딩 중...</p>;

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
