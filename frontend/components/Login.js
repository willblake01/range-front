import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import NProgress from 'nprogress';
import { useForm } from '../lib';
import { CURRENT_USER_QUERY, DisplayError, StyledForm, LargeButton } from '.';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: 40px;
  height: 100%;
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
    const res = await login().catch(console.error);

    resetForm();

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

  return (
    <StyledLogin>
      <StyledForm method='POST' onSubmit={handleSubmit}>
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
      </StyledForm>
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
