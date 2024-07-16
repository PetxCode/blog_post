import { Document, model, models, Schema, Types } from "mongoose";

interface iPost {
  title: string;
  desc: string;
  content: string;
  image: string;
  user: {};
}

interface iPostData extends iPost, Document {}

const postData = new Schema<iPostData>(
  {
    title: { type: String, required: true },
    desc: { type: String },
    content: { type: String },
    image: { type: String },

    user: { type: Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

const postModel = models.users || model<iPostData>("posts", postData);

export default postModel;
