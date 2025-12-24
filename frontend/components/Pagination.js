  
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { StyledPagination } from './styles';
import { DisplayError } from '.';
import { perPage } from '../config';

const Pagination = ({ page }) => {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);

  if (loading) return 'Loading...';
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
