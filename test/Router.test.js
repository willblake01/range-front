import Router from './client/src/components/Router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router />, div);
});

