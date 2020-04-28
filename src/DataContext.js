import React, { useState } from "react";

const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({ contents: [], loading: true });
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
