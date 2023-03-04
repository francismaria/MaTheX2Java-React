import RuleContentHeader from './header/RuleContentHeader';
import RuleContentUsage from './usage/RuleContentUsage';
import { RuleContentProps } from './RuleContent';

const METHOD_INCOVATION_EXPRESSION_LATEX: string = `${`// This method, to be invoked, must be written before the method that is invoking it
% name : func
\\begin{equation}
  % [c] : short
  % [d] : int 
  a = c + d 
\\end{equation}

\\begin{equation}
  % [l]: short 
  % [d] : int 
  a = func(l, d) + k     // Invocation of the "func" method
\\end{equation}`}`;

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
        <h4>Examples</h4>
        <ul>
          <li>
            <u>Method invocation</u>:
            <RuleContentUsage code={METHOD_INCOVATION_EXPRESSION_LATEX} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default InvocationsRuleContent;
