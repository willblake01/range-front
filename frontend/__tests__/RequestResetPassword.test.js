  
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';
import {
  RequestResetPassword, REQUEST_RESET_PASSWORD_MUTATION,
} from '../components';

const mocks = [
  {
    request: {
      query: REQUEST_RESET_PASSWORD_MUTATION,
      variables: { email: 'wesbos@gmail.com' },
    },
    result: {
      data: { sendUserPasswordResetLink: null },
    },
  },
];

describe('<RequestResetPassword/>', () => {
  it('renders and matches snapshot', async () => {
    const { container } = render(
      <MockedProvider>
        <RequestResetPassword />
      </MockedProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('calls the mutation', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <RequestResetPassword />
      </MockedProvider>
    );

    userEvent.type(screen.getByPlaceholderText('email'), 'willblakebooking@gmail.com');
    userEvent.click(screen.getByText(/Request Reset/i));

    const success = await screen.findByText(/Success/i);
    
    expect(success).toBeInTheDocument();
    expect(wrapper.find('p').text()).toContain(
      'Success! Check the browser console for a reset link!'
    );
  });
});
