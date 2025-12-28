import { useRouter } from 'next/router';
import { PageMain } from '../components/styles';
import { AlternateHeader, Footer } from '../components/shared';
import { RequestResetPassword, ResetPassword } from '../components';

const ResetPasswordPage = () => {
  const router = useRouter();
  const { resetToken } = router.query;
  
  if (!resetToken) {
    return (
      <>
        <AlternateHeader />
        <PageMain>
          <RequestResetPassword />
        </PageMain>
        <Footer />
      </>
    );
  }
  return (
    <>
      <AlternateHeader />
      <PageMain>
        <ResetPassword token={resetToken} />
      </PageMain>
      <Footer />
    </>
  );
}

export default ResetPasswordPage;
