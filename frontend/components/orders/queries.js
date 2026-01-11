import gql from 'graphql-tag';

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
        brand
        quantity
        price
      }
    }
  }
`;

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(id: $id) {
      id
      total
      charge
      createdAt
      items {
        id
        brand
        title
        price
        quantity
        image
      }
      user {
        id
        firstName
        lastName
      }
    }
  }
`;

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders {
      id
      createdAt
      total
      charge
      user {
        id
      }
      items {
        id
        title
        description
        price
        quantity
        image
      }
    }
  }
`;

export { CREATE_ORDER_MUTATION, SINGLE_ORDER_QUERY, USER_ORDERS_QUERY };
