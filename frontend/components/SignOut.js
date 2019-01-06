import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from './User';

const StyledButton = styled.button`
  background-color: ${props => props.theme.darkOrange};
`;

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`;

const SignOut = props => (
  <Mutation
    mutation={SIGNOUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {signout => <StyledButton onClick={signout}><a>Sign Out</a></StyledButton>}
  </Mutation>
)

export default SignOut;
