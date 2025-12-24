import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { DisplayError, Product, StyledProductsList } from '.';

const SleepingBags = () => {
  const { data, error, loading } = useQuery(SLEEPING_BAGS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <StyledProductsList>
      {data.sleepingBags.map(product => <Product product={product} key={product.id} />)}
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
