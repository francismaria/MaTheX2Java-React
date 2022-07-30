import RuleContentHeader from './header/RuleContentHeader';
import RuleContentUsage from './usage/RuleContentUsage';
import { RuleContentProps } from './RuleContent';

export const SUMMATION_SIMPLE_EXPRESSION_LATEX: string = `${`% name: singleSummationExample
\\begin{equation}
  % [a] : int[10]
  result = \\sum_{i = 0}^{10}{a_{i}}
\\end{equation}`}`;

export const SUMMATION_COMPLEX_EXPRESSION_LATEX: string = `${`% name: multipleSummationExample
\\begin{equation}
  % [a] : int[10][5]
  result = \\sum_{i = 0}^{10}{ \\sum_{j = 0}^{5}{a_{i}{j}}}
\\end{equation}`}`;

function SummationsRuleContent({ ruleContentClickHandler }: RuleContentProps) {
  return (
    <section id="variablesContent" className="ruleContent">
      <RuleContentHeader title="6. Summations" ruleContentClickHandler={ruleContentClickHandler} />
      <div className="ruleDetailsContent">
        <p>
          Summation is an important feature of MaTheX2Java. Its implementation requires a separate
          method which will be invoked from the method representing the equation it is in, where a
          for cycle will be executed with the correct specifications of the summation. The method
          representing the summation will have important specific elements to its correct operation:
          a strong lower bound and an strong upper bound.
        </p>
        <ul>
          <li>
            <p>
              <strong>
                <u>Lower bound</u>
              </strong>
              : in MaTheX2Java&quot;s current release, the strong lower bound specification must
              follow the below syntax.
            </p>
            <p>
              <i>lower_bound = value</i>
            </p>
            <p>
              The lower bound value can only be an <strong>integer</strong> or a{' '}
              <strong>variable</strong>.
            </p>
          </li>
          <li>
            <p>
              <strong>
                <u>Upper bound</u>
              </strong>
              : The summation <strong>upper bound</strong> must be an <strong>integer</strong>,{' '}
              <strong>variable</strong> or <strong>infinity</strong>, no operations are allowed in
              this release. However, complex operations on the summation upper bound will be
              available in a future release.
            </p>
          </li>
          <li>
            <p>
              <strong>
                <u>Summation body</u>
              </strong>
              : There are no restrictions for the summation body elements. It may have any of the
              elements that the equation body can have. Every operation is available inside the
              summation body, in fact, there can even be summations inside summations.
            </p>
          </li>
          <li>
            <p>
              <strong>
                <u>Summations inside Summations</u>
              </strong>
              : This is an important feature of MaTheX2Java, the ability of having summations inside
              summations. The implementation of this feature relies on having a sequence of having
              separate summation functions invoking other (summation) functions, inside their
              summations body.
              <br />
              In &quot;chain&quot; summations, each summation lower bound variable is passed to the
              child summation as an argument, in order to be accessed in the child summation body.
              This way, it can be assured that the index variables (lower bounds) of the parent
              summations can be accessed by the child summations.
              <br />
              With this design the user will have the autonomy to edit the values of each summation
              in a comfortable, user-friendly way.
            </p>
            <p>
              <strong>Note</strong>: each summation is a separate method.
            </p>
          </li>
        </ul>
        <h4>Examples</h4>
        <ul>
          <li>
            <u>Single summation</u>:
            <RuleContentUsage code={SUMMATION_SIMPLE_EXPRESSION_LATEX} />
          </li>
          <li>
            <u>Complex summation</u>:
            <RuleContentUsage code={SUMMATION_COMPLEX_EXPRESSION_LATEX} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SummationsRuleContent;
