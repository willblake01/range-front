import { useEffect } from 'react';
import NProgress from 'nprogress';
import { DisplayError, Login, useUser } from '.';

const PleaseLogin = ({ children }) => {
  const { user, loading, error } = useUser();

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!user) return <Login />;

  return children;
}

export { PleaseLogin };
