import { RuleContentProps } from './RuleContent';

function SummationsRuleContent({ ruleContentClickHandler }: RuleContentProps) {
  return (
    <section id="variablesContent" className="ruleContent">
      <div
        className="contentHeader"
        role="switch"
        tabIndex={0}
        aria-checked="false"
        onClick={ruleContentClickHandler}
      >
        <h3>6. Summations</h3>
        <div className="iconContainer">
          <i className="fas fa-plus" />
          <i className="fas fa-minus" />
        </div>
      </div>
      <div className="ruleDetailsContent">
        <p>
          Summation is an important feature of MaTheX2Java. Its implementation requires a separate
          method which will be invoked from the method representing the equation it is in, where a
          for cycle will be executed with the correct specifications of the summation. The method
          representing the summation will have important specific elements to its correct operation:
          a strong lower bound and an strong upper bound.
        </p>
      </div>
    </section>
  );
}

export default SummationsRuleContent;
