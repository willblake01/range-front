import CreateItem from '../components/CreateItem';
import ComponentPadding from '../components/styles/ComponentPadding';
import AlternateHeader from '../components/AlternateHeader';
import PleaseSignIn from '../components/PleaseSignIn';

const Admin = props => (
  <div>
    <AlternateHeader />
    <PleaseSignIn>
      <ComponentPadding>
        <CreateItem />
      </ComponentPadding>
    </PleaseSignIn>
  </div>
);

export default Admin;
