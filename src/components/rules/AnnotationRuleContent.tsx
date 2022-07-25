import { RuleContentProps } from './RuleContent';

function AnnotationRuleContent({ ruleContentClickHandler }: RuleContentProps) {
  return (
    <section id="annotationsContent" className="ruleContent">
      <div
        className="contentHeader"
        role="switch"
        tabIndex={0}
        aria-checked="false"
        onClick={ruleContentClickHandler}
      >
        <h3>1. Annotations</h3>
        <div className="iconContainer">
          <i className="fas fa-plus" />
          <i className="fas fa-minus" />
        </div>
      </div>
      <div className="ruleDetailsContent">
        <p>
          The use of annotations is an important feature of MaTheX2Java. These are optional commands
          in the form of LaTeX comments which specify important details of the Java code generation.
          <br />
          It allows a user to specify a name for a method, a method return type and to specify the
          types of the variables which are involved in a method, as well as memory allocation for
          array-type variables.
          <br />
          Summing it up, we can group the annotations in two distinct groups of operation:
        </p>
        <h4>1.1. Method-Specific Annotations</h4>
        <p>
          Correspond to specific details about the method that will be created to represent the
          mathematic formula, more precisely, the name and the return type of the java method that
          will represent the implementation of the formula. This type of annotation must be declared
          before the
          <strong>&lsquo;begin&rsquo;</strong> tag of the amsmath equation definition.
        </p>
        <ul>
          <li>
            <u>Name</u>: if present, assigns the specified name to the generated Java method.
            Otherwise, it assigns a custom (template) name.
          </li>
          <li>
            <u>Return Type</u>: if present, sets the return type of the generated method to the
            specified input type. Otherwise, it sets the return type of the generated method to the
            default type - &lsquo;real&rsquo; (which maps to a Java double).
          </li>
        </ul>
        <h4>1.2. Variable-Specific Annotations</h4>
        <p>
          Correspond to specific details about how the variables in the method will be declared in
          the generated Java code. A user may define the type of the variable and, if the variable
          is an array, it also defines the memory allocation of the array. These types of
          annotations are written before the equation line, in the following format: p % [ variable
          (, variable)*]: data type.
        </p>
        <p>
          Each variable inside the same brackets will have the same specified data type. This
          annotation allows multiline comments to specify different variable types in a
          user-friendly way. This way, one can write these types of annotations in the following
          way:
        </p>
        <ul>
          <li>
            <u>Single-Type</u>: if present, assigns the specified name to the generated Java method.
            Otherwise, it assigns a custom (template) name.
          </li>
          <li>
            <u>Single-Type</u>: if present, assigns the specified name to the generated Java method.
            Otherwise, it assigns a custom (template) name.
          </li>
          <li>
            <u>Multi-Type</u>: if present, assigns the specified name to the generated Java method.
            Otherwise, it assigns a custom (template) name.
          </li>
          <li>
            <u>Array-Type</u>: if present, assigns the specified name to the generated Java method.
            Otherwise, it assigns a custom (template) name.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AnnotationRuleContent;
