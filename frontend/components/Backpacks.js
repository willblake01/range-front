import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Product from './Product';
import ProductsListStyles from '../components/styles/ProductsListStyles';

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
  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error.message}</p>;

  return (
    <>
      <ProductsListStyles>
        {data.backpacks.map(product => <Product product={product} key={product.id} />)}
      </ProductsListStyles>
    </>
  )
}

export default Backpacks;
export { BACKPACKS_QUERY };
