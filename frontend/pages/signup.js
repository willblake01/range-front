import styled from 'styled-components';
import AlternateHeader from '../components/AlternateHeader';
import Nav from '../components/Nav';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

const NavStyle = styled.div`
  position: relative;
  top: 100px;
`;

const Columns = styled.div`
  position: relative;
  top: 10px;
  margin-bottom: 20px;
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
    <SignIn />
  </Columns>
  </>
);

export default signup;
