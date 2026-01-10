import Image from 'next/image'
import Head from 'next/head';
import styled from 'styled-components';
import { formatMoney, hasPermission } from '../lib';
import { useUser } from '../hooks';
import { AddToCart, LearnMoreButton, PriceTag } from './shared';
import { DeleteProduct } from '.';

const StyledProductDescription = styled.div`
  flex: 1;
  justify-content: center;
  align-items: top;
  height: 100%;
  padding: clamp(2rem, 5vw, 8rem);

  img {
    object-fit: contain;
  }

  .product {
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    grid-column: 1/3;
    background-color: var(--white);
    grid-row: 1;
    border: 0.1rem solid var(--offWhite);
    box-shadow: var(--bs);
    padding: 2rem;
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
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 0.1rem;

    * {
      background: var(--white);
      border: 0.2rem solid var(--green);
      font-size: 1rem;
      padding: 1rem;
      text-align: center;
      color: var(--green);
      text-decoration: none;
    }
  }
    
  @media (max-width: 76.8rem) {
    padding: 2rem;

    .product {
      grid-template-columns: 1fr;
      gap: 2rem;
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

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProductDescription = ({ product }) => {
  const { user } = useUser();

  return (
    <StyledProductDescription>
      <Head>
        <title>Range Front | {product.title}</title>
      </Head>
      <StyledProduct>
        {product.clearance && <PriceTag clearance={product.clearance}>Clearance</PriceTag>}
        <div className='product'>
          <div className='image'>
            <Image
              src={product.image}
              alt={product.title}
              height={400}
              width={600}
            />
          </div>
          <div className='details'>
            <h1>{product.brand}</h1>
            <h2><strong>{product.title}</strong></h2>
            <p>{product.description}</p>
            <h2>{formatMoney(product.price)}</h2>
          </div>
          <div className='buttonGrid'>
          {user && hasPermission(user, 'PRODUCTUPDATE') && (
            <a href={`/product/${product.id}/update`}>
              Edit ✏️
            </a>
          )}
          {user && hasPermission(user, 'PRODUCTDELETE') && (
            <DeleteProduct id={product.id}>
              Delete 🗑️
            </DeleteProduct>
          )}
          <LearnMoreButton category={product.category} />
          <AddToCart id={product.id} />
          </div>
        </div>
      </StyledProduct>
    </StyledProductDescription>
  );
};

export { ProductDescription };
