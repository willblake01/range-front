import { useEffect } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import NProgress from 'nprogress';
import { useForm } from '../../lib';
import { LargeButton, Form } from '.';
import { DisplayError } from '../shared';
import { CURRENT_USER_QUERY } from '../../hooks';

const StyledLogin = styled.div`
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

const StyledLink = styled.div`
  float: right;
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: blue;
  }
`;

const Login = () => {
  const router = useRouter();

  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: inputs,

    // refetch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the email and password to the graphqlAPI
    const res = await login().catch((err) => {
      toast.error(err.message);
      return null;
    });

    if (!res) return;

    resetForm();

    const loggedInUser = res?.data?.login;
    if (!loggedInUser) return;

    toast.success(`Welcome back, ${loggedInUser?.firstName || 'friend'}!`);

    if (res) {

      // Redirect to the redirect param, or reload current page
      const redirectPath = router.query.redirect;

      if (redirectPath) {
        router.push(redirectPath);
      } else if (router.pathname === '/login') {

        // If on login page, go home
        router.push('/');
      } else {

        // Otherwise reload current page to show logged-in state
        router.reload();
      };
    };
  };

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (loading) return <p>Loading...</p>;

  return (
    <StyledLogin>
      <StyledFormContainer>
        <Form method='POST' onSubmit={handleSubmit}>
          <DisplayError error={error} />
          <StyledLink>
            <Link href='/signup'>Create account</Link>
          </StyledLink>
          <h2>Account login</h2>
          <fieldset>
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
            <StyledLink>
              <Link href='/reset-password'>Forgot Password?</Link>
            </StyledLink>
          </fieldset>
        </Form>
      </StyledFormContainer>
    </StyledLogin>
  );
};

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      email
    }
  }
`;

export { Login };
