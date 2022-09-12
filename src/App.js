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

const App = () => {

  return (
    <ContextProvider>
      <ResultContext.Consumer>
        {(context) => <FormInput setTableInfo={context.setTableInfo} />}
      </ResultContext.Consumer>
      <ResultContext.Consumer>
        {(context) => <Table tableInfo={context.tableInfo} />}
      </ResultContext.Consumer>
    </ContextProvider>
  );
};

export default App;