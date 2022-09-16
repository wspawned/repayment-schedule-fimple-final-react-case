import { createContext } from "react";
import { useState } from "react";

export const ResultContext = createContext();

export const ResultProvider = (props) => {
  const [tableInfo, setTableInfo] = useState([]);

  return (
    <ResultContext.Provider value={{
      tableInfo,
      setTableInfo
    }}>
      {props.children}
    </ResultContext.Provider >
  )
};