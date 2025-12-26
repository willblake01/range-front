import styled from 'styled-components';
import { useUser } from '../../hooks';
import { DisplayError } from '../shared';

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

const StyledAccountHeader = styled.div`
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

const StyledInfoSection = styled.section`
  max-width: 600px;
  background: white;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledInfoRow = styled.div`
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

const PermissionsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
`;

const Account = () => {
  const { user, loading, error } = useUser();

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  return (
    <StyledAccount>
      <StyledAccountHeader>
        <h2>Account Information</h2>
      </StyledAccountHeader>
      
      <StyledInfoSection>
        <StyledInfoRow>
          <label>First Name</label>
          <span>{user?.firstName}</span>
        </StyledInfoRow>
        <StyledInfoRow>
          <label>Last Name</label>
          <span>{user?.lastName}</span>
        </StyledInfoRow>
        <StyledInfoRow>
          <label>Email</label>
          <span>{user?.email}</span>
        </StyledInfoRow>
        <StyledInfoRow>
          <label>Password</label>
          <span>••••••••</span>
        </StyledInfoRow>
        <StyledInfoRow>
          <label>Permissions</label>
          <PermissionsList>
            {user?.permissions?.map(permission => <span key={permission}>{permission}</span>)}
          </PermissionsList>
        </StyledInfoRow>
      </StyledInfoSection>
    </StyledAccount>
  );
};

export { Account };
