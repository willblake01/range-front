import { useRouter } from 'next/router';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import { Form } from './styles/Form';
import { useForm } from '../lib/useForm';
import { CURRENT_USER_QUERY, DisplayError, LargeButton } from '.';

const LinkPosition = styled.div`
  float: right;
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: blue;
  }
`;

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

const Login = () => {
  const router = useRouter();
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: inputs,

    // refetch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {

    e.preventDefault();
    console.log(inputs);

    // Send the email and password to the graphqlAPI
    const res = await login().catch(console.error);
    
    console.log(res);
    console.log({ data, loading, error });

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
      }
    }
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <DisplayError error={error} />
      <LinkPosition>
        <Link href='/signup'>Create account</Link>
      </LinkPosition>
      <h2>Account login</h2>
      <fieldset>
        <label htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <label htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          autoComplete="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <LargeButton type="submit" buttonText='Login' />
        <LinkPosition>
          <Link href='/reset-password'>Forgot Password?</Link>
        </LinkPosition>
      </fieldset>
    </Form>
  );
}

export { Login };
