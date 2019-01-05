import styled from 'styled-components';
import AlternateHeader from '../components/AlternateHeader';
import Nav from '../components/Nav';
import SignUp from '../components/SignUp';

const Columns = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const signup = props => (
  <>
  <AlternateHeader>
    <Nav />
  </AlternateHeader>
  <Columns>
    <SignUp />
  </Columns>
  </>
);

export default signup;
