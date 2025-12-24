import { StyledSignUp } from '../components/styles';
import { AlternateHeader, Footer, SignUp } from '../components';

const SignUpPage = () => {
  return (
    <>
      <AlternateHeader />
      <StyledSignUp>
        <SignUp />
      </StyledSignUp>
      <Footer />
    </>
  );
}

export default SignUpPage;
