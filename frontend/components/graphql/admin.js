import { gql } from '@apollo/client';

const USERS_QUERY = gql`
  query USERS_QUERY($skip: Int, $first: Int, $orderBy: UserOrderByInput) {
    users(skip: $skip, first: $first, orderBy: $orderBy) {
      id
      firstName
      lastName
      email
      permissions
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      password: $password
    ) {
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

const USERS_PAGINATION_QUERY = gql`
  query USERS_PAGINATION_QUERY {
    usersCount
  }
`;

export { USERS_QUERY, CREATE_USER_MUTATION, UPDATE_PERMISSIONS_MUTATION, USERS_PAGINATION_QUERY };
