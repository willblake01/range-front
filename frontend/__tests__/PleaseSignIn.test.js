
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { CURRENT_USER_QUERY, PleaseLogin } from '../components';
import { fakeUser } from '../lib/testUtils';

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: null } },
  },
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: fakeUser() } },
  },
];

describe('<PleaseLogin/>', () => {
  it('renders the login dialog to logged out users', async () => {
    const { container } = render(
      <MockedProvider mocks={notSignedInMocks}>
        <PleaseLogin />
      </MockedProvider>
    );

    expect(container).toHaveTextContent(/Login to your/);
  });

  it('renders the child component when the user is signed in', async () => {
    const Hey = () => <p>Hey!</p>;
    const { container } = render(
      <MockedProvider mocks={signedInMocks}>
        <PleaseLogin>
          <Hey />
        </PleaseLogin>
      </MockedProvider>
    );
    await screen.findByText('Hey!');
    expect(container).toContainHTML('<p>Hey!</p>');
  });
});
