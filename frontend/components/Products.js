import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { ProductsListStyles } from './styles/ProductsListStyles';
import { Product } from '.';
import { perPage } from '../config';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    products(skip: $skip, first: $first) {
      id
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
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <ProductsListStyles>
        {data.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsListStyles>
    </>
  );
}

export { ALL_PRODUCTS_QUERY, Products };
