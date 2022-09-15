import { useState } from "react";
import { createContext } from "react";
import FormInput from "./FormInput";
import Table from "./Table";

const ResultContext = createContext();

const ContextProvider = (props) => {
  const [tableInfo, setTableInfo] = useState([]);

  return (
    <ResultContext.Provider value={{
      tableInfo,
      setTableInfo
    }}>
      {props.children}
    </ResultContext.Provider >
  )
}

const toggleColor = (color) => {
  return color==="#f1ab48" ? '#005991': '#f1ab48'; 
}

const App = (props) => {
  const background = props.background;
  const setBackground = props.setBackground;

  return (
    <div className="app"
        style={{backgroundColor: background}}
    >
      <button
      className="background-button"
      onClick={() => setBackground(toggleColor(background))}>{background==="#f1ab48" ? "🌙" : "☀️"}</button>
      <ContextProvider>
      <ResultContext.Consumer>
        {(context) => <FormInput setTableInfo={context.setTableInfo} />}
      </ResultContext.Consumer>
      <ResultContext.Consumer>
        {(context) => <Table tableInfo={context.tableInfo} />}
      </ResultContext.Consumer>
    </ContextProvider>
  </div>  
    
  );
};

export default App;