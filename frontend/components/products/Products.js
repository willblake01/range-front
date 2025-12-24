import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { perPage } from '../../config';
import { StyledProductsList } from '../styles';
import { DisplayError, Product } from './components';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    products(skip: $skip, first: $first) {
      id
      brand
      title
      price
      description
      image
    }
  }
`;

const Products = ({ page }) => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <>
      <StyledProductsList>
        {data.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </StyledProductsList>
    </>
  );
}

export { ALL_PRODUCTS_QUERY, Products };
