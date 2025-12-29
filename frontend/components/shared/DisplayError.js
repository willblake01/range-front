import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledError = styled.div`
  background: white;
  padding: 2rem;
  margin: 2rem 0;
  border: 0.1rem solid rgba(0, 0, 0, 0.05);
  border-left: 0.5rem solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

const DisplayError = ({ error }) => {
  if (!error || !error?.message) return null;
  
  if (error?.networkError && error?.networkError?.result && error?.networkError.result?.errors?.length) {
    return error?.networkError.result.errors.map((error, i) => (
      <StyledError key={i}>
        <p data-test='graphql-error'>
          <strong>Error!</strong>
          {error?.message.replace('GraphQL error: ', '')}
        </p>
      </StyledError>
    ));
  }
  
  return (
    <StyledError>
      <p data-test='graphql-error'>
        <strong>Error!</strong>
        {error?.message.replace('GraphQL error: ', '')}
      </p>
    </StyledError>
  );
};

DisplayError.defaultProps = {
  error: {},
};

DisplayError.propTypes = {
  error: PropTypes.object,
};

export { DisplayError };
