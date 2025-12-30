import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { DisplayError } from './shared';
import { CURRENT_USER_QUERY } from '../hooks';

const SignOut = () => {
  const router = useRouter();

  const [signout, {data, error}] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  
  const handleSignOut = async () => {
    await signout().catch((err) => {
      toast.error(err.message);
      return null;
    });

    toast('Signed out 👋');

    // Stay on current page after sign out
    router.replace(router.asPath);
  };

  return (
    <>
      {error && <DisplayError error={error} />}

      <button type='button' onClick={handleSignOut}>
        Sign Out
      </button>
    </>
  );
};

const SIGN_OUT_MUTATION = gql`
  mutation {
    signout {
      message
    }
  }
`;

export { SignOut };
