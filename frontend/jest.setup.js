import '@testing-library/jest-dom';
import 'jest-styled-components';

jest.mock('next/router', () => ({
  __esModule: true,

  // for: import { useRouter } from 'next/router'
  useRouter: jest.fn(() => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(null),
    beforePopState: jest.fn(),
    events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() },
    isFallback: false,
  })),

  // for: import Router from 'next/router'
  default: {
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(null),
    beforePopState: jest.fn(),
    events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() },
  },
}));

jest.mock('next/link', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: ({ href, children }) => {
      const child = React.Children.only(children);
      return React.cloneElement(child, { href });
    },
  };
});

jest.mock('@stripe/react-stripe-js', () => {
  const React = require('react');
  return {
    __esModule: true,
    CardElement: () => React.createElement('div', null),
    Elements: ({ children }) => React.createElement('div', null, children),
    useStripe: jest.fn(),
    useElements: jest.fn(),
  };
});
