import { PageMain } from '../components/styles';
import { AlternateHeader, Footer, SignUp } from '../components/shared';

const SignUpPage = () => {
  return (
    <>
      <AlternateHeader />
      <PageMain>
        <SignUp />
      </PageMain>
      <Footer />
    </>
  );
}

export default SignUpPage;
