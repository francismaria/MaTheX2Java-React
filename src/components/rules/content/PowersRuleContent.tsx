import RuleContentHeader from './header/RuleContentHeader';
import RuleContentUsage from './usage/RuleContentUsage';
import { RuleContentProps } from './RuleContent';
import { POWER_COMPLEX_VARIABLE_LATEX, POWER_SIMPLE_VARIABLE_LATEX } from './usage/Examples';

function PowersRuleContent({ ruleContentClickHandler }: RuleContentProps) {
  return (
    <section id="variablesContent" className="ruleContent">
      <RuleContentHeader title="3. Powers" ruleContentClickHandler={ruleContentClickHandler} />
      <div className="ruleDetailsContent">
        <p>
          The use of powers is recurrent within mathematic formulas, thus MaTheX2Java supports the
          most complex powers. Below you can find some examples.
        </p>
        <h4>Examples</h4>
        <ul>
          <li>
            <u>Simple power</u>:
            <RuleContentUsage code={POWER_SIMPLE_VARIABLE_LATEX} />
          </li>
          <li>
            <u>Complex power</u>:
            <RuleContentUsage code={POWER_COMPLEX_VARIABLE_LATEX} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default PowersRuleContent;
