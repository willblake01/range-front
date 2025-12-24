import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { DisplayError, Product } from '.';
import { StyledProductsList } from '../components/styles';

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

const Backpacks = () => {
  const { data, error, loading } = useQuery(BACKPACKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <>
      <StyledProductsList>
        {data.backpacks.map(product => <Product product={product} key={product.id} />)}
      </StyledProductsList>
    </>
  )
}

export { BACKPACKS_QUERY, Backpacks };
