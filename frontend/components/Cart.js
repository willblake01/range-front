import React from 'react';
import gql from 'graphql-tag';
import CartStyle from './styles/CartStyle';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import SickButton from './styles/SickButton';

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
    <CartStyle open>
      <header>
        <CloseButton title='close'>&times;</CloseButton>
        <Supreme>Your Cart</Supreme>
        <p>You have __ items in your cart.</p>
      </header>
      <footer>
        <p>$10.10</p>
        <SickButton>Checkout</SickButton>
      </footer>
    </CartStyle>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
