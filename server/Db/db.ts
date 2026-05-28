import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const mongoUrl = process.env.MONGO_DB_CREDENTIALS;
    if (!mongoUrl) {
      throw new Error("MongoDB URL is missing");
    }
    await mongoose.connect(mongoUrl);
  } catch (err) {
    console.log("Database Connection Failed", err);
    process.exit(1);
  }
};

export default connectToDb;
