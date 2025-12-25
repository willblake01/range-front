import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import NProgress from 'nprogress';
import { formatMoney, hasPermission } from '../lib';
import { AddToCart, DisplayError, DeleteProduct, useUser } from '.';

const StyledProductDescription = styled.div`
  justify-content: center;
  align-items: top;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  font-size: 1.4rem;
  padding: 40px;
  height: 100%;
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
  .buttonGrid {
    grid-column: 2/3;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    * {
      background: var(--white);
      border: 2px solid var(--green);
      font-size: 1rem;
      padding: 1rem;
      text-align: center;
      color: var(--green);
      text-decoration: none;
    }
  }
  @media (max-width: 768px) {
    padding: 20px;
    .product {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .image {
      grid-column: 1;
      grid-row: 1;
    }
    .details {
      grid-column: 1;
      grid-row: 2;
    }
    .buttonGrid {
      grid-column: 1;
      grid-row: 3;
    }
  }
`;

const ProductDescription = ({ id }) => {
  const { user } = useUser();

  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  });

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  const product = data?.product;
  if (!product) return <p>Product not found.</p>;

  return (
    <StyledProductDescription>
      <Head>
        <title>Range Front | {product.title}</title>
      </Head>
      <div className='product'>
        <div className='image'>
          <img
            src={product.image}
            alt={product.image.title}
          />
        </div>
        <div className='details'>
          <h1>{product.brand}</h1>
          <h2><strong>{product.title}</strong></h2>
          <p>{product.description}</p>
          <h2>{formatMoney(product.price)}</h2>
        </div>
        <div className='buttonGrid'>
        {hasPermission(user, 'PRODUCTUPDATE') && (
          <a href={`/product/${product.id}/update`}>
            Edit ✏️
          </a>
        )}
        {hasPermission(user, 'PRODUCTDELETE') && (
          <DeleteProduct id={product.id}>
            Delete 🗑️
          </DeleteProduct>
        )}
        <a
          href={`/${product.category}/learn-more`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn More 📖
        </a>
        <AddToCart id={product.id} />
        </div>
      </div>
    </StyledProductDescription>
  );
};

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      brand
      title
      description
      category
      image
      price
    }
  }
`;

export { ProductDescription };
