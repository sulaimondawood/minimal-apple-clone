"use client";
import { useAppDispatch } from "@/redux/hooks/hook";
import React, { ReactNode, createContext, useContext, useState } from "react";

export const StateContext = createContext<any>(null);

function Context({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  return (
    <StateContext.Provider value={dispatch}>{children}</StateContext.Provider>
  );
}

export default Context;

export const useStateContext = () => useContext(StateContext);
