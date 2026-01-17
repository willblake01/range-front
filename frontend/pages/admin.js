import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import NProgress from 'nprogress';
import { hasPermission } from '../lib';
import { useUser } from '../hooks';
import { PageMain } from '../components/styles';
import { AlternateHeader, DisplayError, Footer, PleaseLogin } from '../components/shared';
import { Admin } from '../components';
import { USERS_PER_PAGE } from '../components/admin/constants';
import { USERS_QUERY } from '../components/graphql/admin';

const AdminPage = () => {
  const router = useRouter();
  const { user, loading: userLoading, error: userError } = useUser();

  const pageParam = router.query.page;
  const pageNum = typeof pageParam === 'string' ? Number(pageParam) : 1;
  const currentPage = Number.isFinite(pageNum) && pageNum > 0 ? pageNum : 1;
  const skip = (currentPage - 1) * USERS_PER_PAGE;

  const hasAccess =
  !!user && (hasPermission(user, 'ADMIN') || hasPermission(user, 'PERMISSIONUPDATE'));

  const { data, loading: usersLoading, error: usersError } = useQuery(USERS_QUERY, {
    skip: !hasAccess,
    variables: { skip, first: USERS_PER_PAGE, orderBy: 'createdAt_DESC' },
    fetchPolicy: 'cache-and-network',
  });

  const isLoading = userLoading || (hasAccess && usersLoading);

  useEffect(() => {
    isLoading ? NProgress.start() : NProgress.done();

    return () => NProgress.done();
  }, [isLoading]);

  let content = React.ReactNode;

  if (userError) content = <DisplayError error={userError} />;
  else if (usersError) content = <DisplayError error={usersError} />;
  else if (isLoading) return <p>Loading...</p>;
  else if (!hasAccess)
    content = <p>You don’t have permission to view this page.</p>;
  else
    content = <Admin page={currentPage} users={data?.users ?? []} />;

  return (
    <>
      <AlternateHeader />
      <PageMain>
        <PleaseLogin>
          {content}
        </PleaseLogin>
      </PageMain>
      <Footer />
    </>
  );
};

export default AdminPage;
