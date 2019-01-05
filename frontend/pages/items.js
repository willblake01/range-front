import styled from 'styled-components';
import Items from '../components/Items';
import AlternateHeader from '../components/AlternateHeader';

const ItemsStyle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ItemsPage = props => (
  <div>
    <AlternateHeader />
    <ItemsStyle>
      <Items page={parseFloat(props.query.page) || 1} />
    </ItemsStyle>
  </div>
);

export default ItemsPage;
