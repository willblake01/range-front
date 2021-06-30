import AlternateHeader from '../components/AlternateHeader';
import { SearchStyles } from '../components/styles/DropDown';
import Search from '../components/Search';
import Tents from '../components/Tents';
import Footer from '../components/Footer';

const TentsPage = ({ query }) => (
  <>
    <AlternateHeader />
    <SearchStyles>
      <Search />
    </SearchStyles>
    <Tents page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default TentsPage;
