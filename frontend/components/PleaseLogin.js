import { Login, useUser } from '.';

const PleaseLogin = ({ children }) => {
  const { user, loading } = useUser();

  if (loading) return <p>Loading…</p>;
  if (!user) return <Login />;

  return children;
}

export { PleaseLogin };
