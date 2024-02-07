import React from "react";
import PaddingAndMargin from "./PaddingMargin";
import { chidrenProps } from "@/types/global";

const Main = ({ children }: chidrenProps) => {
  return (
    <PaddingAndMargin padding="" margin="m-6">
      <div className="">{children}</div>
    </PaddingAndMargin>
  );
};

export default Main;
