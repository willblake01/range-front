import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import NProgress from 'nprogress';
import { ProductsContainer, PaginationRow } from '../../styles/ProductsList.style';
import { DisplayError, Pagination, ProductsList } from '../../shared';
import { Product } from '../..';

const SleepingBagsPage = styled.div`
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509893/range-front/topography.png');
  color: var(--green);
  width: 100%;
  min-height: 100vh;
  padding: clamp(2rem, 5vw, 4rem);
`;

const SleepingBags = ({ page }) => {
  const { data, loading, error } = useQuery(SLEEPING_BAGS_QUERY);

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  const sleepingBags = data?.sleepingBags ?? [];
  if (!sleepingBags) return <p>Sleeping Bags not found.</p>;

  return (
    <SleepingBagsPage>
      <ProductsContainer>
        <ProductsList>
          {sleepingBags?.map(product => <Product product={product} key={product.id} />)}
        </ProductsList>

        <PaginationRow>
          <Pagination page={page} />
        </PaginationRow>
      </ProductsContainer>
    </SleepingBagsPage>
  );
};

const SLEEPING_BAGS_QUERY = gql`
  query SLEEPING_BAGS_QUERY {
    sleepingBags {
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

export { SLEEPING_BAGS_QUERY, SleepingBags };
