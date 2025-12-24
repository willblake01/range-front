import styled from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from '../lib';
import { CURRENT_USER_QUERY, DisplayError, Form, LargeButton } from '.';

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: 40px;
  height: 100%;
`;

const SignUp = () => {
  const { inputs, handleChange, resetForm } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,

    // refectch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the email and password to the graphqlAPI
    await signup().catch(console.error);

    resetForm();
  };

  return (
    <StyledSignUp>
      <Form method='POST' onSubmit={handleSubmit}>
        <h2>Account Signup</h2>
        <DisplayError error={error} />
        <fieldset>
          {data?.createUser && (
            <p>
              Signed up with {data.createUser.email} - Please Go Head and Login!
            </p>
          )}
          <label htmlFor='email'>
            First Name
          </label>
          <input
            type='text'
            name='firstName'
            autoComplete='firstName'
            value={inputs.firstName}
            onChange={handleChange}
          />
          <label htmlFor='email'>
            Last Name
          </label>
          <input
            type='text'
            name='lastName'
            autoComplete='lastName'
            value={inputs.lastName}
            onChange={handleChange}
          />
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
          <label htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            name='password'
            autoComplete='password'
            value={inputs.password}
            onChange={handleChange}
          />
          <LargeButton type='submit' buttonText='Sign Up' />
        </fieldset>
      </Form>
    </StyledSignUp>
  );
};

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
      firstName
      lastName
      email
    }
  }
`;

export { SignUp };
