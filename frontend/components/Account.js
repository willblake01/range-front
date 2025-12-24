import styled from 'styled-components';
import { PleaseLogin, useUser } from '.';

const StyledAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: 40px;
  height: 100%;
  width: 100%;
`;

const AccountHeader = styled.div`
  margin-bottom: 3rem;
  h2 {
    font-size: 3rem;
    margin: 0 0 0.5rem 0;
  }
  p {
    color: var(--grey);
    font-size: 1.4rem;
  }
`;

const InfoSection = styled.section`
  max-width: 600px;
  background: white;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--offWhite);
  
  &:last-child {
    border-bottom: none;
  }
  
  label {
    font-weight: 600;
    color: var(--black);
    font-size: 1.4rem;
  }
  
  span {
    font-size: 1.4rem;
    color: var(--grey);
  }
`;

const Account = () => {
  const { user } = useUser();

  return (
    <PleaseLogin>
      <StyledAccount>
      <AccountHeader>
        <h2>Account Information</h2>
      </AccountHeader>
      
      <InfoSection>
        <InfoRow>
          <label>First Name</label>
          <span>{user?.firstName}</span>
        </InfoRow>
        <InfoRow>
          <label>Last Name</label>
          <span>{user?.lastName}</span>
        </InfoRow>
        <InfoRow>
          <label>Email</label>
          <span>{user?.email}</span>
        </InfoRow>
        <InfoRow>
          <label>Password</label>
          <span>••••••••</span>
        </InfoRow>
        <InfoRow>
          <label>Permissions</label>
          {user?.permissions?.map(permission => <span key={permission}>{permission}</span>)}
        </InfoRow>
      </InfoSection>
    </StyledAccount>
    </PleaseLogin>
  );
};

export { Account };
