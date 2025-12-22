import styled from 'styled-components';
import { Account, AlternateHeader, Footer } from '../components';

const StyledAccountPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: 40px;
  height: 100%;
  width: 100%;
`;

const AccountPage = ({query}) => (
  <>
    <AlternateHeader />
    <StyledAccountPage>
      <Account />
    </StyledAccountPage>
    <Footer />
  </>
);

export default AccountPage;
