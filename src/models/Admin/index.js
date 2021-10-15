const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
  }
  ,
  password: {
    type: String,
    required: true,
    minlength: 1,
  },
}, { timestamps: true });

module.exports = mongoose.model('Admin', AdminSchema);