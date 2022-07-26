import RuleContentHeader from './header/RuleContentHeader';
import { RuleContentProps } from './RuleContent';

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
          MaTheX2Java's also accepts them. A high number of different trigonometric functions are
          currently supported by MaTheX2Java, which you can find
          <a href="#">however</a>.
          <br />
          Below you can see an example of how some of the accepted trigonometric functions are used.
        </p>
      </div>
    </section>
  );
}

export default TrigonometryRuleContent;
