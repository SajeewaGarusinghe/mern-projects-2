const asyncHandler = require('express-async-handler');
const express = require('express');
const mongoose = require('mongoose');

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

const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  const post = await postMessage.findbyId(id);
  if (!post) {
    res.status(400);
    throw new Error(`No post with id: ${id}`);
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { creator, title, message, tags, selectedFile, _id: id },
    { new: true }
  );

  res.status(201).json(updatedPost);
});
//  const deletePost = asyncHandler( async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     await PostMessage.findByIdAndRemove(id);

//     res.json({ message: "Post deleted successfully." });
// }
// )
// const likePost = asyncHandler( async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const post = await PostMessage.findById(id);

//     const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

//     res.json(updatedPost);
// }

// )
module.exports = {
  getPost,
  getPosts,
  createPost,
  updatePost,
};
