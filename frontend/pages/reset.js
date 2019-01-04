import styled from 'styled-components';
import AlternateHeader from '../components/AlternateHeader';
import Reset from '../components/Reset';

const ResetStyle = styled.div`
  margin-bottom: 10px;
`;

const resetPage = props => (
  <>
    <AlternateHeader />
    <ResetStyle>
      <p>Reset your password {props.query.resetToken}</p>
      <Reset resetToken={props.query.resetToken} />
    </ResetStyle>
  </>
);

export default resetPage;
