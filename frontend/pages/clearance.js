import { PageMain } from '../components/styles';
import { AlternateHeader, Footer, PleaseLogin } from '../components/shared';
import { Clearance } from '../components';

const ClearancePage = ({query}) => (
  <>
    <AlternateHeader />
    <PageMain>
      <PleaseLogin>
        <Clearance page={parseFloat(query.page) || 1} />
      </PleaseLogin>
    </PageMain>
    <Footer />
  </>
);

export default ClearancePage;
