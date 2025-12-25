import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import NProgress from 'nprogress';
import { perPage } from '../../config';
import { DisplayError, StyledProductsList } from '..'
import { Product } from './components';

const Products = ({ page }) => {
  const { data, loading, error } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
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
    <>
      <StyledProductsList>
        {data?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </StyledProductsList>
    </>
  );
};

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    products(skip: $skip, first: $first) {
      id
      category
      brand
      title
      description
      image
      price
    }
  }
`;

export { ALL_PRODUCTS_QUERY, Products };
