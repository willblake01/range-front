import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import {
  ProductDescription, SINGLE_PRODUCT_QUERY,
} from '../components';
import { fakeItem } from './utils/testUtils';

const item = fakeItem();
describe('<ProductDescription/>', () => {
  it('renders with proper data', async () => {
    const mocks = [
      {

        // when someone makes a request with this query and variable combo
        request: { query: SINGLE_PRODUCT_QUERY, variables: { id: '123' } },
        
        // return this fake data (mocked data)
        result: {
          data: {
            Product: item,
          },
        },
      },
    ];

    const { container } = render(
      <MockedProvider mocks={mocks}>
        <ProductDescription id='123' />
      </MockedProvider>
    );

    await screen.findByTestId('ProductDescription');

    expect(container).toMatchSnapshot();
  });

  it('Errors with a not found item', async () => {
    const mocks = [
      {
        request: { query: SINGLE_PRODUCT_QUERY, variables: { id: '123' } },
        result: {
          errors: [{ message: 'No products found.' }],
        },
      },
    ];

    const { container } = render(
      <MockedProvider mocks={mocks}>
        <ProductDescription id='123' />
      </MockedProvider>
    );

    await screen.findByTestId('graphql-error');

    expect(container).toHaveTextContent('No products found.');
  });
});
