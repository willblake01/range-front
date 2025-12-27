import styled from 'styled-components';
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useForm } from '../lib';
import { DisplayError, LargeButton, StyledForm } from './shared';

const StyledUpdateProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: 8rem;
  height: max-content%;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80rem;
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
    data?.product || {
      id: '',
      brand: '',
      title: '',
      description: '',
      category: '',
      image: '',
      price: '',
    }
  );

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  // 3. We need the form to handle the updates
  return (
    <StyledUpdateProduct>
      <StyledFormContainer>
        <StyledForm
          onSubmit={async (e) => {
            e.preventDefault();

            await updateProduct({
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

          <h2>Update Product</h2>
          <fieldset disabled={updateLoading} aria-busy={updateLoading}>
            <label htmlFor='brand'>
              Brand
            </label>
            <input
              type='text'
              id='brand'
              name='brand'
              value={inputs.brand}
              onChange={handleChange}
            />
            <label htmlFor='title'>
              Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              value={inputs.title}
              onChange={handleChange}
            />
            <label htmlFor='description'>
              Description
            </label>
            <textarea
              type='text'
              id='description'
              name='description'
              value={inputs.description}
              onChange={handleChange}
            />
            <label htmlFor='category'>
              Category
            </label>
            <input
              type='text'
              id='category'
              name='category'
              value={inputs.category}
              onChange={handleChange}
            />
            <label htmlFor='image'>
              Image
            </label>
            <input
              type='text'
              id='image'
              name='image'
              value={inputs.image}
              onChange={handleChange}
            />
            <label htmlFor='price'>
              Price
            </label>
            <input
              type='number'
              id='price'
              name='price'
              value={inputs.price}
              onChange={handleChange}
            />
            <LargeButton type='submit'>Submit</LargeButton>
          </fieldset>
        </StyledForm>
      </StyledFormContainer>
    </StyledUpdateProduct>
  );
};

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

export { UpdateProduct };
