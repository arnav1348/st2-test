const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
