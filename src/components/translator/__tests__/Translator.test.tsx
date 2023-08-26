import { render, fireEvent, RenderResult } from '@testing-library/react';
import { Size } from '../../../hooks/useWindowSize';
import { runTranslation } from 'mathex2java-translator';
import Translator from '../Translator';

jest.mock('mathex2java-translator', () => ({
  runTranslation: jest.fn()
}));

const DEFAULT_CONTENT =
  '% name: exampleEquation\n\\begin{equation}\n\tresult = (2 - \\sin{0.4})^{3 - c}\n\\end{equation}';

describe('Screen-width dependent styling', () => {
  const DESKTOP_SIZE_DIMENSIONS: Size = {
    width: 1500,
    height: 1500
  };

  let renderedElements: RenderResult;

  jest.mock('../../../hooks/useWindowSize', () => jest.fn(() => DESKTOP_SIZE_DIMENSIONS));

  beforeEach(() => {
    renderedElements = render(<Translator />);
  });

  describe('Desktop-size screen width', () => {
    it('Submits translation, destination container has translation output content', async () => {
      (runTranslation as jest.Mock).mockReturnValueOnce('Translated Code');

      await fireEvent.click(renderedElements.getByText('Translate'));

      expect(runTranslation).toBeCalledWith(DEFAULT_CONTENT);

      await fireEvent.click(renderedElements.getByText('Clear'));
    });

    it('Submits translation, errored response, destination container has error content', async () => {
      (runTranslation as jest.Mock).mockImplementationOnce(() => {
        throw new Error('Custom Error');
      });

      await fireEvent.click(renderedElements.getByText('Translate'));

      expect(runTranslation).toBeCalledWith(DEFAULT_CONTENT);

      await fireEvent.click(renderedElements.getByText('Clear'));
    });
  });
});
