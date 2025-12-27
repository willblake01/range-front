import styled from 'styled-components';
import { useUser } from '../../hooks';
import { DisplayError } from '../shared';

const StyledAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: clamp(2rem, 5vw, 8rem);
  height: max-content;
  width: 100%;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60rem;
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
  background: white;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
`;

const StyledInfoRow = styled.div`
  display: grid;
  grid-template-columns: 14rem 1fr;
  padding: 1.5rem 0;
  border-bottom: 0.1rem solid var(--offWhite);
  
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
      <StyledFormContainer>
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
      </StyledFormContainer>
    </StyledAccount>
  );
};

export { Account };
