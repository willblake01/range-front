import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import NProgress from 'nprogress';
import { DisplayError, Product, StyledProductsList } from '.';

const Tents = () => {
  const { data, loading, error } = useQuery(TENTS_QUERY);

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  const tents = data?.tents ?? [];
  if (!tents) return <p>Tents not found.</p>;

  return (
    <StyledProductsList>
      {tents?.map(product => <Product product={product} key={product.id} />)}
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
