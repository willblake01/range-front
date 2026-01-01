import Image from 'next/image'
import styled from 'styled-components';
import Link from 'next/link';
import { formatMoney } from '../../../lib';
import { AddToCart, LearnMoreButton } from '../../shared';
import { StyledTitle } from '../..';
import { PriceTag } from '.';

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 0.1rem solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  padding-top: 2rem;

  img {
    width: 100%;
    height: 40rem;
    object-fit: contain;
    background-color: var(--white);
  }

  p {
    line-height: 2;
    flex-grow: 1;
    padding: 2rem 3rem;
    text-align: left;
    font-size: 1.4rem;
  }

  .buttonGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 0.1rem;
    width: 100%;
    * {
      background: var(--white);
      border: 0.2rem solid var(--green);
      font-size: 1rem;
      padding: 1rem;
      color: var(--green);
      text-decoration: none;
    }
  }
`;

const Product = ({ product }) => {
  return (
    <StyledProduct>
      <Link href={`/product/${product.id}`}>
        <a>
          <Image
            src={product?.image}
            alt={product.title}
            height={400}
            width={600}
          />
        </a>
      </Link>
      <StyledTitle>
        <Link href={`/product/${product.id}`}>
          <a>{product.brand}</a>
        </Link>
      </StyledTitle>
      <StyledTitle>
        <Link href={`/product/${product.id}`}>
          <a>{product.title}</a>
        </Link>
      </StyledTitle>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className='buttonGrid'>
        <LearnMoreButton category={product.category} />
        <AddToCart id={product.id} />
      </div>
    </StyledProduct>
  );
};

export { Product };
