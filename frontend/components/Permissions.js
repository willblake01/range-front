import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { DisplayError, useUser } from '.';
import { hasPermission } from '../lib';

const PermissionsStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  
  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const UserTable = styled.table`
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

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation UPDATE_PERMISSIONS_MUTATION($permissions: [Permission], $userId: ID!) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      firstName
      lastName
      email
      permissions
    }
  }
`;

const possiblePermissions = [
  'ADMIN',
  'USER',
  'PRODUCTCREATE',
  'PRODUCTUPDATE',
  'PRODUCTDELETE',
  'PERMISSIONUPDATE',
];

const UserPermissions = ({ user }) => {
  const [updatePermissions, { loading, error }] = useMutation(
    UPDATE_PERMISSIONS_MUTATION
  );

  const handlePermissionChange = (e) => {
    const checkbox = e.target;
    let updatedPermissions = [...user.permissions];
    
    if (checkbox.checked) {
      updatedPermissions.push(checkbox.value);
    } else {
      updatedPermissions = updatedPermissions.filter(
        (permission) => permission !== checkbox.value
      );
    }
    
    updatePermissions({
      variables: {
        permissions: updatedPermissions,
        userId: user.id,
      },
    });
  };

  return (
    <tr>
      <td>{user.firstName} {user.lastName}</td>
      <td>{user.email}</td>
      <td>
        {error && <DisplayError error={error} />}
        {possiblePermissions.map((permission) => (
          <label key={permission} htmlFor={`${user.id}-permission-${permission}`}>
            <input
              id={`${user.id}-permission-${permission}`}
              type='checkbox'
              checked={user.permissions.includes(permission)}
              value={permission}
              onChange={handlePermissionChange}
              disabled={loading}
            />
            {permission}
          </label>
        ))}
      </td>
    </tr>
  );
};

const Permissions = () => {
  const { user } = useUser();
  const hasAccess = user && hasPermission(user, 'ADMIN');
  
  const { data, loading, error } = useQuery(ALL_USERS_QUERY, {
    skip: !hasAccess,
  });

  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;

  return (
    <PermissionsStyles>
      <h2>Manage Permissions</h2>
      {loading && <p>Loading...</p>}
      {error && <DisplayError error={error} />}
      {data && (
        <UserTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Permissions</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((user) => (
              <UserPermissions user={user} key={user.id} />
            ))}
          </tbody>
        </UserTable>
      )}
    </PermissionsStyles>
  );
};

export { Permissions };
