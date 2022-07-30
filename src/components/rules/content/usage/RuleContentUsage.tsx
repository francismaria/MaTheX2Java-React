import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-latex';

interface RuleContentUsageProps {
  code: string;
}

function RuleContentUsage({ code }: RuleContentUsageProps) {
  return (
    <AceEditor
      mode="latex"
      theme="textmate"
      className="reactAceEditor"
      defaultValue={code}
      maxLines={Infinity}
      readOnly
      highlightActiveLine={false}
    />
  );
}

export default RuleContentUsage;
