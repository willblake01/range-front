import Link from 'next/link';
import { ProductStyles } from './styles/ProductStyles';
import { Title } from './styles/Title';
import { PriceTag } from './styles/PriceTag';
import { formatMoney } from '../lib/formatMoney';
import { AddToCart, DeleteProduct, useUser } from '.';

const Product = ({ product }) => {
  const user = useUser();
  console.log('product', product)
  return (
    <ProductStyles>
      <Link href={`/product/${product.id}`}>
        <img
          src={product?.image}
          alt={product.title}
        />
      </Link>
      <Title>
        <Link href={`/product/${product.id}`}>{product.title}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonList">
        <a
          href='/learn-more'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn More ✏️
        </a>
        <AddToCart id={product.id} />
        {user && (
          <>
            <a
              href={`/update?id=${product.id}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Edit ✏️
            </a>
            <DeleteProduct id={product.id}>Delete</DeleteProduct>
          </>
        )}
      </div>
    </ProductStyles>
  );
}

export { Product };
