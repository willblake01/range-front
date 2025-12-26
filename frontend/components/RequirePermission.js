import { useUser } from '../hooks';
import { hasPermission } from '../lib';
import { DisplayError } from '.';

const RequirePermission = ({ children, permission }) => {
  const { user, loading, error } = useUser();

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must be logged in to access this page.</p>;

  const hasAccess = hasPermission(user, permission) || hasPermission(user, 'ADMIN');

  if (!hasAccess) {
    return <p>You don&apos;t have permission to access this page.</p>;
  };

  return (
    <>
      {children}
    </>
  );
};

export { RequirePermission };
