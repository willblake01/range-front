import { useEffect } from 'react';
import Router from 'next/router';
import toast from 'react-hot-toast';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import NProgress from 'nprogress';
import { DisplayError } from './shared';

const update = (cache, payload) => {
  cache.evict({
    id: cache.identify({
      __typename: 'Product',
      id: payload.data.deleteProduct.id,
    }),
  });
  cache.gc();
};

const DeleteProduct = ({ id, children }) => {
  const safeId = Array.isArray(id) ? id[0] : id;

  const [deleteProduct, { loading, error }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: { id: safeId },
      update,
    }
  );

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();
    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;

  return (
    <button
      type='button'
      disabled={loading}
      onClick={async () => {
        if (confirm('Are you sure you want to delete this item?')) {
          const res = await deleteProduct().catch((err) => {
            toast.error(err.message);
            return null;
          });

          toast.success(`Deleted product ${res.data.deleteProduct.brand} ${res.data.deleteProduct.title}`);
            
          Router.push({
            pathname: `/products`,
          });
        }
      }}
    >
      {children}
    </button>
  );
};

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      brand
      title
    }
  }
`;

export { DeleteProduct };
