import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import NProgress from 'nprogress';
import { useForm } from '../../lib';
import { DisplayError, LargeButton, StyledForm } from '.';
import { CURRENT_USER_QUERY } from '..';

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  margin: 0;
  padding: 8rem;
  height: max-content;
  width: 100%;
  h2 {
    margin: 0;
  }
`;

const StyledFormContainer = styled.div`
  display: flex;
  width: 60rem;
`;

const SignUp = () => {
  const router = useRouter();
  const currentPathname = router.pathname;

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

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (loading) return <p>Loading...</p>;

  return (
    <StyledSignUp>
      <StyledFormContainer>
        <StyledForm method='POST' onSubmit={handleSubmit}>
          <DisplayError error={error} />
          {currentPathname === '/admin' ? <h2>Create User</h2> : <h2>Account Signup</h2>}
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
            <LargeButton type='submit'>Submit</LargeButton>
          </fieldset>
        </StyledForm>
      </StyledFormContainer>
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
