import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Nav } from '../components/shared';
import { CURRENT_USER_QUERY } from '../hooks';
import { CartStateProvider } from '../lib';
import { fakeUser, fakeCartItem } from './utils/testUtils';

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

const signedInMocksWithCartItems = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        authenticatedItem: {
          
          // This typename must be explicit because we use the `... on User` fragment
          __typename: 'User',
          ...fakeUser(),
          cart: [fakeCartItem()],
        },
      },
    },
  },
];

describe('<Nav/>', () => {
  it('renders a minimal nav when signed out', async () => {
    const { container } = render(
      <CartStateProvider>
        <MockedProvider mocks={notSignedInMocks}>
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders full nav when signed in', async () => {
    const { container } = render(
      <CartStateProvider>
        <MockedProvider mocks={signedInMocks} addTypename={false}>
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );

    await screen.findByRole('link', { name: /account/i });
    expect(container).toMatchSnapshot();
  });

  it('renders the amount of items in the cart', async () => {
    render(
      <CartStateProvider>
        <MockedProvider
          mocks={signedInMocksWithCartItems}
          defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}
        >
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );

    await screen.findByRole('link', { name: /account/i });

    expect(await screen.findByText('3')).toBeInTheDocument();
  });
});
