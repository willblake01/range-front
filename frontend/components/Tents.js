import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { StyledProductsList } from '../components/styles';
import { DisplayError, Product } from '.';

const Tents = () => {
  const { data, error, loading } = useQuery(TENTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <StyledProductsList>
      {data.tents.map(product => <Product product={product} key={product.id} />)}
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
