import RuleContentHeader from './header/RuleContentHeader';
import RuleContentUsage from './usage/RuleContentUsage';
import { RuleContentProps } from './RuleContent';

const ROOT_SIMPLE_VARIABLE_LATEX: string = `${`% name: rootExample
% return : int
\\begin{equation}
  result = 3 + \\sqrt{16}
\\end{equation}`}`;

const ROOT_COMPLEX_VARIABLE_LATEX: string = `${`% name: rootExample
% return : int
\\begin{equation}
  result = 3 + \\sqrt[4]{16}
\\end{equation}`}`;

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
          automatic cast to an &quot;int&quot; is added, allowing the user to operate with the
          variable in the desired type and to automatically have a correct type as a root member.
        </p>
        <h4>Examples</h4>
        <ul>
          <li>
            <u>Square root</u>:
            <RuleContentUsage code={ROOT_SIMPLE_VARIABLE_LATEX} />
          </li>
          <li>
            <u>4th-root</u>:
            <RuleContentUsage code={ROOT_COMPLEX_VARIABLE_LATEX} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RootsRuleContent;
