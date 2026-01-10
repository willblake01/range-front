import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import NProgress from 'nprogress';
import { hasPermission } from '../../lib';
import { useUser } from '../../hooks';
import { PaginationRow } from '../styles';
import { DisplayError } from '../shared';
import { CreateUser, Permissions, UsersPagination } from './components';
import { USERS_PER_PAGE } from './constants';

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

const Admin = () => {
  const router = useRouter();

  const { user, loading: userLoading, error: userError } = useUser();

  const page = Number.isFinite(Number(router.query.page)) ? Number(router.query.page) : 1;
  const currentPage = Math.max(1, page);
  const skip = (currentPage - 1) * USERS_PER_PAGE;
  const hasAccess = user && hasPermission(user, 'ADMIN');
  
  const { data, loading: usersLoading, error: usersError } = useQuery(ALL_USERS_QUERY, {
    skip: !hasAccess,
    variables: {
      skip,
      first: USERS_PER_PAGE,
      orderBy: 'createdAt_DESC',
    },
    fetchPolicy: 'cache-and-network',
  });

  const users = data?.users;

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

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY($skip: Int, $first: Int, $orderBy: UserOrderByInput) {
    users(skip: $skip, first: $first, orderBy: $orderBy) {
      id
      firstName
      lastName
      email
      permissions
    }
  }
`;

export { Admin };
