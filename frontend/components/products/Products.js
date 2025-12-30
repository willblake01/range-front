import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import NProgress from 'nprogress';
import { perPage } from '../../config';
import { ProductsContainer, PaginationRow } from '../styles/ProductsList.style';
import { DisplayError, Pagination, ProductsList } from '../shared';
import { Product } from './components';

const ProductsPage = styled.div`
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509893/range-front/topography.png');
  color: var(--green);
  width: 100%;
  min-height: 100vh;
  padding: clamp(2rem, 5vw, 4rem);
`;

const Products = ({ page, where }) => {
  const { data, loading, error } = useQuery(PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      where,
    },
  });

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  return (
    <ProductsPage>
      <ProductsContainer>
        <ProductsList>
          {data?.products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsList>
        <PaginationRow>
          <Pagination page={page} where={where} />
        </PaginationRow>
      </ProductsContainer>
    </ProductsPage>
  );
};

const PRODUCTS_QUERY = gql`
  query PRODUCTS_QUERY($skip: Int = 0, $first: Int = ${perPage}, $where: ProductWhereInput) {
    products(skip: $skip, first: $first, where: $where) {
      id
      category
      brand
      title
      description
      image
      price
    }
  }
`;

export { PRODUCTS_QUERY, Products };
