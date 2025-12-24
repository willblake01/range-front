import styled from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from '../lib';
import { DisplayError, StyledForm, LargeButton } from '.';

const StyledRequestResetPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: 40px;
  height: 100%;
`;

const RequestResetPassword = () => {
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
    <StyledRequestResetPassword>
      <StyledForm method='POST' onSubmit={handleSubmit}>
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
          <LargeButton type='submit'>Submit</LargeButton>
        </fieldset>
      </StyledForm>
    </StyledRequestResetPassword>
  );
};

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    RequestResetPassword(email: $email) {
      message
    }
  }
`;

export { RequestResetPassword };
