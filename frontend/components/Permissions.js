import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Error from './ErrorMessage';
import Table from './styles/Table';

const StyledButton = styled.button`
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
`;

const possiblePermissions = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMUPDATE',
  'ITEMDELETE',
  'PERMISSIONUPDATE',
];

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const Permissions = props => (
    <Query query={ALL_USERS_QUERY}>
      {({data, loading, error}) =>
      console.log(data) || (
        <div>
          <Error error={error} />
          <div>
            <h2>Manage Permissions</h2>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  {possiblePermissions.map(permission =>
                    <th>{permission}</th>)}
                    <th>👇🏻</th>
                </tr>
              </thead>
              <tbody>
                {data.users.map(user => <User user={user} />)}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </Query>
);

class User extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        {possiblePermissions.map(permission => (
          <td>
            <label htmlFor={`${user.id}-permission-${permission}`}>
              <input type='checkbox' />
            </label>
          </td>
        ))}
        <td>
          <StyledButton>Update!</StyledButton>
        </td>
      </tr>
    )
  }
}

export default Permissions;
