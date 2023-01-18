const mongoose = require('mongoose');



const connectDB = async () => {
  try {
    console.log('sajeewa >>>>>>>>>>>'+process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected : ${conn.connection.host} 🔥🔥🔥🔥`.green.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB
