import { AlternateHeader } from '../components/AlternateHeader';
import { SearchStyles } from '../components/styles/DropDown';
import { Search } from '../components/Search';
import { Backpacks } from '../components/Backpacks';
import { Footer } from '../components/Footer';

const BackpacksPage = ({query}) => (
  <>
    <AlternateHeader />
    <Search />
    <Backpacks page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default BackpacksPage;
