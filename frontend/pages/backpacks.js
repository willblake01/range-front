import ComponentPadding from '../components/styles/ComponentPadding';
import AlternateHeader from '../components/AlternateHeader';
import Backpacks from '../components/Backpacks';

const SleepingBagsPage = props => (
  <div>
    <AlternateHeader />
    <ComponentPadding>
      <Backpacks page={parseFloat(props.query.page) || 1} />
    </ComponentPadding>
  </div>
);

export default SleepingBagsPage;
