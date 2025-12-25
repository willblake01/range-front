import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import NProgress from 'nprogress';
import { DisplayError, Product, StyledProductsList } from '.';

const Tents = () => {
  const { data, loading, error } = useQuery(TENTS_QUERY);

  if (error) return <DisplayError error={error} />;

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  return (
    <StyledProductsList>
      {data?.tents?.map(product => <Product product={product} key={product.id} />)}
    </StyledProductsList>
  );
};

const TENTS_QUERY = gql`
  query TENTS_QUERY {
    tents {
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

export { TENTS_QUERY, Tents };
