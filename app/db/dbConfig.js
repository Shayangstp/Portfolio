import mongoose from "mongoose";

export async function dbConnect() {
  try {
    // await mongoose.connect(process.env.MONGO_URL);
    await mongoose.connect(
      "mongodb+srv://shayanGstp:Shayan5262@shayangstp.lk8wplv.mongodb.net/protfolio?retryWrites=true&w=majority&appName=ShayanGstp",
      {
        erverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
        socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
      }
    );

    console.log("MongoDB connected successfully");

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });
  } catch (error) {
    console.error("db connection error:", error);
    throw new Error(error.message);
  }
}
