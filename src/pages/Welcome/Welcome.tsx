import WelcomeLayout from "../../layout/WelcomeLayout";
import styles from "./Welcome.module.css";
import illustration from '../../assets/welcome_illustration.svg';
import { CDSButton } from '@/components/design-system';
import { signInWithGoogle } from '../../utils/login';

const handleLogin = async () => {
  const token = await signInWithGoogle();
  if (token) {
    localStorage.setItem('token', token);
    window.location.href = '/folders';
  }
};

const WelcomePage = () => {

  
  return (
    <WelcomeLayout>
      <main className={styles.main}>
        
        <section className={`${styles.left}`} >
          <h1 className={styles.HomepageHero_heading__Nj93Y }>나를 위한 AI 워크스페이스.</h1>
          <p className={styles.subtitle}>
            팀이 모든 답을 찾고, 반복 업무를 자동화하며, 프로젝트를 완료할 수 있는 하나의 공간.
          </p>
    

        
          <div className={styles.buttons}>
            
            <CDSButton buttonText="무료로 사용하기" onClick={handleLogin} />
           
          </div>
        </section>

        <section className={styles.right}>
          <img src={illustration} alt="일러스트" className={styles.image} />
        </section>
      </main>
    </WelcomeLayout>
  );
};


export default WelcomePage;