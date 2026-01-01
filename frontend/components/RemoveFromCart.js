import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

const StyledLargeButton = styled.button`
  margin: 0;
  font-size: 1.5rem;
  background: none;
  border: 0;
  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;

const update = (cache, payload) => {
  cache.evict(cache.identify(payload.data.removeFromCart));
}

const RemoveFromCart = ({ id }) => {
  const safeId = Array.isArray(id) ? id[0] : id;

  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
    variables: { id: safeId },
    update,
    optimisticResponse: {
      removeFromCart: {
        __typename: 'CartItem',
        id,
      },
    },
  });
  
  return (
    <StyledLargeButton
      onClick={removeFromCart}
      disabled={loading}
      title='Remove This Item from Cart'
    >
      Remove
    </StyledLargeButton>
  );
};

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

export { RemoveFromCart };
