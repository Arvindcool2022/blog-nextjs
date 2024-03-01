import mongoose from 'mongoose';

const connection = {};

const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connection[0].readyState;
  } catch (error) {
    console.log(error);
  }
};
