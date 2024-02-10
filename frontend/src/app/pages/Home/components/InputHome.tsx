import { inputProps, usestateButtons } from "@/types/global";
import React, { useState } from "react";

const DomainSearch = () => {
  return (
    <>
      <Input placeholder="Domain Search" />
    </>
  );
};
const EmailVerifier = () => {
  return (
    <>
      <Input placeholder="Email Verifier" />
    </>
  );
};
const EmailFinder = () => {
  return (
    <>
      <Input placeholder="Email Finder" />
    </>
  );
};

const Input = (props: inputProps) => {
  const { placeholder } = props;
  return (
    <>
      <input
        placeholder={placeholder}
        className="w-[70%] border-2 text-[#ff9b28] border-[#ff9b28] placeholder:text-[#ff9b28] h-10 pl-4 focus:outline-none "
      />
    </>
  );
};

const InputHome = ({ ChoosedInput }: { ChoosedInput: usestateButtons }) => {
  const [first, setfirst] = useState("");
  return (
    <article className="p-6 flex h-[fit-content] justify-center w-full border-2 border-solid border-t-0 bg-white400">
      {ChoosedInput === "domainSearch" && <DomainSearch />}
      {ChoosedInput === "emailFinder" && <EmailFinder />}
      {ChoosedInput === "emailVerifier" && <EmailVerifier />}
    </article>
  );
};

export default InputHome;
