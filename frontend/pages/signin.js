import styled from 'styled-components';
import AlternateHeader from '../components/AlternateHeader';
import ComponentPadding from '../components/styles/ComponentPadding';
import SignIn from '../components/SignIn';
import RequestReset from '../components/RequestReset';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-bottom: 4px;
`;

const signup = props => (
  <>
    <AlternateHeader />
    <ComponentPadding>
      <Columns>
        <SignIn />
        <RequestReset />
      </Columns>
    </ComponentPadding>
  </>
);

export default signup;
