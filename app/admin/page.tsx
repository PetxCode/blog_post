"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const page = () => {
  const [value, setValue] = useState("");
  // const user = await currentUser();
  const userID = "";

  console.log(userID);

  const mainAction = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const image = formData.get("image") as string;
    const content = formData.get("content") as string;

    console.log(content);

    await fetch(`http://localhost:3000/api/${userID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, desc, content, image }),
    }).then(() => {
      console.log("Post created successfully");
    });

    revalidateTag("post");
  };

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const modules = {
    toolbar: toolbarOptions,
  };
  return (
    <div>
      <div>This is the Admin screen</div>

      <div className="mx-10 mt-16 w-[300px]">
        <form action={mainAction}>
          <div>
            <label>title</label>
            <input name="title" />
          </div>
          <div>
            <label>desc</label>
            <input name="desc" />
          </div>
          <div className="flex flex-col">
            <label>content</label>
            <input name="content" />
          </div>
          <div>
            <label>image</label>
            <input name="image" />
          </div>

          <Button type="submit" className="my-5">
            Submit
          </Button>
        </form>
      </div>

      <div className="my-20 mx-5 w-[500px]">
        <ReactQuill
          modules={modules}
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </div>

      <div className="m-5">
        <div>{value}</div>

        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </div>
  );
};

export default page;
