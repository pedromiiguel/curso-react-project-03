import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  debug();
  const headingContainer = screen.getByRole('heading', { name: 'Hello World!' }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: 'pink',
  });

  expect(headingContainer).toMatchSnapshot();

  expect(headingContainer).toHaveStyleRule('background', 'pink');
});
