const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please enter a namee'],
    },
    email: {
      type: String,
      required: [true, 'please enter a email'],
      unique:true
    },
    password: {
      type: String,
      required: [true, 'please enter a password'],
    },
       },
  {
    timestamps: true, //to create updated and created at field automatically
  }
);

module.exports = mongoose.model('User', userSchema);
