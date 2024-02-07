"use client";
import { childrenDefault } from "@/types/global";
import React, { createContext, useContext, useState, FC } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";

export type DefaultLayoutType = {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LayoutContext = createContext<DefaultLayoutType | null>(null);

export const LayoutProvider = (props: childrenDefault) => {
  const { children } = props;
  const [logged, setLogged] = useState(true);

  const contextValue: DefaultLayoutType = {
    logged,
    setLogged,
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};

export function useTray() {
  return useContext(LayoutContext);
}
