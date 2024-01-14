import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_CONNECTION_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection error");
  }
};

export default dbConnect;
