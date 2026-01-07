import { useEffect } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import NProgress from 'nprogress';
import { useForm } from '../lib';
import { DisplayError, LargeButton, Form } from './shared';

const StyledRequestResetPassword = styled.div`
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

const RequestResetPassword = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });

  const [signup, { data, loading, error }] = useMutation(
    REQUEST_RESET_PASSWORD_MUTATION,
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
  };

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (loading) return <p>Loading...</p>;

  return (
    <StyledRequestResetPassword>
      <StyledFormContainer>
        <Form method='POST' onSubmit={handleSubmit}>
          <h2>Request Password Reset</h2>
          <DisplayError error={error} />
          <fieldset>
            {data?.sendUserPasswordResetLink === null && (
              <p>Success! Check the browser console for a reset link!</p>
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
            <LargeButton type='submit'>Submit</LargeButton>
          </fieldset>
        </Form>
      </StyledFormContainer>
    </StyledRequestResetPassword>
  );
};

const REQUEST_RESET_PASSWORD_MUTATION = gql`
  mutation REQUEST_RESET_PASSWORD_MUTATION($email: String!) {
    RequestResetPassword(email: $email) {
      message
    }
  }
`;

export { RequestResetPassword };
