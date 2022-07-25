import { render, fireEvent, RenderResult } from '@testing-library/react';
import Rules from '../Rules';

describe('Rules content page behavior', () => {
  const renderedElements: RenderResult = render(<Rules />);

  const firstContentHeader = renderedElements.getAllByRole('switch').pop();
  const firstContentDetails = firstContentHeader.nextSibling as HTMLElement;

  const mock = jest.fn();

  it('shows rules details content if clicked on header and no visible details and hides upon subsequent click', () => {
    const hiddenRuleContentDetails = new CSSStyleDeclaration();
    hiddenRuleContentDetails.setProperty('max-height', '0px');

    const visibleRuleContentDetails = new CSSStyleDeclaration();
    visibleRuleContentDetails.setProperty('max-height', '2000px');

    window.getComputedStyle = mock
      .mockReturnValueOnce(hiddenRuleContentDetails)
      .mockReturnValueOnce(visibleRuleContentDetails);

    fireEvent.click(firstContentHeader);

    expect(mock).toHaveBeenCalledTimes(1);
    expect(firstContentHeader).toHaveClass('highlightedRuleContentHeader');
    expect(firstContentDetails).toHaveClass('visibleRuleContentDetails');

    fireEvent.click(firstContentHeader);

    expect(mock).toHaveBeenCalledTimes(2);
    expect(firstContentHeader).toHaveClass('defaultRuleContentHeader');
    expect(firstContentDetails).toHaveClass('hiddenRuleContentDetails');
  });
});
