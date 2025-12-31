import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { DisplayError } from './DisplayError';
import { perPage } from '../../config';

const StyledPagination = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
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

const Pagination = ({ page, where }) => {
  const { data, loading, error } = useQuery(PAGINATION_QUERY, {
    variables: { where },
  });

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  const count = data?.productsConnection?.aggregate?.count ?? 0;
  const pageCount = Math.max(1, Math.ceil(count / perPage));

  const qs = new URLSearchParams();
  if (where?.category_contains) qs.set('category', where.category_contains);
  if (where?.clearance === true) qs.set('clearance', 'true');

  const hrefForPage = (p) => {
    const next = new URLSearchParams(qs);
    next.set('page', String(p));
    return `/products?${next.toString()}`;
  };

  const prevDisabled = page <= 1;
  const nextDisabled = page >= pageCount;

  return (
    <StyledPagination aria-label='Pagination'>
      <Head>
        <title>
          Range Front - Page {page} of {pageCount}
        </title>
      </Head>

      {prevDisabled ? (
        <span aria-disabled='true'>← Prev</span>
      ) : (
        <Link href={hrefForPage(page - 1)} legacyBehavior>
          <a>← Prev</a>
        </Link>
      )}

      <p>Page {page} of {pageCount}</p>
      <p>{count} Items Total</p>

      {nextDisabled ? (
        <span aria-disabled='true'>Next →</span>
      ) : (
        <Link href={hrefForPage(page + 1)} legacyBehavior>
          <a>Next →</a>
        </Link>
      )}
    </StyledPagination>
  );
};

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY($where: ProductWhereInput) {
    productsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export { PAGINATION_QUERY, Pagination };
