import ComponentPadding from '../components/styles/ComponentPadding';
import AlternateHeader from '../components/AlternateHeader';
import Items from '../components/Items';

const ItemsPage = props => (
  <div>
    <AlternateHeader />
    <ComponentPadding>
      <Items page={parseFloat(props.query.page) || 1} />
    </ComponentPadding>
  </div>
);

export default ItemsPage;
