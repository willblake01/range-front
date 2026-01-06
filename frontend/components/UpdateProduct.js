import Router from 'next/router';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useForm } from '../lib';
import { DisplayError, LargeButton, Form } from './shared';
import { SINGLE_PRODUCT_QUERY } from './ProductDescription';

const StyledUpdateProduct = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: clamp(2rem, 5vw, 8rem);
  height: 100%
  width: 100%;
`;

const StyledFormContainer = styled.div`
  width: 60rem;
`;

const UpdateProduct = ({ id }) => {
  const safeId = Array.isArray(id) ? id[0] : id;

  // 1. We need to get the existing product
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id: safeId },
    skip: !id
  });

  // 2. We need to get the mutation to update the product
  const [
    updateProduct,
    { error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  // 2.5 Create some state for the form inputs:
  const { inputs, handleChange, clearForm } = useForm(
    data?.product || {
      id: '',
      brand: '',
      title: '',
      description: '',
      image: '',
      category: '',
      price: '',
      clearance: false
    },
    [data?.product?.id]
  );

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  // 3. We need the form to handle the updates
  return (
    <StyledUpdateProduct>
      <StyledFormContainer>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();

            const res = await updateProduct({
              variables: {
                ...inputs,
                price: parseInt(inputs.price, 10)
              },
            }).catch((err) => {
              toast.error(err.message);
              return null;
            });

            toast.success(`Updated product ${res.data.updateProduct.brand} ${res.data.updateProduct.title}`);

            clearForm();
            
            Router.push({
              pathname: `/product/${res.data.updateProduct.id}`,
            });
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
            <label htmlFor='clearance'>
              Clearance
            </label>
            <div className='checkbox'>
              <input
                type='checkbox'
                id='clearance'
                name='clearance'
                checked={inputs.clearance}
                onChange={handleChange}
              />
            </div>
            <LargeButton type='submit'>Submit</LargeButton>
          </fieldset>
        </Form>
      </StyledFormContainer>
    </StyledUpdateProduct>
  );
};

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

export { UpdateProduct };
