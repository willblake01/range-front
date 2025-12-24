import { AlternateHeader, Backpacks, Footer } from '../../components';

const BackpacksPage = ({query}) => (
  <>
    <AlternateHeader />
    <Backpacks page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default BackpacksPage;
