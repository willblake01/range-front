import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { ProductsListStyles } from '../components/styles';
import { Product } from '.';

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

const SleepingBags = () => {
  const { data, error, loading } = useQuery(SLEEPING_BAGS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <ProductsListStyles>
        {data.sleepingBags.map(product => <Product product={product} key={product.id} />)}
      </ProductsListStyles>
    </>
  )
}

export { SLEEPING_BAGS_QUERY, SleepingBags };
