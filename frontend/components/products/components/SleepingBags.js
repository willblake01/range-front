import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import NProgress from 'nprogress';
import { DisplayError } from '../../shared';
import { Product, StyledProductsList } from '../..';

const SleepingBags = () => {
  const { data, loading, error } = useQuery(SLEEPING_BAGS_QUERY);

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  const sleepingBags = data?.sleepingBags ?? [];
  if (!sleepingBags) return <p>Sleeping Bags not found.</p>;

  return (
    <StyledProductsList>
      {sleepingBags?.map(product => <Product product={product} key={product.id} />)}
    </StyledProductsList>
  );
};

const SLEEPING_BAGS_QUERY = gql`
  query SLEEPING_BAGS_QUERY {
    sleepingBags {
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

export { SLEEPING_BAGS_QUERY, SleepingBags };
