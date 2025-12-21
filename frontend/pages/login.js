import styled from 'styled-components';
import { AlternateHeader, Footer, Login } from '../components';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: 40px;
  height: 100%;
`;

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
