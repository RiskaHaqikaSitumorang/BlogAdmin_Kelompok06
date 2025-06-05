const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  readTime: { type: String, required: true },
  status: { type: String, enum: ['published', 'draft'], default: 'published' },
  date: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
});

module.exports = mongoose.model('Article', articleSchema);