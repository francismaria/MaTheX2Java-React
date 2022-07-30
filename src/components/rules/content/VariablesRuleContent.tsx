import RuleContentHeader from './header/RuleContentHeader';
import RuleContentUsage from './usage/RuleContentUsage';
import { RuleContentProps } from './RuleContent';

const VARIABLES_SCALAR_TYPE_LATEX: string = `${`
\\begin{equation}
  result = c          // c is a scalar variable
\\end{equation}`}`;

const VARIABLES_ONE_DIMENSION_ARRAY_TYPE_LATEX: string = `${`
\\begin{equation}
  % [c] : int[10]
  result = c_{2}      // c is a one-dimension array variable
\\end{equation}`}`;

const VARIABLES_MULTI_DIMENSIONAL_ARRAY_TYPE_LATEX: string = `${`
\\begin{equation}
  % [c] : int[10][10]
  result = c_{0, 5}   // c is a two-dimension array variable
\\end{equation}`}`;

function VariablesRuleContent({ ruleContentClickHandler }: RuleContentProps) {
  return (
    <section id="variablesContent" className="ruleContent">
      <RuleContentHeader title="2. Variables" ruleContentClickHandler={ruleContentClickHandler} />
      <div className="ruleDetailsContent">
        <p>
          Variables are defined as a sequence of letters (case-sensitive), numbers and underscores,
          which always start by a letter. The variables need not to be defined in the annotations.
          If one is not defined, then it is treated as a scalar variable, by default.
        </p>
        <p>
          Every variable in the right side of the equation is an argument to the method and is
          declared in the main function of the generated Java code class. Using this design, the
          user may use the same variable for different equations, hence the variable is only defined
          once, in the main method. Whenever the user wants to change the value of this variable, it
          only needs to change it once, rather than changing each corresponding local variable of
          each method it appears.
        </p>
        <p>
          The left-side variable, represents the result of the mathematic operation, it will hold
          its value. It is a local variable for the method. Thus, it is not possible to use this
          variable in the right-side of the equation.
        </p>
        <p>
          <strong>Note:</strong>
          <i>indexing</i> Any variable can be indexed if it has been declared as an array. If not,
          an error will occur due to its
          <i>single-dimensional</i> nature.
        </p>
        <p>
          Also, if the number of indexes do not match the dimensions of the variable then it will
          raise an error.
        </p>
        <p>To index a variable, it has to be written according to the below specification:</p>
        <i>
          name_of_the_variable <strong>_ index0, index1</strong>
        </i>
        <h4>Examples</h4>
        <ul>
          <li>
            <u>Scalar variable</u>:
            <RuleContentUsage code={VARIABLES_SCALAR_TYPE_LATEX} />
          </li>
          <li>
            <u>One-dimension array variable</u>:
            <RuleContentUsage code={VARIABLES_ONE_DIMENSION_ARRAY_TYPE_LATEX} />
          </li>
          <li>
            <u>Multi-dimension array variable</u>:
            <RuleContentUsage code={VARIABLES_MULTI_DIMENSIONAL_ARRAY_TYPE_LATEX} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default VariablesRuleContent;
