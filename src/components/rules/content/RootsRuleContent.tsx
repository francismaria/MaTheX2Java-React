import RuleContentHeader from './header/RuleContentHeader';
import { RuleContentProps } from './RuleContent';

function RootsRuleContent({ ruleContentClickHandler }: RuleContentProps) {
  return (
    <section id="variablesContent" className="ruleContent">
      <RuleContentHeader title="7. Roots" ruleContentClickHandler={ruleContentClickHandler} />
      <div className="ruleDetailsContent">
        <p>
          Note that the root element inside the brackets is strong optional. If none is specified,
          then MaTheX2Java automatically assumes that it is a square root (root = 2). The only
          members accepted as a root element are strong integers or strong variables, any other
          element is not accepted. If a variable is not of the strong integer type, then an
          automatic cast to an "int" is added, allowing the user to operate with the variable in the
          desired type and to automatically have a correct type as a root member.
        </p>
      </div>
    </section>
  );
}

export default RootsRuleContent;
