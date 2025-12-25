import { Login, useUser } from '.';

const PleaseLogin = ({ children }) => {
  const { user, loading, error } = useUser();

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Something went wrong.</p>
  if (!user) return <Login />;

  return children;
}

export { PleaseLogin };
