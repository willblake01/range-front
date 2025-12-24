import Link from 'next/link';
import { formatMoney } from '../../../lib';
import { StyledPriceTag, StyledProduct, StyledTitle } from '../../styles';
import { AddToCart } from '../..';
import { LearnMore } from '.';

const Product = ({ product }) => (
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
        <LearnMore />
        <AddToCart id={product.id} />
      </div>
    </StyledProduct>
  );

export { Product };
