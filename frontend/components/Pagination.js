import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { DisplayError } from '.';
import { perPage } from '../config';

const StyledPagination = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem auto;
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  width: fit-content;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--lightGrey);
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

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { count } = data.productsConnection.aggregate;
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
