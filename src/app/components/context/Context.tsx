"use client";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext({});
function Context({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  return (
    <DataContext.Provider value={{ index, setIndex }}>
      {children}
    </DataContext.Provider>
  );
}

export default Context;
