import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Form } from './styles/Form';
import { useForm } from '../lib/useForm';
import { CURRENT_USER_QUERY, DisplayError, LargeButton } from '.';

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
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);

    // Send the email and password to the graphqlAPI
    const res = await signup().catch(console.error);
    console.log(res);
    console.log({ data, loading, error });
    resetForm();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Account Signup</h2>
      <DisplayError error={error} />
      <fieldset>
        {data?.createUser && (
          <p>
            Signed up with {data.createUser.email} - Please Go Head and Login!
          </p>
        )}
        <label htmlFor="email">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          autoComplete="firstName"
          value={inputs.firstName}
          onChange={handleChange}
        />
        <label htmlFor="email">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          autoComplete="lastName"
          value={inputs.lastName}
          onChange={handleChange}
        />
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
        <LargeButton type="submit" buttonText='Sign Up' />
      </fieldset>
    </Form>
  );
}

export { SignUp };
