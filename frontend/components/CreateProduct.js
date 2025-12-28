import { useEffect } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import NProgress from 'nprogress';
import { useForm } from '../lib';
import { DisplayError, LargeButton, StyledForm } from './shared';
import { ALL_PRODUCTS_QUERY } from '.';

const StyledCreateProduct = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: clamp(2rem, 5vw, 8rem);
  height: 100%;
  width: 100%;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60rem;
`;

const CreateProduct = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: '',
    price: '',
    description: '',
  });
  
  const [createProduct, { loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;
  
  return (
    <StyledCreateProduct>
      <StyledFormContainer>
        <StyledForm
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
          <h2>Create Product</h2>
          <fieldset disabled={loading} aria-busy={loading}>
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
            <LargeButton  type='submit'>Submit</LargeButton>
          </fieldset>
        </StyledForm>
      </StyledFormContainer>
    </StyledCreateProduct>
  );
};

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

export { CreateProduct };
