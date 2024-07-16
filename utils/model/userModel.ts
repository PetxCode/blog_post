import { Document, model, models, Schema, Types } from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
  userID: string;
  image: string;
  post: {}[];
}

interface iUserData extends iUser, Document {}

const userData = new Schema<iUserData>(
  {
    name: { type: String, required: true },
    email: { type: String },
    password: { type: String },
    userID: { type: String },
    image: { type: String },
    post: [{ type: Types.ObjectId, ref: "posts" }],
  },
  { timestamps: true }
);

const userModel = models.users || model<iUserData>("users", userData);

export default userModel;
