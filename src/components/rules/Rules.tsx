import { MouseEventHandler } from 'react';
import VariablesRuleContent from './content/VariablesRuleContent';
import AnnotationRuleContent from './content/AnnotationRuleContent';
import PowersRuleContent from './content/PowersRuleContent';
import LogarithmRuleContent from './content/LogarithmRuleContent';
import TrigonometryRuleContent from './content/TrigonometryRuleContent';
import SummationsRuleContent from './content/SummationsRuleContent';
import RootsRuleContent from './content/RootsRuleContent';
import InvocationsRuleContent from './content/InvocationsRuleContent';
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
    <main id="rulesPanel" className="mainPanel">
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
          <a href="/docs/user_guide.pdf" target="_blank" rel="noreferrer">
            here
          </a>{' '}
          the pdf version of the user guide.
        </p>
        <p>
          Note: If you are not familiar with LaTeX&#39;s amsmath package, it is recommended that you
          take a look at it&#39;s user guide:{' '}
          <a
            href="http://texdoc.net/texmf-dist/doc/latex/amsmath/amsldoc.pdf"
            target="_blank"
            rel="noreferrer">
            here
          </a>
          .
        </p>
      </section>
      <AnnotationRuleContent ruleContentClickHandler={handleRuleContentHeaderEvent} />
      <VariablesRuleContent ruleContentClickHandler={handleRuleContentHeaderEvent} />
      <PowersRuleContent ruleContentClickHandler={handleRuleContentHeaderEvent} />
      <LogarithmRuleContent ruleContentClickHandler={handleRuleContentHeaderEvent} />
      <TrigonometryRuleContent ruleContentClickHandler={handleRuleContentHeaderEvent} />
      <SummationsRuleContent ruleContentClickHandler={handleRuleContentHeaderEvent} />
      <RootsRuleContent ruleContentClickHandler={handleRuleContentHeaderEvent} />
      <InvocationsRuleContent ruleContentClickHandler={handleRuleContentHeaderEvent} />
    </main>
  );
}

export default Rules;
