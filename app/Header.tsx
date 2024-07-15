import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="h-[50px] w-full flex items-center justify-center border-b">
      <div className="flex justify-between items-center w-[90%] h-full">
        <div>Logo</div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
