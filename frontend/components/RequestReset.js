import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from '../lib';
import { Form } from './styles';
import { DisplayError, LargeButton } from '.';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

const RequestReset = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });
  const [signup, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,

      // refectch the currently logged in user
      // refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the email and password to the graphqlAPI
    await signup().catch(console.error);

    resetForm();
  }

  return (
    <Form method='POST' onSubmit={handleSubmit}>
      <h2>Request Password Reset</h2>
      <DisplayError error={error} />
      <fieldset>
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Check your email for a link!</p>
        )}

        <label htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          name='email'
          autoComplete='email'
          value={inputs.email}
          onChange={handleChange}
        />
        <LargeButton type='submit' buttonText='Submit' />
      </fieldset>
    </Form>
  );
}

export { RequestReset };
