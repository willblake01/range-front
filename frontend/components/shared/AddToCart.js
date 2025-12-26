import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import NProgress from 'nprogress';
import { CURRENT_USER_QUERY } from '../../hooks';
import { DisplayError } from '.';

const AddToCart = ({ id }) => {
  const router = useRouter();
  
  const [addToCart, { loading, error }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    onError: (error) => {
      if (error.message.includes('You must be signed in')) {
        router.push('/login');
      }
    },
  });

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;
  
  return (
    <button disabled={loading} type='button' onClick={addToCart}>
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
