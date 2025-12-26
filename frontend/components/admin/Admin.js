import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import NProgress from 'nprogress';
import { hasPermission } from '../../lib';
import { useUser } from '../../hooks';
import { DisplayError, SignUp } from '../shared';
import { Permissions } from './components';

const StyledAdmin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  
  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
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
    border-bottom: 1px solid var(--offWhite);
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

const StyledPermissionsTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80rem;
`;

const StyledSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80rem;
`;

const Admin = () => {
  const { user, loading: userLoading, error: userError } = useUser();
  const hasAccess = user && hasPermission(user, 'ADMIN');
  
  const { data, loading: usersLoading, error: usersError } = useQuery(ALL_USERS_QUERY, {
    skip: !hasAccess,
  });

  useEffect(() => {
    if (usersLoading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [usersLoading]);

  if (userError) return <DisplayError error={userError} />;
  if (usersError) return <DisplayError error={usersError} />;
  if (userLoading || usersLoading) return <p>Loading...</p>;
  
  if (!user) return <p>You must be logged in.</p>;
  if (!hasAccess) return <p>You don’t have permission to view this page.</p>;

  const users = data?.users ?? [];

  return (
    <StyledAdmin>
      <StyledPermissionsTableContainer>
        <h2>Manage Permissions</h2>
        {users && (
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
        )}
      </StyledPermissionsTableContainer>
      <StyledSignUpContainer>
        <SignUp />
      </StyledSignUpContainer>
    </StyledAdmin>
  );
};

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      firstName
      lastName
      email
      permissions
    }
  }
`;

export { Admin };
