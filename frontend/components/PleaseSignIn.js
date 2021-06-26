import { Query } from '@apollo/client/react/components';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from './User';
import SignIn from './SignIn';

const SignInStyle = styled.div`
  margin-bottom: 10px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  padding: 20px;
`;

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY} >
    {({data, loading}) => {
      if(loading) return <p>Loading...</p>
      if(!data.me) {
        return (
          <SignInStyle>
            <p>Please Sign In Before Continuing</p>
            <SignIn />
          </SignInStyle>
        );
      };
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
