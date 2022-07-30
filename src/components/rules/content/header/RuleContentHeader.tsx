import { MouseEventHandler } from 'react';

interface RuleContentHeaderProps {
  title: string;
  ruleContentClickHandler: MouseEventHandler<HTMLElement>;
}

function RuleContentHeader({ title, ruleContentClickHandler }: RuleContentHeaderProps) {
  return (
    <div
      className="contentHeader"
      role="switch"
      tabIndex={0}
      aria-checked="false"
      onClick={ruleContentClickHandler}
    >
      <h3>{title}</h3>
      <div className="iconContainer">
        <i className="fas fa-plus" />
        <i className="fas fa-minus" />
      </div>
    </div>
  );
}

export default RuleContentHeader;
