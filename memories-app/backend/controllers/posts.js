const asyncHandler = require('express-async-handler');

const PostMessage = require('../models/postMessage.js');

// @desc    Get posts
// @route   GET /api/posts
// @access  Private

const getPosts = asyncHandler(async (req, res) => {
  const posts = await PostMessage.find();
  res.status(200).json(posts);
});

// @desc    Get post
// @route   GET /api/posts/:id
// @access  Private

const getPost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await PostMessage.find(id);
  res.status(200).json(posts);
});

const createPost = asyncHandler(async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;

  if (!title || !message || !selectedFile || !creator || !tags) {
    res.status(400);
    throw new Error('Please add all data');
  }
  const post = await PostMessage.create({
    title,
    message,
    selectedFile,
    creator,
    tags,
  });
  res.status(200).json(post);
});

module.exports = {
  getPost,
  getPosts,
  createPost,
};
