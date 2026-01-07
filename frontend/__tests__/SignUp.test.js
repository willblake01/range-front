import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';
import { CURRENT_USER_QUERY } from '../components';
import { SignUp, SIGNUP_MUTATION } from '../components';
import { fakeUser } from './utils/testUtils';

const me = fakeUser();
const mocks = [
  
  // signup mock mutation
  {
    request: {
      query: SIGNUP_MUTATION,
      variables: {
        name: me.name,
        email: me.email,
        password: 'wes',
      },
    },
    result: {
      data: {
        createUser: {
          __typename: 'User',
          id: 'abc123',
          email: me.email,
          name: me.name,
        },
      },
    },
  },
  
  // current user query mock
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: me } },
  },
];

describe('<SignUp/>', () => {
  it('renders and matches snapshot', async () => {
    const { container } = render(
      <MockedProvider>
        <SignUp />
      </MockedProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('calls the mutation properly', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <SignUp />
      </MockedProvider>
    );

    userEvent.type(screen.getByPlaceholderText('name'), me.name);
    userEvent.type(screen.getByPlaceholderText('email'), me.email);
    userEvent.type(screen.getByPlaceholderText('password'), 'wes');
    userEvent.click(screen.getByText('Sign Up!'));

    // loading state
    expect(screen.getByTestId('loading')).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByTestId('loading')).toHaveAttribute('disabled');
    
    await screen.findByText(`Signed up with ${me.email} — Please Login now`);
  });
});
