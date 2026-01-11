import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { DisplayError } from '../../shared/DisplayError';
import { Pagination } from '../../styles';
import { USERS_PER_PAGE } from '../constants';
import { USERS_PAGINATION_QUERY } from '../../graphql/admin';

const UsersPagination = ({ page }) => {
  const { data, loading, error } = useQuery(USERS_PAGINATION_QUERY);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  const count = data?.usersCount ?? 0;
  const pageCount = Math.max(1, Math.ceil(count / USERS_PER_PAGE));

  const prevDisabled = page <= 1;
  const nextDisabled = page >= pageCount;

  const hrefForPage = (p) => `/admin?page=${p}`;

  return (
    <Pagination aria-label='Users Pagination'>
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

export { UsersPagination };
