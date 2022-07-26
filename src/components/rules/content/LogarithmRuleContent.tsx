import { RuleContentProps } from './RuleContent';

function LogarithmRuleContent({ ruleContentClickHandler }: RuleContentProps) {
  return (
    <section id="variablesContent" className="ruleContent">
      <div
        className="contentHeader"
        role="switch"
        tabIndex={0}
        aria-checked="false"
        onClick={ruleContentClickHandler}
      >
        <h3>4. Logarithms</h3>
        <div className="iconContainer">
          <i className="fas fa-plus" />
          <i className="fas fa-minus" />
        </div>
      </div>
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
