import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import { useForm } from '../lib/useForm';
import { DisplayError } from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';
import { Form } from './styles/Form';
import { LargeButton } from './LargeButton';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? And What types are they
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

const CreateProduct = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: '',
    price: '',
    description: '',
  });
  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );
  
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        // Submit the inputfields to the backend:
        const res = await createProduct();
        clearForm();
        // Go to that product's page!
        Router.push({
          pathname: `/product/${res.data.createProduct.id}`,
        });
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="brand">
          Brand
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder="Brand"
            value={inputs.brand}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={inputs.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="category">
          Category
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            value={inputs.category}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="image">
          Image
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Image"
            value={inputs.image}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>

        <LargeButton type="submit" buttonText="Add Product" />
      </fieldset>
    </Form>
  );
}

export { CreateProduct };
