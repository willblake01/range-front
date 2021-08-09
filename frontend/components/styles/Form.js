import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }
  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

export const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  width: 800px;
  background-color: var(--white);
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
    border: 1px solid transparent;
    margin: 0 0 10px 0;
    background-color: var(--offWhite);
    height: 3.8rem;
    width: 100%;
    &:focus {
      outline: 0;
      border-color: var(--darkOrange);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: var(--darkOrange);
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        var(--green) 0%,
        var(--darkOrange) 50%,
        var(--brown) 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;
