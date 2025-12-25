import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import NProgress from 'nprogress';
import { DisplayError, Product, StyledProductsList } from '.';

const SleepingBags = () => {
  const { data, loading, error } = useQuery(SLEEPING_BAGS_QUERY);

  if (error) return <DisplayError error={error} />;

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  return (
    <StyledProductsList>
      {data?.sleepingBags?.map(product => <Product product={product} key={product.id} />)}
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
