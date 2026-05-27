import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MONGO_DB_CREDENTIALS;

const connectToDb = async () => {
  try {
    if (!mongoUrl) {
      throw new Error("MongoDB URL is missing");
    }
    await mongoose.connect(mongoUrl);
    console.log("Database Connected Successfully");
  } catch (err) {
    console.log("Database Connection Failed", err);
    process.exit(1);
  }
};

export default connectToDb;
