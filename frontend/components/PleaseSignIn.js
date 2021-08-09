import { useUser } from './User';
import { SignIn } from './SignIn';

export const PleaseSignIn = ({ children }) => {
  const user = useUser();
  if (!user) return <SignIn />;
  return children;
}
