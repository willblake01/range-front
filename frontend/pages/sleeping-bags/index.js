import { AlternateHeader } from '../../components/AlternateHeader';
import { Footer, SleepingBags } from '../../components';

const SleepingBagsPage = ({ query }) => (
  <>
    <AlternateHeader />
    <SleepingBags page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default SleepingBagsPage;
