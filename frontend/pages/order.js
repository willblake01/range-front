import PleaseSignIn from '../components/PleaseSignIn';
import AlternateHeader from '../components/AlternateHeader';
import ComponentPadding from '../components/styles/ComponentPadding';
import Order from '../components/Order';

const OrderPage = props => (
  <>
    <PleaseSignIn>
      <AlternateHeader />
      <ComponentPadding>
        <Order id={props.query.id} />
      </ComponentPadding>
    </PleaseSignIn>
  </>
);

export default OrderPage;
