import styled from 'styled-components';
import { AlternateHeader } from '../components/AlternateHeader';
import { SignUp } from '../components/SignUp';
import { Footer } from '../components/Footer';

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: 40px;
  height: 100%;
`;

const SignInPage = () => {
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

export default SignInPage;
