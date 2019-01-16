
import AlternateHeader from '../components/AlternateHeader';
import ComponentPadding from '../components/styles/ComponentPadding';
import UpdateItem from '../components/UpdateItem';

const UpdateItemPage = props => (
  <div>
    <AlternateHeader />
    <ComponentPadding>
      <UpdateItem id={props.query.id} />
    </ComponentPadding>
  </div>
);

export default UpdateItemPage;
