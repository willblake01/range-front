import styled from 'styled-components';
import { AlternateHeader } from '../components/AlternateHeader';
import { SignIn } from '../components/SignIn';
import { Footer } from '../components/Footer';

const StyledSignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: 40px;
  height: 100%;
`;

export default function SignInPage() {
  return (
    <>
      <AlternateHeader />
      <StyledSignIn>
        <SignIn /> 
      </StyledSignIn> 
      <Footer />
    </>
  );
}
