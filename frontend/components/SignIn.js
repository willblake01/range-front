import Router from 'next/router'
import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import { Form } from './styles/Form';
import { useForm } from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import { DisplayError } from './ErrorMessage';
import { LargeButton } from './LargeButton';

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

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      firstName
      lastName
      email
    }
  }
`;

const SignIn = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  const [signin, { data, loading, error }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    // refetch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    console.log(inputs);
    // Send the email and password to the graphqlAPI
    const res = await signin().catch(console.error);
    console.log(res);
    console.log({ data, loading, error });
    resetForm();
    if (res) {
      Router.push('/');
    }
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign Into Your Account</h2>
      <DisplayError error={error} />
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <LargeButton type="submit" buttonText='Sign In' />
        <LinkPosition>
          <Link href='/reset'>Forgot Password?</Link>
        </LinkPosition>
      </fieldset>
    </Form>
  );
}

export { SignIn };
