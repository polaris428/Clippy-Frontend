import { signInWithGoogle } from '../utils/login';

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
      <button onClick={handleLogin}>구글 로그인</button>
    </div>
  );
};

export default Login;
