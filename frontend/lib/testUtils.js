import casual from 'casual';
import { PRODUCTS_PAGINATION_QUERY } from '../components';

// seed it so we get consistent results
casual.seed(777);

const fakeProduct = (overrides = {}) => ({
  id: '123',
  brand: 'Acme',
  title: 'Tent',
  description: 'Nice tent',
  image: 'https://example.com/tent.jpg',
  largeImage: 'https://example.com/tent-large.jpg',
  category: 'tents',
  price: 5000,
  clearance: false,
  ...overrides,
});

const fakeUser = (overrides) => ({
  __typename: 'User',
  id: '4234',
  name: casual.name,
  email: casual.email,
  permissions: ['ADMIN'],
  orders: [],
  cart: [],
  ...overrides,
});

const fakeOrderItem = () => ({
  __typename: 'OrderItem',
  id: casual.uuid,
  image: {
    image: `${casual.word}.jpg`,
  },
  name: casual.words(),
  price: 4234,
  quantity: 1,
  description: casual.words(),
});

const fakeOrder = () => ({
  __typename: 'Order',
  id: 'ord123',
  charge: 'ch_123',
  total: 40000,
  createdAt: String(Date.now()), // API returns ms as string
  user: { id: 'user123' },
  items: [
    {
      id: 'oi1',
      brand: 'Acme',
      title: 'Tent',
      description: 'Nice tent',
      image: 'https://example.com/tent.jpg',
      largeImage: 'https://example.com/tent-large.jpg',
      category: 'tents',
      price: 20000,
      quantity: 1,
      clearance: false
    },
    {
      id: 'oi2',
      brand: 'Acme',
      title: 'Backpack',
      description: 'Nice pack',
      image: 'https://example.com/pack.jpg',
      largeImage: 'https://example.com/pack-large.jpg',
      category: 'tents',
      price: 20000,
      quantity: 1,
      clearance: false
    },
  ],
});

const fakeCartItem = (overrides) => ({
  __typename: 'CartItem',
  id: 'omg123',
  quantity: 3,
  item: fakeProduct(),
  user: fakeUser(),
  ...overrides,
});

// Fake LocalStorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

const makePaginationMocksFor = (length) => {
  return [
    {
      request: {
        query: PRODUCTS_PAGINATION_QUERY,
        variables: {
          where: {}
        },
      },
      result: {
        data: {
          _allProductsMeta: { count: 50 },
        },
      },
      delay: 100000
    },
  ];
};

export {
  makePaginationMocksFor,
  LocalStorageMock,
  fakeUser,
  fakeCartItem,
  fakeOrder,
  fakeOrderItem,
  fakeProduct
};
