"use client";
import React, { useState } from "react";
import { usestateButtons } from "@/types/global";

import ButtonsHome from "./components/ButtonsHome";
import PaddingAndMargin from "@/components/common/PaddingMargin";
import InputHome from "./components/InputHome";

const HomePage = () => {
  const [selected, setSelected] = useState<usestateButtons>("emailFinder");
  return (
    <main className="w-full h-full flex main">
      <div className="homeGrid w-full">
        <div className="w-full flex justify-center">
          <div className="flex">
            <PaddingAndMargin margin="mt-2">
              <ButtonsHome
                onSetStateFunctionGeneric={setSelected}
                GenericValue={selected}
              />
              <InputHome ChoosedInput={selected} />
            </PaddingAndMargin>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
