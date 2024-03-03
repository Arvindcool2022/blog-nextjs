import mongoose from 'mongoose';

const connection = {};

const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log('connection already exist');
      return;
    }

    const db = await mongoose.connect(process.env.MONGO);
    console.log('connect to DB', 'connected');
    connection.isConnected = db.connection;
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
