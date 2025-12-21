import { AlternateHeader, Footer, Tents } from '../components';

const TentsPage = ({ query }) => (
  <>
    <AlternateHeader />
    <Tents page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default TentsPage;
