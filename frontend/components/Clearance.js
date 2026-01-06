import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import NProgress from 'nprogress';
import { perPage } from '../config';
import { ProductsContainer, PaginationRow } from './styles';
import { DisplayError, ProductsList } from './shared';
import { Product, ProductsPagination } from './products/components';

const ClearancePage = styled.div`
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509893/range-front/topography.png');
  color: var(--green);
  width: 100%;
  min-height: 100vh;
  padding: clamp(2rem, 5vw, 4rem);
`;

const Clearance = ({ page }) => {
  const { data, loading, error } = useQuery(PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      where: { clearance: true }
    },
  });

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  const noProductsFound = data?.products?.length === 0;

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  return (
    <ClearancePage>
      {
        noProductsFound
          ?
        <p>No products found.</p>
          : 
        <ProductsContainer>
          <ProductsList>
            {data?.products?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ProductsList>
          <PaginationRow>
            <ProductsPagination page={page} where={{ clearance: true }} />
          </PaginationRow>
        </ProductsContainer>
      }
    </ClearancePage>
  );
};

const PRODUCTS_QUERY = gql`
  query PRODUCTS_QUERY(
    $skip: Int = 0
    $first: Int = ${perPage}
    $where: ProductWhereInput
  ) {
    products(skip: $skip, first: $first, where: $where) {
      id
      brand
      title
      description
      image
      category
      price
      clearance
    }
  }
`;

export { PRODUCTS_QUERY, Clearance };
