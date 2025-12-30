import { useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import NProgress from 'nprogress';
import { DisplayError } from './DisplayError';
import { perPage } from '../../config';

const StyledPagination = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  text-align: center;
  background-color: var(--white);
  margin: 2rem auto;
  border: 0.1rem solid var(--lightGrey);
  border-radius: 1rem;
  width: fit-content;
  & > * {
    margin: 0;
    padding: 1.5rem 3rem;
    border-right: 0.1rem solid var(--lightGrey);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

const Pagination = ({ page }) => {
  const { data, loading, error } = useQuery(PAGINATION_QUERY);

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  const count = data?.productsConnection?.aggregate?.count;
  const pageCount = Math.ceil(count / perPage);
  
  return (
    <StyledPagination>
      <Head>
        <title>
          Range Front - Page {page} of {pageCount}
        </title>
      </Head>
      {page > 1 && (
        <Link href={`/products/${page - 1}`}>
          ← Prev
        </Link>
      )}
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      {page < pageCount && (
        <Link href={`/products/${page + 1}`}>
          Next →
        </Link>
      )}
    </StyledPagination>
  );
};

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    productsConnection {
      aggregate {
        count
      }
    }
  }
`;

export { PAGINATION_QUERY, Pagination };
