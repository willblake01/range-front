import gql from 'graphql-tag';
import { perPage } from '../../config';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $brand: String
    $title: String!
    $description: String!
    $image: String
    $category: String
    $price: Int!
    $clearance: Boolean
  ) {
    createProduct(
      brand: $brand
      title: $title
      description: $description
      image: $image
      category: $category
      price: $price
      clearance: $clearance
    ) {
      id
      brand
      title
      description
      image
      category
      price
      clearance
    }
  }
`;

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      brand
      title
    }
  }
`;

const PRODUCTS_PAGINATION_QUERY = gql`
  query PRODUCTS_PAGINATION_QUERY($where: ProductWhereInput) {
    productsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

const PRODUCTS_QUERY = gql`
  query PRODUCTS_QUERY($skip: Int = 0, $first: Int = ${perPage}, $where: ProductWhereInput) {
    products(skip: $skip, first: $first, where: $where) {
      id
      brand
      title
      description
      image
      category
      price
      clearance
    }
  }
`;

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      brand
      title
      description
      category
      image
      price
      clearance
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $brand: String
    $title: String
    $description: String
    $image: String
    $category: String
    $price: Int
    $clearance: Boolean
  ) {
    updateProduct(
      id: $id
      brand: $brand
      title: $title
      description: $description
      image: $image
      category: $category
      price: $price
      clearance: $clearance
    ) {
      id
      brand
      title
      description
      image
      category
      price
      clearance
    }
  }
`;

export { CREATE_PRODUCT_MUTATION, DELETE_PRODUCT_MUTATION, PRODUCTS_PAGINATION_QUERY, PRODUCTS_QUERY, SINGLE_PRODUCT_QUERY, UPDATE_PRODUCT_MUTATION };
