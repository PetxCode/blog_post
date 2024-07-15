import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center w-full items-center h-[calc(100vh-70px)]">
      <div className="my-10 font-semibold text-[12px] uppercase">Sign up</div>

      <SignUp />
    </div>
  );
};

export default page;
