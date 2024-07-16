import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center w-full items-center h-[calc(100vh-70px)] flex-col">
      <div className="my-10 font-semibold text-[12px] uppercase">Sign in</div>

      <SignIn />
    </div>
  );
};

export default page;
