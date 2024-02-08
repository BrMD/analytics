import React from "react";
import { commonHeaderAndFooterType } from "@/types/global";
import clsx from "clsx";

const ComponentWMax = (props: commonHeaderAndFooterType) => {
  const { as, component, className } = props;
  return React.createElement(
    as,
    { className: clsx(className, "w-max-full") },
    component
  );
};

export default ComponentWMax;
