import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { DisplayError } from './ErrorMessage';

const SIGN_OUT_MUTATION = gql`
  mutation {
    signout {
      message
    }
  }
`;

const SignOut = () => {
  const [signout, {data, error}] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  if (error) return <DisplayError error={error} />;

  return (
    <>
      <button type="button" onClick={signout}>
        Sign Out
      </button>
    </>
  );
}

export { SignOut };
