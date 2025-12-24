import { hasPermission } from '../lib';
import { useUser } from '.';

const RequirePermission = ({ children, permission }) => {
  const { user } = useUser();
  
  const hasAccess = user && hasPermission(user, permission) || hasPermission(user, 'ADMIN');

  return (
    <>
      {!user && <p>You must be logged in to access this page.</p>}

      {user && !hasPermission(user, permission) && (
        <p>You don't have permission to access this page.</p>
      )}
      <div style={{ display: hasAccess ? 'block' : 'none' }}>
        {children}
      </div>
    </>
  );
};

export { RequirePermission };
