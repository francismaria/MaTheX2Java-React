import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from '../Header';

test('renders homepage link', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const homeElement = screen.getByText(/MaTheX2Java/i);
  expect(homeElement).toBeInTheDocument();
});
