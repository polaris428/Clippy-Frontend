import { signInWithGoogle } from '../utils/login';
import CDSButton from '../components/design-system/Button'; // ✅ 경로는 실제 구조에 맞게 조정

const Login = () => {
  const handleLogin = async () => {
    const token = await signInWithGoogle();
    if (token) {
      localStorage.setItem('token', token);
      window.location.href = '/folders';
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Clippy 로그인</h2>
      <CDSButton buttonText="클립 추가" onClick={handleLogin} />
    </div>
  );
};

export default Login;