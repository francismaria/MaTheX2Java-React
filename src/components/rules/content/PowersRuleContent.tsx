import RuleContentHeader from './header/RuleContentHeader';
import { RuleContentProps } from './RuleContent';

function PowersRuleContent({ ruleContentClickHandler }: RuleContentProps) {
  return (
    <section id="variablesContent" className="ruleContent">
      <RuleContentHeader title="3. Powers" ruleContentClickHandler={ruleContentClickHandler} />
      <div className="ruleDetailsContent">
        The use of powers is recurrent within mathematic formulas, thus MaTheX2Java supports the
        most complex powers. Below you can find some examples.
      </div>
    </section>
  );
}

export default PowersRuleContent;
