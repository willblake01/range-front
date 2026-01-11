import styled from 'styled-components';
import { PaginationRow } from '../styles';
import { CreateUser, Permissions, UsersPagination } from './components';

const StyledAdmin = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
  padding: 8rem 0;
`;

const StyledPermissionsTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const StyledCreateUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60rem;
`;

const StyledPermissionsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: var(--bs);
  
  thead {
    background: var(--green);
    color: white;
  }
  
  th {
    padding: 1rem;
    text-align: left;
    font-size: 1.4rem;
  }
  
  td {
    padding: 1rem;
    border-bottom: 0.1rem solid var(--offWhite);
    font-size: 1.2rem;
  }
  
  tr:hover {
    background: var(--offWhite);
  }
  
  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    padding: 0.3rem 0;
    cursor: pointer;
    
    input[type='checkbox'] {
      cursor: pointer;
    }
  }
`;

const Admin = ({ page, users }) => {
  return (
    <StyledAdmin>
      <StyledPermissionsTableContainer>
        <h2>Manage Permissions</h2>
        {users && (
          <>
            <StyledPermissionsTable>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Permissions</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user) => (
                  <Permissions user={user} key={user.id} />
                ))}
              </tbody>
            </StyledPermissionsTable>
            <PaginationRow>
              <UsersPagination page={page} />
            </PaginationRow>
          </>
        )}
      </StyledPermissionsTableContainer>
      <StyledCreateUserContainer>
        <CreateUser />
      </StyledCreateUserContainer>
    </StyledAdmin>
  );
};

export { Admin };
