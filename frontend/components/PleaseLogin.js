import { DisplayError, Login, useUser } from '.';

const PleaseLogin = ({ children }) => {
  const { user, loading, error } = useUser();

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!user) return <Login />;

  return children;
}

export { PleaseLogin };
