import styled from 'styled-components';
import SingleItem from '../components/SingleItem';
import Nav from '../components/Nav';
import Cart from '../components/Cart';

const NavStyle = styled.div`
  #nav-bar {
    position: relative;
    bottom: 110px;
  }
`;

const Item = props => (
  <div>
    <Nav id='nav-bar' />
    <SingleItem id={props.query.id} />
    <Cart />
  </div>
);

export default Item;
