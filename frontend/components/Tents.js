import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Product } from './Product';
import { ProductsListStyles } from '../components/styles/ProductsListStyles';

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

const Tents = () => {
  const { data, error, loading } = useQuery(TENTS_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <ProductsListStyles>
        {data.tents.map(product => <Product product={product} key={product.id} />)}
      </ProductsListStyles>
    </>
  )
}

export { TENTS_QUERY, Tents };
