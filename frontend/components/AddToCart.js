import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '.';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(id: $id) {
      id
    }
  }
`;

const AddToCart = ({ id }) => {
  const router = useRouter();
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    onError: (error) => {
      if (error.message.includes('You must be signed in')) {
        router.push('/login');
      }
    },
  });
  
  return (
    <button disabled={loading} type='button' onClick={addToCart}>
      Add{loading && 'ing'} To Cart 🛒
    </button>
  );
}

export { AddToCart };
