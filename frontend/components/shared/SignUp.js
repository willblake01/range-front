import { useEffect } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import NProgress from 'nprogress';
import { useForm } from '../../lib';
import { DisplayError, LargeButton, Form } from '.';
import { CURRENT_USER_QUERY } from '../../hooks';

const StyledSignUp = styled.div`
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
  width: 60rem;
`;

const SignUp = () => {
  const router = useRouter();

  const { inputs, handleChange, resetForm } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    awaitRefetchQueries: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the email and password to the graphqlAPI
    await signup().catch(err => toast.error(err.message));

    toast.success('Account created!');

    resetForm();

    router.push('/products');
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
        <Form method='POST' onSubmit={handleSubmit}>
          <DisplayError error={error} />
          <h2>Account Signup</h2>

          <fieldset>
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
        </Form>
      </StyledFormContainer>
    </StyledSignUp>
  );
};

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $firstName: String!,
    $lastName: String!,
    $email: String!,
    $password: String!
  ) {
    signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
      firstName
      lastName
      email
    }
  }
`;

export { SignUp };
