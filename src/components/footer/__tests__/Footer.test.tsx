import { render, fireEvent, RenderResult } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import Menu from '../../menu/Menu';

describe('Navigation links are rendered correctly', () => {
  let renderedElements: RenderResult;
  let historyMock;

  beforeEach(() => {
    historyMock = createMemoryHistory();
    historyMock.push = jest.fn();

    renderedElements = render(
      <Router location={historyMock.location} navigator={historyMock}>
        <Menu />
      </Router>
    );
  });

  it('About link redirects to /about', () => {
    fireEvent.click(renderedElements.getByText('About'));

    expect(historyMock.push).toHaveBeenCalledWith(
      expect.objectContaining(createPartialRouteRequestObject('/about')),
      undefined,
      expect.any(Object)
    );
  });

  it('Rules link redirects to /rules', () => {
    fireEvent.click(renderedElements.getByText('Rules'));

    expect(historyMock.push).toHaveBeenCalledWith(
      expect.objectContaining(createPartialRouteRequestObject('/rules')),
      undefined,
      expect.any(Object)
    );
  });

  it('Contact link redirects to /contact', () => {
    fireEvent.click(renderedElements.getByText('Contact'));

    expect(historyMock.push).toHaveBeenCalledWith(
      expect.objectContaining(createPartialRouteRequestObject('/contact')),
      undefined,
      expect.any(Object)
    );
  });

  const createPartialRouteRequestObject = (route: string) => ({
    pathname: route
  });
});
