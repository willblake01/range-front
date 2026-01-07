import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';
import Router from 'next/router';
import waait from 'waait';
import { CreateProduct, CREATE_PRODUCT_MUTATION, PRODUCTS_QUERY } from '../components';
import { fakeItem, makePaginationMocksFor } from './utils/testUtils';

jest.mock('next/router', () => ({
  push: jest.fn(),
}));

const item = fakeItem();

describe('<CreateProduct/>', () => {
  it('renders and matches snapshot', async () => {
    const { container } = render(
      <MockedProvider>
        <CreateProduct />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('handles state updating', async () => {
    render(
      <MockedProvider>
        <CreateProduct />
      </MockedProvider>
    );

    userEvent.type(screen.getByPlaceholderText('Name'), item.name);
    userEvent.type(
      screen.getByPlaceholderText('Price'),
      item.price.toString()
    );

    userEvent.type(
      screen.getByPlaceholderText('Description'),
      item.description
    );

    expect(screen.getByDisplayValue(item.name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(item.price.toString())).toBeInTheDocument();
    expect(screen.getByDisplayValue(item.description)).toBeInTheDocument();
    // await waitFor();
  });
  it('creates an item when the form is submitted', async () => {
    const mocks = [
      {
        request: {
          query: CREATE_PRODUCT_MUTATION,
          variables: {
            name: item.name,
            description: item.description,
            image: '',
            price: item.price,
          },
        },
        result: {
          data: {
            createProduct: {
              ...item,
              id: 'abc123',
              __typename: 'Item',
            },
          },
        },
      },
      
      // All Products
      {
        request: {
          query: PRODUCTS_QUERY,
          variables: {
            skip: 0,
            first: 4,
          },
        },
        result: {
          data: {
            allProducts: [item],
          },
        },
      },
      ...makePaginationMocksFor(2),
    ];

    render(
      <MockedProvider mocks={mocks}>
        <CreateProduct />
      </MockedProvider>
    );
    userEvent.type(screen.getByPlaceholderText('Name'), item.name);

    userEvent.clear(screen.getByPlaceholderText('Price'));

    userEvent.type(
      screen.getByPlaceholderText('Price'),
      item.price.toString()
    );

    userEvent.type(
      screen.getByPlaceholderText('Description'),
      item.description
    );

    // mock the router
    userEvent.click(screen.getByText('Submit'));
    
    await waitFor(() => waait(500));

    expect(Router.push).toHaveBeenCalled();
    expect(Router.push).toHaveBeenCalledWith({
      pathname: '/product/abc123',
    });
  });
});
