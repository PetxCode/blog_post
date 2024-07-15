import { dbCofig } from "@/utils/dbConfig";
import postModel from "@/utils/model/postModel";
import userModel from "@/utils/model/userModel";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    await dbCofig();

    const { userID } = params;

    const userData = await userModel.findById(userID).populate({
      path: "post",
    });

    return NextResponse.json({
      message: "users found",
      status: 200,
      data: userData,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error",
      status: 404,
      data: error.message,
    });
  }
};

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbCofig();
    const { title, desc, content, image } = await req.json();

    const { userID } = params;
    const userData = await userModel.findById(userID);

    const post = await postModel.create({
      title,
      desc,
      content,
      image,
    });

    userData.post.push(new Types.ObjectId(post._id));
    userData.save();

    return NextResponse.json({
      message: "users found",
      status: 200,
      data: post,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      status: 404,
      data: error,
    });
  }
};
