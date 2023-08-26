import AceEditor from 'react-ace';
import './Translator.css';
import 'ace-builds/src-noconflict/mode-latex';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-textmate';
import { runTranslation } from 'mathex2java-translator';
import { useState } from 'react';
import { useWindowSize, Size } from '../../hooks/useWindowSize';

enum CODE_PANEL {
  SOURCE,
  DESTINATION
}

const MIN_DESKTOP_WIDTH = 1199;
const DEFAULT_VISIBLE_CODE_CONTAINER_CLASSNAME = 'codeContainer';
const HIDDEN_CONTAINER_CLASSNAME = 'hiddenContainer';
const EMPTY_CONTENT = '';
const DEFAULT_CONTENT =
  '% name: exampleEquation\n\\begin{equation}\n\tresult = (2 - \\sin{0.4})^{3 - c}\n\\end{equation}';

function Translator() {
  const size: Size = useWindowSize();
  const [isTranslationSubmitted, setIsTranslationSubmitted] = useState(false);
  const [sourceCodeContainerContent, setSourceCodeContainerContent] = useState(DEFAULT_CONTENT);
  const [destinationCodeContainerContent, setDestinationCodeContainerContent] =
    useState(EMPTY_CONTENT);
  const [translationStatus, setTranslationStatus] = useState({
    loading: false,
    error: {
      active: false,
      msg: EMPTY_CONTENT
    }
  });

  const isSmartphoneScreen = () => {
    return size.width === undefined ? false : size.width < MIN_DESKTOP_WIDTH;
  };

  const handleSubmit = () => {
    setIsTranslationSubmitted(true);
    setTranslationStatus((prevState) => ({
      ...prevState,
      loading: true
    }));

    try {
      const translatedCode = runTranslation(sourceCodeContainerContent);
      setDestinationCodeContainerContent(translatedCode);
      setTranslationStatus({
        loading: false,
        error: {
          active: false,
          msg: EMPTY_CONTENT
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        setTranslationStatus({
          loading: false,
          error: {
            active: true,
            msg: error.message
          }
        });
      } else {
        throw error;
      }
    }
  };

  const handleRestart = () => {
    setTranslationStatus({
      loading: false,
      error: {
        active: false,
        msg: EMPTY_CONTENT
      }
    });
    setDestinationCodeContainerContent(EMPTY_CONTENT);
    setIsTranslationSubmitted(false);
  };

  /**
   * The container visibility will depend on the size of the screen
   * (if it is a smartphone or not) as the two panels will only be
   * rendered side-by-side if it is a desktop screen, otherwise, only
   * one at a time shall be rendered. Hence, the check of the screen
   * dimensions and if the translation was submitted or not:
   *
   *  1. Translation submitted: Shows the destination panel with the
   *  generated code.
   *
   *  2. No translation submitted: shows the source panel with the
   *  input code).
   */
  const buildClassNameForContainerVisibility = (codePanel: CODE_PANEL) => {
    if (isSmartphoneScreen()) {
      if (codePanel === CODE_PANEL.SOURCE) {
        return isTranslationSubmitted
          ? HIDDEN_CONTAINER_CLASSNAME
          : DEFAULT_VISIBLE_CODE_CONTAINER_CLASSNAME;
      }
      return isTranslationSubmitted
        ? DEFAULT_VISIBLE_CODE_CONTAINER_CLASSNAME
        : HIDDEN_CONTAINER_CLASSNAME;
    }
    return DEFAULT_VISIBLE_CODE_CONTAINER_CLASSNAME;
  };

  const renderActionButton = () => {
    const text = isTranslationSubmitted ? 'Clear' : 'Translate';
    const action = isTranslationSubmitted ? handleRestart : handleSubmit;

    return (
      <button type="submit" onClick={action}>
        {text}
      </button>
    );
  };

  const renderLoadingContainer = () => {
    return (
      translationStatus.loading && (
        <div id="translationLoadingContainer" className="translationStatusContainer">
          <div id="loadingAnimationWrapper">
            <div id="loadingSpinner" />
            <h3>LOADING</h3>
            <p>Code is being generated. Please wait...</p>
          </div>
        </div>
      )
    );
  };

  const renderErrorContainer = () => {
    return (
      translationStatus.error.active && (
        <div id="translationErrorContainer" className="translationStatusContainer">
          <i className="fas fa-exclamation-triangle" />
          <h3>ERROR</h3>
          <p>{translationStatus.error.msg}</p>
        </div>
      )
    );
  };

  return (
    <main id="translatorPanel" className="mainPanel">
      <section id="codePanel">
        <div
          id="sourceCodeContainer"
          className={buildClassNameForContainerVisibility(CODE_PANEL.SOURCE)}>
          <h3>LaTeX Code</h3>
          <AceEditor
            mode="latex"
            theme="textmate"
            name="sourceCodeEditor"
            className="reactAceEditor"
            highlightActiveLine
            value={sourceCodeContainerContent}
            onChange={(value) => setSourceCodeContainerContent(value)}
          />
        </div>
        <div
          id="destinationCodeContainer"
          className={buildClassNameForContainerVisibility(CODE_PANEL.DESTINATION)}>
          <h3>Java Code</h3>
          <AceEditor
            mode="java"
            theme="textmate"
            name="destinationCodeEditor"
            className="reactAceEditor"
            readOnly
            highlightActiveLine={false}
            value={destinationCodeContainerContent}
          />
          {renderLoadingContainer()}
          {renderErrorContainer()}
        </div>
      </section>
      <div id="actionButtonContainer">{renderActionButton()}</div>
    </main>
  );
}

export default Translator;
