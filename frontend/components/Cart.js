import React from 'react';
import gql from 'graphql-tag';

const LOCAL_STATE_QUERY = gql `
  query {
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql `
  mutation {
    toggleCart @client
  }
`;

const Cart = () => (
  <p>I'm a cart</p>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
