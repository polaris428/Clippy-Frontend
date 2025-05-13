// src/utils/login.ts
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

export const signInWithGoogle = async (): Promise<string | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const token = await result.user.getIdToken();
    return token;
  } catch (err) {
    console.error('로그인 실패:', err);
    return null;
  }
};
