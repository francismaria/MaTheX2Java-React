import { render, fireEvent, RenderResult } from '@testing-library/react';
import { Size } from '../../../hooks/useWindowSize';
import Translator from '../Translator';

describe('Screen-width dependent styling', () => {
  const DESKTOP_SIZE_DIMENSIONS: Size = {
    width: 1500,
    height: 1500
  };

  const SMARTPHONE_SIZE_DIMENSIONS: Size = {
    width: 500,
    height: 500
  };

  let renderedElements: RenderResult;

  jest.mock('../../../hooks/useWindowSize', () => jest.fn(() => DESKTOP_SIZE_DIMENSIONS));

  beforeEach(() => {
    renderedElements = render(<Translator />);
  });

  describe('Desktop-size screen width', () => {
    it('Submits translation, destination container has translation output content', () => {
      fireEvent.click(renderedElements.getByText('Translate'));
    });
  });
});
