  
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { PaginationStyles } from './styles/PaginationStyles';
import { DisplayError } from '.';
import { perPage } from '../config';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    productsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = ({ page }) => {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;
  const { count } = data.productsConnection.aggregate;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>
          Range Front - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`} aria-disabled={page <= 1}>
        ← Prev
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      <Link href={`/products/${page + 1}`} aria-disabled={page >= pageCount}>
        Next →
      </Link>
    </PaginationStyles>
  );
}

export { PAGINATION_QUERY, Pagination };
