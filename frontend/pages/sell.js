import { CreateProduct } from '../components/CreateProduct';
import { PleaseSignIn } from '../components/PleaseSignIn';

const SellPage = () => {
  return (
    <>
      <PleaseSignIn>
        <CreateProduct />
      </PleaseSignIn>
    </>
  );
}

export default SellPage;
