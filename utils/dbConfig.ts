import { connect } from "mongoose";

export const dbCofig = async () => {
  try {
    await connect(process.env.DB_STRING as string).then(() => {
      // console.clear();
      console.log("Connected to MongoDB ❤️❤️🚀🚀");
    });
  } catch (error) {
    console.log(error);
  }
};
