import FormInput from "./FormInput";
import { ResultContext, ResultProvider } from "./ResultContext";
import Payments from "./Payments";
import { LIGHT_THEME, DARK_THEME } from "./ThemeContext";

const App = (props) => {
  const background = props.theme.background;
  const header = props.theme.header;
  const setTheme = props.setTheme;

  const toggleColor = (color) => {
    return color === LIGHT_THEME.background
      ? DARK_THEME
      : LIGHT_THEME;
  };

  return (
    <div className="app" style={{ backgroundColor: background }}>
      <button
        className="background-button"
        onClick={() => setTheme(toggleColor(background))}
      >
        {background === LIGHT_THEME.background ? "🌙" : "☀️"}
      </button>
      <h1 style={{ color: header }}>
        Kredi Ödeme Planı <br />
        Hesaplama
      </h1>
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