import React from "react";
import Button from "@/components/common/Button";
import { propsSetUsestateGeneric } from "@/types/global";
import clsx from "clsx";

const ButtonsHome = ({
  onSetStateFunctionGeneric,
  GenericValue,
}: propsSetUsestateGeneric) => {
  return (
    <div className="teste">
      <Button
        onClickFunction={() => onSetStateFunctionGeneric("domainSearch")}
        size="xxl"
        borderSize="none"
        backgorund="bg-warmYellow "
        classes={clsx(
          "border-black text-lg",
          GenericValue === "domainSearch" ? "" : "saturate-[.25]"
        )}
      >
        Domain Search
      </Button>
      <Button
        onClickFunction={() => onSetStateFunctionGeneric("emailFinder")}
        size="xxl"
        borderSize="none"
        backgorund="bg-blueButton"
        classes={clsx(
          "border-black text-lg",
          GenericValue === "emailFinder" ? "" : "saturate-[.25]"
        )}
      >
        Email Finder
      </Button>
      <Button
        onClickFunction={() => onSetStateFunctionGeneric("emailVerifier")}
        size="xxl"
        borderSize="none"
        backgorund="bg-mediumDarkRed"
        classes={clsx(
          "border-black text-lg",
          GenericValue === "emailVerifier" ? "" : "saturate-[.25]"
        )}
      >
        Email Verifier
      </Button>
    </div>
  );
};

export default ButtonsHome;
