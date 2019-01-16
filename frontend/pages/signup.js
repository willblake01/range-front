import styled from 'styled-components';
import AlternateHeader from '../components/AlternateHeader';
import ComponentPadding from '../components/styles/ComponentPadding';
import SignUp from '../components/SignUp';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const signup = props => (
  <>
    <AlternateHeader />
    <ComponentPadding>
      <Columns>
        <SignUp />
      </Columns>
    </ComponentPadding>
  </>
);

export default signup;
