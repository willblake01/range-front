import ComponentPadding from '../components/styles/ComponentPadding';
import AlternateHeader from '../components/AlternateHeader';
import SleepingBags from '../components/SleepingBags';

const SleepingBagsPage = props => (
  <div>
    <AlternateHeader />
    <ComponentPadding>
      <SleepingBags page={parseFloat(props.query.page) || 1} />
    </ComponentPadding>
  </div>
);

export default SleepingBagsPage;
