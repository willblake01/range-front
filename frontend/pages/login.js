import { StyledLogin } from '../components/styles';
import { AlternateHeader, Footer, Login } from '../components';

const LoginPage = () => {
  return (
    <>
      <AlternateHeader />
      <StyledLogin>
        <Login /> 
      </StyledLogin> 
      <Footer />
    </>
  );
}

export default LoginPage;
