import { AlternateHeader, Footer } from '../../../components/shared';
import { Backpacks } from '../../../components';

const BackpacksPage = ({query}) => (
  <>
    <AlternateHeader />
    <Backpacks page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default BackpacksPage;
