import { PageMain } from '../components/styles';
import { AlternateHeader, Footer } from '../components/shared';
import { About } from '../components';

const AboutPage = () => (
  <>
    <AlternateHeader />
    <PageMain>
      <About />
    </PageMain>
    <Footer />
  </>
);

export default AboutPage;
