import RuleContentHeader from './header/RuleContentHeader';
import { RuleContentProps } from './RuleContent';

function InvocationsRuleContent({ ruleContentClickHandler }: RuleContentProps) {
  return (
    <section id="variablesContent" className="ruleContent">
      <RuleContentHeader
        title="8. Methods Invocations"
        ruleContentClickHandler={ruleContentClickHandler}
      />
      <div className="ruleDetailsContent">
        <p>
          In order to allow the generated equations methods to interact with one another,
          MaTheX2Java supports the invocation of different method within the same generated file.
          This allows to have a well-structured and scalable file, separating the different
          generated formulas to later reuse.
          <br />
          To invoke a method, one should define it before the method that is invoking it. Below is
          an usage example.
        </p>
      </div>
    </section>
  );
}

export default InvocationsRuleContent;
