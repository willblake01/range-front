import AlternateHeader from '../components/AlternateHeader';
import { SearchStyles } from '../components/styles/DropDown';
import Search from '../components/Search';
import SleepingBags from '../components/SleepingBags';
import Footer from '../components/Footer';

const SleepingBagsPage = ({ query }) => (
  <>
    <AlternateHeader />
    <Search />
    <SleepingBags page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default SleepingBagsPage;
