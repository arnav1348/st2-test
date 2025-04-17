const Feedback = require('../models/Feedback');

// POST /feedback
exports.createFeedback = async (req, res) => {
  try {
    const { name, rating, message } = req.body;
    const feedback = new Feedback({ name, rating, message });
    await feedback.save();
    res.status(201).json({ success: true, data: feedback });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// GET /feedback
exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: feedbacks });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
