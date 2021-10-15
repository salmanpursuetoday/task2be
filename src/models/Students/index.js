const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  registrationNo: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);