import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { toast } from 'react-hot-toast';
import { CURRENT_USER_QUERY } from '../../hooks';

const AddToCart = ({ id }) => {  
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  });

  const handleAddToCart = async () => {
    try {
      await addToCart({ variables: { id } });
      toast.success('Added to cart');
    } catch (err) {
      const message =
        err?.graphQLErrors?.[0]?.message ||
        err?.message ||
        'Something went wrong';

      toast.error(message);
    }
  };

  if (loading) return <p>Loading...</p>;
  
  return (
    <button disabled={loading} type='button' onClick={handleAddToCart}>
      Add{loading && 'ing'} To Cart 🛒
    </button>
  );
};

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(id: $id) {
      id
    }
  }
`;

export { AddToCart };
