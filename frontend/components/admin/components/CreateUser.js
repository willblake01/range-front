import { useEffect } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import NProgress from 'nprogress';
import { useForm } from '@/lib';
import { DisplayError, LargeButton, Form } from '../../shared';
import { CREATE_USER_MUTATION } from '../queries';

const StyledSignUp = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509893/range-front/topography.png');
  color: var(--green);
  margin: 0;
  padding: clamp(2rem, 5vw, 8rem);
  height: 100%;
  width: 100%;
`;

const StyledFormContainer = styled.div`
  width: 60rem;
`;

const CreateUser = () => {
  const { inputs, handleChange, resetForm } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    variables: inputs,
    refetchQueries: ['ALL_USERS_QUERY'],
    awaitRefetchQueries: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createUser();
      if (!res?.data?.signup?.id) return;

      toast.success('User created!');

      resetForm();
    } catch (err) {
      const msg = err?.message || 'Create user failed';

      if (/unique|already exists|email/i.test(msg)) {
        toast.error('A user with that email already exists');

        return;
      }

      toast.error(msg);
    }
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

          <h2>Create User</h2>
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

export { CreateUser };
