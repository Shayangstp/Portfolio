// import mongoose from "mongoose";

// export async function dbConnect() {
//   try {
//     const connection = mongoose.connect(process.env.MONGO_URL);

//     console.log("connection success" + connection);

//     // connection.on("connected", () => {
//     //   console.log("MongoDB connected successfully");
//     // });

//     // connection.on("error", (err) => {
//     //   console.log(
//     //     "MongoDB connection error. Please make sure MongoDB is running. " + err
//     //   );
//     //   process.exit();
//     // });
//   } catch (error) {
//     console.log("db goes wrong!");
//     console.log(error);
//   }
// }

import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB connected successfully");

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });
  } catch (error) {
    console.error("db connection error:", error);
    throw new Error(error.message);
  }
}
