import mongoose from "mongoose";

export async function connectDb() {
  try {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
      throw new Error("MONGO_URL environment variable is not defined");
    }
    mongoose.connect(mongoUrl);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDb Connection");
    });

    connection.on("errro", (err) => {
      console.log("MongoDb connection error" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong in database connection", error);
  }
}
