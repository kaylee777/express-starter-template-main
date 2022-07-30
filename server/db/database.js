import mongoose from "mongoose";

const mongoDB = "mongodb+srv://kaylee777:tixxam-8famze-terrYx@cluster0.vjrrffw.mongodb.net/okcoders";

export async function connectToDatabase() {
  try {
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.error(e);
  }
}
