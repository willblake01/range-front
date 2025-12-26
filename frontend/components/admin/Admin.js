import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import NProgress from 'nprogress';
import { CreateProduct, DisplayError, SignUp, useUser } from '..';
import { hasPermission } from '../../lib';
import { Permissions } from './components';

const StyledAdmin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const StyledUserTable = styled.table`
  width: 50%;
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

const Admin = () => {
  const { user } = useUser();
  const hasAccess = user && hasPermission(user, 'ADMIN');
  
  const { data, loading, error } = useQuery(ALL_USERS_QUERY, {
    skip: !hasAccess,
  });

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  const users = data?.users ?? [];

  return (
    <StyledAdmin>
      <h2>Manage Permissions</h2>

      {users && (
        <StyledUserTable>
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
        </StyledUserTable>
      )}

      <h2>Create Product</h2>
      <CreateProduct />

      <h2>Create User</h2>
      <SignUp />
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
