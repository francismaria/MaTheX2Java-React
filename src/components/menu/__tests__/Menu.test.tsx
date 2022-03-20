import { render, fireEvent, RenderResult } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import Menu from '../Menu';

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
      undefined
    );
  });

  it('Rules link redirects to /rules', () => {
    fireEvent.click(renderedElements.getByText('Rules'));

    expect(historyMock.push).toHaveBeenCalledWith(
      expect.objectContaining(createPartialRouteRequestObject('/rules')),
      undefined
    );
  });

  it('Contact link redirects to /contact', () => {
    fireEvent.click(renderedElements.getByText('Contact'));

    expect(historyMock.push).toHaveBeenCalledWith(
      expect.objectContaining(createPartialRouteRequestObject('/contact')),
      undefined
    );
  });

  const createPartialRouteRequestObject = (route: string) => ({
    pathname: route
  });
});

describe('Hamburguer menu action', () => {
  let historyMock;
  let renderedElements: RenderResult;

  beforeEach(() => {
    historyMock = createMemoryHistory();
    historyMock.push = jest.fn();

    renderedElements = render(
      <Router location={historyMock.location} navigator={historyMock}>
        <Menu />
      </Router>
    );
  });

  describe('Smartphone size action', () => {
    it('Shows menu links container when hidden', () => {
      const menuIcon = renderedElements.getByTestId('menuIcon');
      const menuLinksContainer = renderedElements.getByTestId('menuLinksContainer');

      expect(menuIcon).toHaveStyle('display: block');
      expect(menuLinksContainer).not.toHaveStyle('max-height: 140px');

      fireEvent.click(menuIcon);

      expect(menuLinksContainer).toHaveStyle('max-height: 140px');
    });

    it('Hides menu links container when shown', () => {
      const menuIcon = renderedElements.getByTestId('menuIcon');
      const menuLinksContainer = renderedElements.getByTestId('menuLinksContainer');

      fireEvent.click(menuIcon);

      expect(menuLinksContainer).toHaveStyle('max-height: 140px');

      fireEvent.click(menuIcon);

      expect(menuLinksContainer).toHaveStyle('max-height: 0');
    });

    it('Element is not found then returns', () => {
      const menuIcon = renderedElements.getByTestId('menuIcon');
      const menuLinksContainer = renderedElements.getByTestId('menuLinksContainer');

      document.getElementById = jest.fn().mockImplementation((id) => null);

      expect(menuLinksContainer).not.toHaveStyle('max-height: 140px');

      fireEvent.click(menuIcon);

      expect(menuLinksContainer).not.toHaveStyle('max-height: 140px');
    });
  });
});
