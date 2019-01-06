import styled from 'styled-components';
import AlternateHeader from '../components/AlternateHeader';
import PleaseSignIn from '../components/PleaseSignIn';
import Permissions from '../components/Permissions';

const PermissionsStyle = styled.div `
  padding: 20px;
  min-height: 320px;
`;

const PermissionsPage = props => (
  <div>
    <AlternateHeader />
    <PleaseSignIn>
      <PermissionsStyle>
        <Permissions />
      </PermissionsStyle>
    </PleaseSignIn>
  </div>
);

export default PermissionsPage;
