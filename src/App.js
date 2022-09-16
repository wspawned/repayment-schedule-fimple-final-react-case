import FormInput from "./FormInput";
import { ResultContext, ResultProvider } from "./ResultContext";
import Payments from "./Payments";

const App = (props) => {
  const background = props.background;
  const setBackground = props.setBackground;

  const toggleColor = (color) => {
    return color === "#f1ab48" ? "#005991" : "#f1ab48";
  };

  return (
    <div className="app" style={{ backgroundColor: background }}>
      <button
        className="background-button"
        onClick={() => setBackground(toggleColor(background))}
      >
        {background === "#f1ab48" ? "🌙" : "☀️"}
      </button>
      <ResultProvider>
        <ResultContext.Consumer>
          {(context) => <FormInput setTableInfo={context.setTableInfo} />}
        </ResultContext.Consumer>
        <ResultContext.Consumer>
          {(context) => <Payments tableInfo={context.tableInfo} />}
        </ResultContext.Consumer>
      </ResultProvider>
    </div>
  );
};

export default App;