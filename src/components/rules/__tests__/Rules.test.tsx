import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Rules from '../Rules';

test('renders homepage link', () => {
  render(
    <MemoryRouter>
      <Rules />
    </MemoryRouter>
  );
  const todoElement = screen.getByText(/Todo/i);
  expect(todoElement).toBeInTheDocument();
});
