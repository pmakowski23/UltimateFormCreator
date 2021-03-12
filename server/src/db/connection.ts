import mongoose from 'mongoose';

const connectionString = "mongodb://mongo:27017/FormCreator";

mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log("DB connection errror", err.message);
  });

const db = mongoose.connection;

export default db;
