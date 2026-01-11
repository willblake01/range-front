import { useEffect } from 'react';
import Router from 'next/router';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import NProgress from 'nprogress';
import { useForm } from '../lib';
import { DisplayError, LargeButton, Form } from './shared';
import { CREATE_PRODUCT_MUTATION } from './products/queries';

const StyledCreateProduct = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: clamp(2rem, 5vw, 8rem);
  height: 100%;
  width: 100%;
`;

const StyledFormContainer = styled.div`
  width: 60rem;
`;

const CreateProduct = () => {
  const { inputs, handleChange, clearForm } = useForm({
    brand: '',
    title: '',
    description: '',
    image: '',
    category: '',
    price: '',
    clearance: false
  });
  
  const [createProduct, { loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: {
        ...inputs,
        price: parseInt(inputs.price, 10)
      },
      refetchQueries: ['PRODUCTS_QUERY']
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
        <Form
          onSubmit={async (e) => {
            e.preventDefault();

            const res = await createProduct().catch((err) => {
              toast.error(err.message);
              return null;
            });

            if (!res?.data?.createProduct) return;

            toast.success(`Created product ${res.data.createProduct.brand} ${res.data.createProduct.title}`);

            clearForm();
            
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
            <LargeButton  type='submit'>Submit</LargeButton>
          </fieldset>
        </Form>
      </StyledFormContainer>
    </StyledCreateProduct>
  );
};

export { CreateProduct };
