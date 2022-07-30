import RuleContentHeader from './header/RuleContentHeader';
import { RuleContentProps } from './RuleContent';
import RuleContentUsage from './usage/RuleContentUsage';

const LOGARITHM_SIMPLE_VARIABLE_LATEX: string = `${`% name: simpleLogExample 
\\begin{equation}
  result = \\log{0.5}
\\end{equation}`}`;

const LOGARITHM_COMPLEX_VARIABLE_LATEX: string = `${`% name: complexLogExample 
\\begin{equation}
  result = \\ln{0.4 + x - \\sin{0.1}}
\\end{equation}`}`;

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
        <h4>Examples</h4>
        <ul>
          <li>
            <u>Simple power</u>:
            <RuleContentUsage code={LOGARITHM_SIMPLE_VARIABLE_LATEX} />
          </li>
          <li>
            <u>Complex power</u>:
            <RuleContentUsage code={LOGARITHM_COMPLEX_VARIABLE_LATEX} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LogarithmRuleContent;
