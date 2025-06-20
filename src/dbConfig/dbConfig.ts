import mongoose from "mongoose";

export async function connectDb() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
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
