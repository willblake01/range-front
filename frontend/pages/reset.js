import styled from 'styled-components';
import { useRouter } from 'next/router';
import { AlternateHeader, Footer, RequestReset, Reset } from '../components';

const StyledReset = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: 40px;
  height: 100%;
`;

const ResetPage = () => {
  const router = useRouter();
  const { resetToken } = router.query;
  
  if (!resetToken) {
    return (
      <>
        <AlternateHeader />
        <StyledReset>
          <RequestReset />
        </StyledReset>
        <Footer />
      </>
    );
  }
  return (
    <>
      <AlternateHeader />
      <StyledReset>
        <Reset token={resetToken} />
      </StyledReset>
      <Footer />
    </>
  );
}

export default ResetPage;
