import { useClerk, UserProfile } from "@clerk/nextjs";
import { currentUser, getAuth } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const user = await currentUser();

  const userID = user?.publicMetadata?.userId;

  const res = await fetch(`http://localhost:3000/api/${userID}`, {
    cache: "no-cache",
    next: {
      tags: ["post"],
    },
  });

  const data = await res.json();
  console.log("read: ", data);

  return <div>page : </div>;
};

export default page;
