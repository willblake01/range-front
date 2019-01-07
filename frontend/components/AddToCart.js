import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const ADD_TO_CART_MUTATION = gql`
  mutation AddToCart($id: ID!) {
    AddToCart(id: $id) {
      id
      quantity
    }
  }
`;

class AddToCart extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{
          id,
        }}
      >
          {(AddToCart) => (
            <button onClick={AddToCart}>Add to Cart 🛒</button>
          )}
      </Mutation>
    );
  }
}

export default AddToCart;
