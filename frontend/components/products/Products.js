import styled from 'styled-components';
import { ProductsContainer, PaginationRow } from '../styles';
import { ProductsList } from '../shared';
import { ProductsPagination, Product } from './components';

const ProductsPage = styled.div`
  width: 100%;
  padding: clamp(2rem, 5vw, 4rem);
`;

const Products = ({ page, products, where }) => {
  return (
    <ProductsPage>
      <ProductsContainer>
        <ProductsList>
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsList>
        <PaginationRow>
          <ProductsPagination page={page} where={where} />
        </PaginationRow>
      </ProductsContainer>
    </ProductsPage>
  );
};

export { Products };
