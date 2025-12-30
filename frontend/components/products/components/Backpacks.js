import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import NProgress from 'nprogress';
import { ProductsContainer, PaginationRow } from '../../styles/ProductsList.style';
import { DisplayError, Pagination, ProductsList } from '../../shared';
import { Product } from '../..';

const BackpacksPage = styled.div`
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509893/range-front/topography.png');
  color: var(--green);
  width: 100%;
  min-height: 100vh;
  padding: clamp(2rem, 5vw, 4rem);
`;

const Backpacks = ({ page }) => {
  const { data, loading, error } = useQuery(BACKPACKS_QUERY);

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  const backpacks = data?.backpacks ?? [];
  if (!backpacks) return <p>Backpacks not found.</p>;

  return (
    <BackpacksPage>
      <ProductsContainer>
        <ProductsList>
          {backpacks?.map(product => <Product product={product} key={product.id} />)}
        </ProductsList>

        <PaginationRow>
          <Pagination page={page} />
        </PaginationRow>
      </ProductsContainer>
    </BackpacksPage>
  );
};

const BACKPACKS_QUERY = gql`
  query BACKPACKS_QUERY {
    backpacks {
      id
      brand
      category
      title
      price
      description
      image
      largeImage
    }
  }
`;

export { BACKPACKS_QUERY, Backpacks };
