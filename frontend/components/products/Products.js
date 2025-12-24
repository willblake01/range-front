import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { perPage } from '../../config';
import { DisplayError, ProductsList } from '..'
import { Product } from './components';

const Products = ({ products, page }) => {
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
      <ProductsList>
        {data.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsList>
    </>
  );
};

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

export { ALL_PRODUCTS_QUERY, Products };
