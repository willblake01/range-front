import { PageMain } from '../components/styles';
import { AlternateHeader, Footer, Login } from '../components/shared';

const LoginPage = () => {
  return (
    <>
      <AlternateHeader />
      <PageMain>
        <Login />
      </PageMain>
      <Footer />
    </>
  );
}

export default LoginPage;
