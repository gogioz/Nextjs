import mongoose from "mongoose";

export function dbConnection() {
  mongoose
    .connect(
      `mongodb+srv://bluetopia:bluetopia@bluetopia.tukzdmt.mongodb.net/test?retryWrites=true&w=majority&appName=BlueTopia/test`
    )
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
}
