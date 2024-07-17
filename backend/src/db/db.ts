import dotenv from 'dotenv';
dotenv.config();
import { connect, disconnect } from "mongoose";

const uri = process.env.MONGODB_URI;

async function connectToDB() {
  await connect(uri).then(() => {
      console.log('Connected to MongoDB');
  }).catch(err => {
      console.error('Error connecting to MongoDB:', err.message);
  });
}

async function disconnectDB() {
  try {
    await disconnect();
  } catch (error) {
    console.error(error);
  }
}

export { connectToDB, disconnectDB };
