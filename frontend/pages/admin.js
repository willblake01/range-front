import CreateItem from '../components/CreateItem';
import AlternateHeader from '../components/AlternateHeader';
import PleaseSignIn from '../components/PleaseSignIn';

const Admin = props => (
  <div>
    <AlternateHeader />
    <PleaseSignIn>
      <CreateItem />
    </PleaseSignIn>
  </div>
);

export default Admin;
