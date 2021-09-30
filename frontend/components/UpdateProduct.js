import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useForm } from '../lib/useForm';
import { DisplayError } from './ErrorMessage';
import { Form } from './styles/Form';
import { LargeButton } from './LargeButton';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      title
      description
      category
      image
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $brand: String
    $title: String
    $description: String
    $category: String
    $image: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { brand: $brand, title: $title, description: $description, category: $category, image: $image price: $price }
    ) {
      id
      brand
      title
      description
      category
      image
      price
    }
  }
`;

const UpdateProduct = ({ id }) => {
  // 1. We need to get the existing product
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });
  // 2. We need to get the mutation to update the product
  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);
  // 2.5 Create some state for the form inputs:
  const { inputs, handleChange, clearForm, resetForm } = useForm(
    data?.Product || {
      brand: '',
      title: '',
      description: '',
      category: '',
      image: '',
      price: '',
    }
  );
  console.log(inputs);
  if (loading) return <p>loading...</p>;
  // 3. We need the form to handle the updates
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateProduct({
          variables: {
            id,
            brand: inputs.brand,
            title: inputs.title,
            description: inputs.description,
            category: inputs.category,
            image: inputs.image,
            price: inputs.price,
          },
        }).catch(console.error);
        console.log(res);
        // Submit the inputfields to the backend:
        // TODO: Handle Submit!!!
        // const res = await createProduct();
        // clearForm();
        // // Go to that product's page!
        // Router.push({
        //   pathname: `/product/${res.data.createProduct.id}`,
        // });
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
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

        <LargeButton type="submit" buttonText="Update Product" />
      </fieldset>
    </Form>
  );
}

export { UpdateProduct };
