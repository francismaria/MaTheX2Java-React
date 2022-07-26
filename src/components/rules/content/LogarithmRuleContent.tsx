import RuleContentHeader from './header/RuleContentHeader';
import { RuleContentProps } from './RuleContent';

function LogarithmRuleContent({ ruleContentClickHandler }: RuleContentProps) {
  return (
    <section id="variablesContent" className="ruleContent">
      <RuleContentHeader title="4. Logarithms" ruleContentClickHandler={ruleContentClickHandler} />
      <div className="ruleDetailsContent">
        <p>
          Logarithms are supported in MaTheX2Java, however it has the following restriction: the
          index of the logarithm must only be an integer or a variable. The body of the algorithm
          supports all the available operations in the amsmath grammar and may even contain
          mathematic operations between the members (addition, subtraction, etc.).
        </p>
      </div>
    </section>
  );
}

export default LogarithmRuleContent;
