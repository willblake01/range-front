import AlternateHeader from '../components/AlternateHeader';
import ComponentPadding from '../components/styles/ComponentPadding';
import Reset from '../components/Reset';

const resetPage = props => (
  <>
    <AlternateHeader />
    <ComponentPadding>
      <p>Reset your password {props.query.resetToken}</p>
      <Reset resetToken={props.query.resetToken} />
    </ComponentPadding>
  </>
);

export default resetPage;
