import { Login, useUser } from '.';

const PleaseLogin = ({ children }) => {
  const user = useUser();

  if (!user) return <Login />;
  return children;
}

export { PleaseLogin };
