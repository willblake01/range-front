import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { DisplayError } from '../..';

const possiblePermissions = [
  'ADMIN',
  'USER',
  'PRODUCTCREATE',
  'PRODUCTUPDATE',
  'PRODUCTDELETE',
  'PERMISSIONUPDATE',
];

const Permissions = ({ user }) => {
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
    };
    
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
        {possiblePermissions?.map((permission) => (
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

export { Permissions };
