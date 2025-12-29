import { useEffect } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import NProgress from 'nprogress';
import { useForm } from '../lib';
import { DisplayError, LargeButton, Form } from './shared';

const StyledResetPassword = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: clamp(2rem, 5vw, 8rem);
  height: 100%;
  width: 100%;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60rem;
`;

const ResetPassword = ({ token }) => {
  const { inputs, handleChange, resetForm } = useForm({
    resetToken: token,
    password: '',
    confirmPassword: '',
  });
  
  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await reset().catch(console.error);
    resetForm();
  };

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (loading) return <p>Loading...</p>;
  
  return (
    <StyledResetPassword>
      <StyledFormContainer>
        <Form method='POST' onSubmit={handleSubmit}>
          <h2>Reset Your Password</h2>
          <DisplayError error={error} />
          <fieldset disabled={loading}>
            {data?.resetPassword && (
              <p>Success! You can now <a href='/login'>login</a> with your new password.</p>
            )}

            <label htmlFor='password'>
              New Password
            </label>
            <input
              type='password'
              name='password'
              autoComplete='new-password'
              value={inputs.password}
              onChange={handleChange}
            />
            <label htmlFor='confirmPassword'>
              Confirm Password
            </label>
            <input
              type='password'
              name='confirmPassword'
              autoComplete='new-password'
              value={inputs.confirmPassword}
              onChange={handleChange}
            />
            <LargeButton>Reset Password</LargeButton>
          </fieldset>
        </Form>
      </StyledFormContainer>
    </StyledResetPassword>
  );
};

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

export { ResetPassword };
