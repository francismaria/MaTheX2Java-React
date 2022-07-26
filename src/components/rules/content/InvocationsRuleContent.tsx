import { RuleContentProps } from './RuleContent';

function InvocationsRuleContent({ ruleContentClickHandler }: RuleContentProps) {
  return (
    <section id="variablesContent" className="ruleContent">
      <div
        className="contentHeader"
        role="switch"
        tabIndex={0}
        aria-checked="false"
        onClick={ruleContentClickHandler}
      >
        <h3>8. Methods Invocations</h3>
        <div className="iconContainer">
          <i className="fas fa-plus" />
          <i className="fas fa-minus" />
        </div>
      </div>
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
