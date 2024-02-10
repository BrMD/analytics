import React from "react";
import PaddingAndMargin from "./PaddingMargin";
import { chidrenProps } from "@/types/global";

const Main = ({ children }: chidrenProps) => {
  return <PaddingAndMargin margin="m-6">{children}</PaddingAndMargin>;
};

export default Main;
