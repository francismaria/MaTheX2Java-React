import { render, screen } from '@testing-library/react';
import About from '../About';

test('renders learn react link', () => {
  render(<About />);

  const headerElement = screen.getByText(/About/i);

  expect(headerElement).toBeInTheDocument();
});
