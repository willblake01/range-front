import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import NProgress from 'nprogress';
import { DisplayError, Product, StyledProductsList } from '.';

const Backpacks = () => {
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
    <>
      <StyledProductsList>
        {backpacks?.map(product => <Product product={product} key={product.id} />)}
      </StyledProductsList>
    </>
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
