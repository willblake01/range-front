import styled from 'styled-components';
import { AlternateHeader } from '../components/AlternateHeader';

import { Footer } from '../components/Footer';

const StyledAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: 40px;
  height: 100%;
`;

const AccountPage = ({query}) => (
  <>
    <AlternateHeader />
    <StyledAccount>
      
    </StyledAccount>
    <Footer />
  </>
);

export default AccountPage;
