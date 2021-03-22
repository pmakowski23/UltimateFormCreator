/* eslint-disable no-console */
import mongoose from 'mongoose';

const connectionString = "mongodb://mongo:27017/FormCreator";

export const initMongoConnection = async (): Promise<mongoose.Connection> => {
  try {
    await mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log("DB connection successful");
  } catch (err) {
    console.log("DB connection errror", err.message);
  }

  return mongoose.connection;
}
