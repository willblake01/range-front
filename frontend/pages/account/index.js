import { useUser } from '../../hooks';
import { PageMain } from '@/components/styles';
import { AlternateHeader, DisplayError, Footer, PleaseLogin } from '@/components/shared';
import { Account } from '@/components';

const AccountPage = () => {
  const { user, loading, error } = useUser();
  
  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  return (
  <>
    <AlternateHeader />
    <PageMain>
      <PleaseLogin>
        <Account user={user} />
      </PleaseLogin>
    </PageMain>
    <Footer />
  </>
)};

export default AccountPage;
