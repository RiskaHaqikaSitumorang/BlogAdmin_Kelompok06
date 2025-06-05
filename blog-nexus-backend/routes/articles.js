const express = require('express');
const router = express.Router();
const Article = require('../models/Article');
const authMiddleware = require('../middleware/auth');

// Get all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find().sort({ date: -1 });
    console.log('Fetched articles:', articles.length);
    res.json(articles);
  } catch (err) {
    console.error('Error fetching articles:', err.message);
    res.status(500).json({ message: err.message });
  }
});

// Get single article by ID
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      console.log(`Article not found: ${req.params.id}`);
      return res.status(404).json({ message: 'Article not found' });
    }
    
    article.views += 1;
    await article.save();
    console.log(`Article fetched and views updated: ${req.params.id}`);
    res.json(article);
  } catch (err) {
    console.error('Error fetching article:', err.message);
    res.status(500).json({ message: err.message });
  }
});

// Get total views
router.get('/stats/total-views', async (req, res) => {
  try {
    const totalViews = await Article.aggregate([
      { $group: { _id: null, totalViews: { $sum: '$views' } } },
    ]);
    console.log('Total views:', totalViews[0]?.totalViews || 0);
    res.json({ totalViews: totalViews[0]?.totalViews || 0 });
  } catch (err) {
    console.error('Error fetching total views:', err.message);
    res.status(500).json({ message: err.message });
  }
});

// Create article (Admin only)
router.post('/', authMiddleware, async (req, res) => {
  try {
    console.log('Creating article with data:', req.body);
    const article = new Article(req.body);
    const savedArticle = await article.save();
    console.log('Article created:', savedArticle._id);
    res.status(201).json(savedArticle);
  } catch (err) {
    console.error('Error creating article:', err.message);
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Updating article:', id);
    console.log('Update data:', req.body);
    const updatedArticle = await Article.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    console.log('Article updated:', updatedArticle._id);
    res.status(200).json(updatedArticle);
  } catch (err) {
    console.error('Error updating article:', err.message);
    res.status(400).json({ message: err.message });
  }
});

// Delete article (Admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    console.log(`Deleting article: ${req.params.id}`);
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      console.log(`Article not found for deletion: ${req.params.id}`);
      return res.status(404).json({ message: 'Article not found' });
    }
    console.log('Article deleted:', req.params.id);
    res.json({ message: 'Article deleted' });
  } catch (err) {
    console.error('Error deleting article:', err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;