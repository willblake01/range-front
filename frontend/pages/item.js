import SingleItem from '../components/SingleItem';
import AlternateHeader from '../components/AlternateHeader';

const Item = props => (
  <div>
    <AlternateHeader />
    <SingleItem id={props.query.id} />
  </div>
);

export default Item;
