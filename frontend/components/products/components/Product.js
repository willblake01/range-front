import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import { formatMoney } from '../../../lib';
import { AddToCart, StyledPriceTag, StyledTitle } from '../..';
import { LearnMore } from '.';

const StyledProduct = styled.div`
  background: var(--white);
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: contain;
    background-color: var(--white);
    padding: 20px;
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
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    * {
      background: var(--white);
      border: 2px solid var(--green);
      font-size: 1rem;
      padding: 1rem;
      color: var(--green);
      text-decoration: none;
    }
  }
`;

const Product = ({ product }) => {
  const router = useRouter();

  return (
    <StyledProduct>
      <Link href={`/product/${product.id}`}>
        <a>
          <img
            src={product?.image}
            alt={product.title}
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
      <StyledPriceTag>{formatMoney(product.price)}</StyledPriceTag>
      <p>{product.description}</p>
      <div className='buttonGrid'>
        <a
          href={`/${product.category}/learn-more`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn More 📖
        </a>
        <AddToCart id={product.id} />
      </div>
    </StyledProduct>
  );
};

export { Product };
