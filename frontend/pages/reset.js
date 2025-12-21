import styled from 'styled-components';
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

const  ResetPage = ({ query }) => {
  if (!query?.token) {
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
      <p>RESET YOUR PASSWORD</p>
      <Reset token={query.token} />
    </>
  );
}

export default ResetPage;
