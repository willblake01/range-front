import Link from 'next/link';
import { ProductStyles } from '../../styles/ProductStyles';
import { Title } from '../../styles/Title';
import { PriceTag } from '../../styles/PriceTag';
import { formatMoney } from '../../../lib';
import { AddToCart, LearnMore } from '../..';

const Product = ({ product }) => (
    <ProductStyles>
      <Link href={`/product/${product.id}`}>
        <a>
          <img
            src={product?.image}
            alt={product.title}
          />
        </a>
      </Link>
      <Title>
        <Link href={`/product/${product.id}`}>
          <a>{product.brand}</a>
        </Link>
      </Title>
      <Title>
        <Link href={`/product/${product.id}`}>
          <a>{product.title}</a>
        </Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonGrid">
        <LearnMore />
        <AddToCart id={product.id} />
      </div>
    </ProductStyles>
  );

export { Product };
