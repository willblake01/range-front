import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY, DisplayError } from '.';

const SIGN_OUT_MUTATION = gql`
  mutation {
    signout {
      message
    }
  }
`;

const SignOut = () => {
  const router = useRouter();

  const [signout, {data, error}] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  
  const handleSignOut = async () => {
    await signout();
    
    // Stay on current page after sign out
    router.reload();
  };

  return (
    <>
      {error && <DisplayError error={error} />}

      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>
    </>
  );
}

export { SignOut };
