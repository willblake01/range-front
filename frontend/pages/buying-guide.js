import { PageMain } from '../components/styles';
import { AlternateHeader, Footer } from '../components/shared';
import { BuyingGuide } from '../components';

const BuyingGuidePage = () => (
    <>
        <AlternateHeader />
        <PageMain>
            <BuyingGuide />
        </PageMain>
        <Footer />
    </>
);

export default BuyingGuidePage;
