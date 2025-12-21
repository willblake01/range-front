import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Form } from './styles/Form';
import { useForm } from '../lib/useForm';
import { DisplayError, LargeButton } from '.';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      firstName
      lastName
    }
  }
`;

const Reset = ({ token }) => {
  const { inputs, handleChange, resetForm } = useForm({
    resetToken: token,
    password: '',
    confirmPassword: '',
  });
  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });
  
  async function handleSubmit(e) {
    e.preventDefault();
    await reset().catch(console.error);
    resetForm();
  }
  
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Reset Your Password</h2>
      <DisplayError error={error} />
      <fieldset disabled={loading}>
        {data?.resetPassword && (
          <p>Success! You can now <a href="/login">login</a> with your new password.</p>
        )}

        <label htmlFor="password">
          New Password
          <input
            type="password"
            name="password"
            placeholder="New Password"
            autoComplete="new-password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            autoComplete="new-password"
            value={inputs.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <LargeButton type="submit" buttonText='Reset Password' />
      </fieldset>
    </Form>
  );
}

export { Reset };
