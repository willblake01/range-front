import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import NProgress from 'nprogress';
import { hasPermission } from '../lib';
import { useUser } from '../hooks';
import { PageMain } from '../components/styles';
import { AlternateHeader, DisplayError, Footer } from '../components/shared';
import { Admin } from '../components';
import { USERS_PER_PAGE } from '../components/admin/constants';
import { ALL_USERS_QUERY } from '../components/admin';

const AdminPage = () => {
  const router = useRouter();
  const { user, loading: userLoading, error: userError } = useUser();

  const pageParam = router.query.page;
  const pageNum = typeof pageParam === 'string' ? Number(pageParam) : 1;
  const currentPage = Number.isFinite(pageNum) && pageNum > 0 ? pageNum : 1;
  const skip = (currentPage - 1) * USERS_PER_PAGE;

  const hasAccess =
  !!user && (hasPermission(user, 'ADMIN') || hasPermission(user, 'PERMISSIONUPDATE'));

  const { data, loading: usersLoading, error: usersError } = useQuery(ALL_USERS_QUERY, {
    skip: !hasAccess,
    variables: { skip, first: USERS_PER_PAGE, orderBy: 'createdAt_DESC' },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    const loading = userLoading || usersLoading;
    loading ? NProgress.start() : NProgress.done();

    return () => NProgress.done();
  }, [userLoading, usersLoading]);

  if (userError) return <DisplayError error={userError} />;
  if (usersError) return <DisplayError error={usersError} />;
  if (userLoading || (hasAccess && usersLoading)) return <p>Loading...</p>;
  if (!user) return <p>You must be logged in.</p>;
  if (!hasAccess) return <p>You don’t have permission to view this page.</p>;

  return (
    <>
      <AlternateHeader />
      <PageMain>
        <Admin page={currentPage} users={data?.users ?? []} />
      </PageMain>
      <Footer />
    </>
  );
};

export default AdminPage;
