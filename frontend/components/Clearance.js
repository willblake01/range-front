import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import NProgress from 'nprogress';
import { perPage } from '../config';
import { ProductsContainer, PaginationRow } from './styles';
import { DisplayError, ProductsList } from './shared';
import { Product, ProductsPagination } from './products/components';
import { PRODUCTS_QUERY } from './graphql/products';

const StyledClearance = styled.div`
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

  const noProducts = data?.products?.length === 0;

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  return (
    <StyledClearance>
      {
        noProducts
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
    </StyledClearance>
  );
};

export { Clearance };
