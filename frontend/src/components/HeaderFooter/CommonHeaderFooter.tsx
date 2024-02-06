import React from "react";
import PaddingAndMargin from "../common/PaddingMargin";
import { commonHeaderAndFooterType } from "@/types/global";

const CommonHeaderFooter = (props: commonHeaderAndFooterType) => {
  const { as, children, className } = props;
  return React.createElement(
    as,
    { className: className },
    <PaddingAndMargin padding="pt-0 px-10" margin="">
      {children}
    </PaddingAndMargin>
  );
};

export default CommonHeaderFooter;
