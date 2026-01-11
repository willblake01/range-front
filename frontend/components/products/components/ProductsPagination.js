import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import { DisplayError } from '../../shared/DisplayError';
import { Pagination } from '../../styles';
import { perPage } from '@/config';
import { PRODUCTS_PAGINATION_QUERY } from '../queries';

const ProductsPagination = ({ page, where }) => {
  const { data, loading, error } = useQuery(PRODUCTS_PAGINATION_QUERY, {
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
    <Pagination aria-label='Products Pagination'>
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
    </Pagination>
  );
};

export { PRODUCTS_PAGINATION_QUERY, ProductsPagination };
