import { MouseEventHandler } from 'react';
import AnnotationRuleContent from './AnnotationRuleContent';
import './Rules.css';

const VISIBLE_CONTENT_DETAILS_HEIGHT = '2000px';

function Rules() {
  /* eslint-disable no-param-reassign */
  const showRuleDetailsContent = (
    ruleHeaderContent: HTMLElement,
    ruleDetailsContent: HTMLElement,
    plusIcon: HTMLElement,
    minusIcon: HTMLElement
  ): void => {
    ruleHeaderContent.classList.add('highlightedRuleContentHeader');
    ruleDetailsContent.classList.add('visibleRuleContentDetails');

    ruleHeaderContent.classList.remove('defaultRuleContentHeader');
    ruleDetailsContent.classList.remove('hiddenRuleContentDetails');

    plusIcon.style.opacity = '0';
    minusIcon.style.opacity = '1';
  };

  const hideRuleDetailsContent = (
    ruleHeaderContent: HTMLElement,
    ruleDetailsContent: HTMLElement,
    plusIcon: HTMLElement,
    minusIcon: HTMLElement
  ): void => {
    ruleHeaderContent.classList.add('defaultRuleContentHeader');
    ruleDetailsContent.classList.add('hiddenRuleContentDetails');

    ruleHeaderContent.classList.remove('highlightedRuleContentHeader');
    ruleDetailsContent.classList.remove('visibleRuleContentDetails');

    plusIcon.style.opacity = '1';
    minusIcon.style.opacity = '0';
  };

  const isRuleDetailsContentVisible = (ruleDetailsContent: HTMLElement): boolean => {
    const maxHeightProperty = window
      .getComputedStyle(ruleDetailsContent)
      .getPropertyValue('max-height');

    return maxHeightProperty === VISIBLE_CONTENT_DETAILS_HEIGHT;
  };

  const handleRuleContentHeaderEvent: MouseEventHandler<HTMLElement> = (e): void => {
    e.preventDefault();

    const targetElement = e.target as HTMLElement;
    const ruleDetailsContentElement = targetElement.nextSibling as HTMLElement;

    const plusIcon = targetElement.querySelector('.fa-plus') as HTMLElement;
    const minusIcon = targetElement.querySelector('.fa-minus') as HTMLElement;

    if (isRuleDetailsContentVisible(ruleDetailsContentElement)) {
      hideRuleDetailsContent(targetElement, ruleDetailsContentElement, plusIcon, minusIcon);
    } else {
      showRuleDetailsContent(targetElement, ruleDetailsContentElement, plusIcon, minusIcon);
    }
  };

  return (
    <section id="mainContainer">
      <section id="presentationContent">
        <h2>Rules</h2>
        <p>
          This section describes how to declare some of the most important and used mathematic
          formulas in latex in order to successfully generate the corresponding Java code.
        </p>
        <p>
          Currently, MaTheX2Java supports a different number of operations, from summations to
          exponentials and roots to fractions. However, a set of these operations only work if
          correctly specified.
          <br />
          Below you&#39;ll find the correct rules to specify properly the desired operations.
        </p>
        <p>
          You can find{' '}
          <a
            href="https://github.com/francismaria/MaTheX2Java/blob/master/docs/MaTheX2Java_UsersGuide.pdf"
            target="_blank"
            rel="noreferrer">
            here
          </a>{' '}
          the pdf version of the user guide.
        </p>
      </section>
      <AnnotationRuleContent ruleContentClickHandler={handleRuleContentHeaderEvent} />
    </section>
  );
}

export default Rules;
