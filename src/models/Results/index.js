const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Student'
  },
  partNo: {
    type: Number,
    required: true,
  },
  urdu: {
    type: Number,
    required: true,
  },
  english: {
    type: Number,
    required: true,
  },
  islamicEducation: {
    type: Number,
    required: true,
  },
  pakistanStudies: {
    type: Number,
    required: true,
  },
  physics: {
    type: Number,
    required: true,
  },
  computer: {
    type: Number,
    required: true,
  },
  math: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Result', resultSchema);