import AlternateHeader from '../components/AlternateHeader';
import PleaseSignIn from '../components/PleaseSignIn';
import Permissions from '../components/Permissions';

const PermissionsPage = props => (
  <div>
    <AlternateHeader />
    <PleaseSignIn>
      <Permissions />
    </PleaseSignIn>
  </div>
);

export default PermissionsPage;
