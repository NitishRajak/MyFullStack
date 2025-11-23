import React, { createContext, useContext } from "react";

const ContextProvider = createContext({});
const RootProvider = ({ children }: React.ReactNode) => {
  // const
  return (
    <ContextProvider.Provider value={{}}>{children}</ContextProvider.Provider>
  );
};

export const useRoot = () => useContext(ContextProvider);
export default RootProvider;
