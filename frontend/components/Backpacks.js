import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import NProgress from 'nprogress';
import { DisplayError, Product, StyledProductsList } from '.';

const Backpacks = () => {
  const { data, loading, error } = useQuery(BACKPACKS_QUERY);
  if (error) return <DisplayError error={error} />;

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  return (
    <>
      <StyledProductsList>
        {data?.backpacks?.map(product => <Product product={product} key={product.id} />)}
      </StyledProductsList>
    </>
  );
};

const BACKPACKS_QUERY = gql`
  query BACKPACKS_QUERY {
    backpacks {
      id
      brand
      category
      title
      price
      description
      image
      largeImage
    }
  }
`;

export { BACKPACKS_QUERY, Backpacks };
