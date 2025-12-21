import Link from 'next/link';
import { ProductStyles } from './styles/ProductStyles';
import { Title } from './styles/Title';
import { PriceTag } from './styles/PriceTag';
import { formatMoney, hasPermission } from '../lib';
import { AddToCart, DeleteProduct, useUser } from '.';

const Product = ({ product }) => {
  const user = useUser();
  
  return (
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
          <a>{product.title}</a>
        </Link>
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
        {hasPermission(user, 'ADMIN') && (
          <>
            <Link href={`/update?id=${product.id}`}>
              <a>Edit ✏️</a>
            </Link>
            <DeleteProduct id={product.id}>Delete</DeleteProduct>
          </>
        )}
      </div>
    </ProductStyles>
  );
}

export { Product };
