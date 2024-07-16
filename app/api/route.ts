import { dbCofig } from "@/utils/dbConfig";
import userModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbCofig();

    const users = await userModel.find();
    return NextResponse.json({
      message: "users found",
      status: 200,
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      status: 404,
      data: error,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await dbCofig();
    const { name, email, password, userID, image } = await req.json();
    const users = await userModel.create({
      name,
      email,
      password,
      userID,
      image,
    });
    return NextResponse.json({
      message: "users found",
      status: 200,
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      status: 404,
      data: error,
    });
  }
};
