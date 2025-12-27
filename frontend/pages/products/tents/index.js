import { AlternateHeader, Footer } from '../../../components/shared';
import { Tents } from '../../../components';

const TentsPage = ({ query }) => (
  <>
    <AlternateHeader />
    <Tents page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default TentsPage;
