import { useRouter } from 'next/router';
import { AlternateHeader, Footer, RequestResetPassword, ResetPassword } from '../components';

const ResetPasswordPage = () => {
  const router = useRouter();
  const { resetToken } = router.query;
  
  if (!resetToken) {
    return (
      <>
        <AlternateHeader />
        <RequestResetPassword />
        <Footer />
      </>
    );
  }
  return (
    <>
      <AlternateHeader />
      <ResetPassword token={resetToken} />
      <Footer />
    </>
  );
}

export default ResetPasswordPage;
