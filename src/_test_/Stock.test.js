import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigStore';
import Stock from '../components/stock/Stock';

const CompanyProvider = () => (
  <Provider store={store}>
    <Stock />
  </Provider>
);

describe('renders the company stock data', () => {
  it('renders properly', () => {
    const component = renderer.create(<CompanyProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
