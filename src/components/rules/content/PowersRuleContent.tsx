import { RuleContentProps } from './RuleContent';

function PowersRuleContent({ ruleContentClickHandler }: RuleContentProps) {
  return (
    <section id="variablesContent" className="ruleContent">
      <div
        className="contentHeader"
        role="switch"
        tabIndex={0}
        aria-checked="false"
        onClick={ruleContentClickHandler}
      >
        <h3>3. Powers</h3>
        <div className="iconContainer">
          <i className="fas fa-plus" />
          <i className="fas fa-minus" />
        </div>
      </div>
      <div className="ruleDetailsContent">
        The use of powers is recurrent within mathematic formulas, thus MaTheX2Java supports the
        most complex powers. Below you can find some examples.
      </div>
    </section>
  );
}

export default PowersRuleContent;
