import Link from 'next/link';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import AddToCart from './AddToCart';
import DisplayError from './ErrorMessage';

const ProductStyles = styled.div`
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  padding: 40px;
  img {
    object-fit: contain;
  }

  .product {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    grid-column: 1/3;
    background-color: var(--white);
    grid-row: 1;
    border: 1px solid var(--offWhite);
    box-shadow: var(--bs);
    padding: 20px;
  }

  .image {
    grid-column: 1/2;
    display: flex;
    justify-content: center;
  }

  .details {
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    grid-row: 1;
  }

  .buttonList {
    grid-column: 2/3;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    & > * {
      background: var(--white);
      border: 1px solid var(--green);
      font-size: 1rem;
      padding: 1rem;
      text-align: center;
    }
  }
`;

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      title
      price
      description
      id
      image
    }
  }
`;

const SingleProduct = ({ id }) => {
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { product } = data;
  
  return (
    <ProductStyles>
      <Head>
        <title>Range Front | {product.title}</title>
      </Head>
      <div className="product">
        <div className="image">
          <img
            src={product.image}
            alt={product.image.title}
          />
        </div>
        <div className="details">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
        <div className="buttonList">
          <Link
            href={{
              pathname: '/learn-more'
            }}
          >
            Learn More ✏️
          </Link>
          <AddToCart id={product.id} />
        </div>
      </div>
    </ProductStyles>
  );
}

export default SingleProduct;
