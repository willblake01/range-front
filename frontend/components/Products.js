import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { ProductsListStyles } from './styles/ProductsListStyles';
import { Product } from './Product';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      id
      title
      price
      description
      image
    }
  }
`;

export const Products = ({ page }) => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
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
