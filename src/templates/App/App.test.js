import Home from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});

// test('renders learn react link', () => {
//   renderTheme(<Home />);
//   debug();
//   const headingContainer = screen.getByRole('heading', { name: 'Hello World!' }).parentElement;

//   expect(headingContainer).toHaveStyle({
//     background: 'pink',
//   });

//   expect(headingContainer).toMatchSnapshot();

//   expect(headingContainer).toHaveStyleRule('background', 'pink');
// });
