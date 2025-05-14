import WelcomeHeader from '../components/Header/WelcomeHeader';
import WelcomeFooter from '../components/Footer/WelcomeFooter';

const WelcomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WelcomeHeader />
      <main>{children}</main>
      <WelcomeFooter />
    </>
  );
};

export default WelcomeLayout;