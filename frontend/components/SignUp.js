import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Form } from './styles/Form';
import { useForm } from '../lib/useForm';
import { Error } from './ErrorMessage';
import { LargeButton } from './LargeButton';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(data: { firstName: $firstName, lastName: $lastName, email: $email, password: $password }) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const SignUp = () => {
  const { inputs, handleChange, resetForm } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refectch the currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    console.log(inputs);
    const res = await signup().catch(console.error);
    console.log(res);
    console.log({ data, loading, error });
    resetForm();
    // Send the email and password to the graphqlAPI
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign Up For an Account</h2>
      <Error error={error} />
      <fieldset>
        {data?.createUser && (
          <p>
            Signed up with {data.createUser.email} - Please Go Head and Sign in!
          </p>
        )}
        <label htmlFor="email">
          First Name
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            autoComplete="firstName"
            value={inputs.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Last Name
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            autoComplete="lastName"
            value={inputs.lastName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email Address"
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
        <LargeButton type="submit" buttonText='Sign Up' />
      </fieldset>
    </Form>
  );
}
