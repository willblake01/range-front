import { render, screen, waitFor } from '@testing-library/react';
import waait from 'waait';
import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import Router from 'next/router';
import { Checkout, CREATE_ORDER_MUTATION } from '../components';
import { CartStateProvider } from '../lib';
import { CURRENT_USER_QUERY } from '../hooks';

const mocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: { __typename: 'User', id: 'u1', name: 'Will', email: 'will@test.com', cart: [] } } },
  },
  {
    request: { query: CREATE_ORDER_MUTATION, variables: { token: 'abc123' } }, // adjust to your mutation vars
    result: { data: { checkout: { __typename: 'Order', id: 'ord123' } } },     // adjust to your mutation result field
  },
];

beforeEach(() => {
  useStripe.mockReturnValue({
    createPaymentMethod: jest.fn().mockResolvedValue({ paymentMethod: 'abc123' }),
  });
  useElements.mockReturnValue({
    getElement: jest.fn(() => undefined),
  });
  Router.push.mockClear();
});

describe('<Checkout />', () => {
  it('renders and matches snapshot', async () => {
    const { container } = render(
      <CartStateProvider>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Checkout />
        </MockedProvider>
      </CartStateProvider>
    );

    await screen.findByTestId('checkout');
    expect(container).toMatchSnapshot();
  });

  it('submits the form properly', async () => {
    const user = userEvent.setup();

    render(
      <CartStateProvider>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Checkout />
        </MockedProvider>
      </CartStateProvider>
    );

    await screen.findByTestId('checkout');
    await user.click(screen.getByText(/Pay/i));

    await screen.findByText(/checking/i);
    await waitFor(() => waait());

    const stripe = useStripe();
    expect(stripe.createPaymentMethod).toHaveBeenCalled();
  });
});
