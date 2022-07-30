import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

test('renders contact title header', () => {
  render(<Contact />);

  const headerElement = screen.getAllByText(/Contact/i);

  expect(headerElement.length).toBeGreaterThanOrEqual(1);
});
