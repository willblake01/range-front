import Link from 'next/link';
import ProductStyles from './styles/ProductStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';
import { useUser } from './User';

const Product = ({ product }) => {
  const user = useUser();
  
  return (
    <ProductStyles>
      <img
        src={product?.image}
        alt={product.title}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.title}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: '/learn-more'
          }}
        >
          Learn More ✏️
        </Link>
        <AddToCart id={product.id} />
        {user && (
          <>
            <Link
              href={{
                pathname: '/update',
                query: {
                  id: product.id,
                },
              }}
            >
              Edit ✏️
            </Link>
            <DeleteProduct id={product.id}>Delete</DeleteProduct>
          </>
        )}
      </div>
    </ProductStyles>
  );
}

export default Product;
