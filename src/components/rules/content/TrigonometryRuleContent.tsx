import RuleContentHeader from './header/RuleContentHeader';
import RuleContentUsage from './usage/RuleContentUsage';
import { RuleContentProps } from './RuleContent';

const TRIGONOMETRY_VARIABLES_LATEX: string = `${`% name: trigonometryExample
\\begin{equation}
  result = \\sin{2 + b} - 4 * \\arctan{0.2} - 8 \\times \\cos{2 - b + \\arcsin{0.1}}
\\end{equation}`}`;

function TrigonometryRuleContent({ ruleContentClickHandler }: RuleContentProps) {
  return (
    <section id="variablesContent" className="ruleContent">
      <RuleContentHeader
        title="5. Trigonometry"
        ruleContentClickHandler={ruleContentClickHandler}
      />
      <div className="ruleDetailsContent">
        <p>
          Trigonometric functions are crucial elements within the mathematic formulas, thus
          MaTheX2Java&quot;s also accepts them. A high number of different trigonometric functions
          are currently supported by MaTheX2Java, which you can find
          <a href="/#">however</a>.
          <br />
          Below you can see an example of how some of the accepted trigonometric functions are used.
        </p>
        <h4>Examples</h4>
        <ul>
          <li>
            <u>Trigonometry functions</u>:
            <RuleContentUsage code={TRIGONOMETRY_VARIABLES_LATEX} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TrigonometryRuleContent;
