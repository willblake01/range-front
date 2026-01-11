import { useMutation } from '@apollo/client';
import { toast } from 'react-hot-toast';
import { CURRENT_USER_QUERY } from '../../hooks';
import { ADD_TO_CART_MUTATION } from '../cart/queries';

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

export { AddToCart };
