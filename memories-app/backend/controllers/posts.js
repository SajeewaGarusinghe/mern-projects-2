const asyncHandler = require('express-async-handler');
const express = require('express');
const mongoose = require('mongoose');

const PostMessage = require('../models/postMessage.js');


// @desc    Get post
// @route   GET /api/posts/:id
// @access  Private

const getPost = asyncHandler(async (req, res) => {
  const id = req.query.id;
  // res.status(200).json(id);
  const post = await PostMessage.find({_id:id});

  if (!post) {
    res.status(400);
    throw new Error(`No post with id: ${id}`);
  }
   res.status(200).json(id);
});

// @desc    Get posts
// @route   GET /api/posts
// @access  Private

const getPosts = asyncHandler(async (req, res) => {
  const posts = await PostMessage.find();
  res.status(200).json("mother fucker");
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
  // const { id } = req.params;
  const id = req.query.id;
  const { title, message, creator, selectedFile, tags } = req.body;

  const post = await PostMessage.findById(id);
  if (!post) {
    res.status(400);
    throw new Error(`No post with id: ${id}`);
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(201).json(updatedPost);
});

const deletePost = asyncHandler(async (req, res) => {
  // const { id } = req.params;
  const id = req.query.id;

  const post = await PostMessage.findById(id);
  if (!post) {
    res.status(400);
    throw new Error(`No post with id: ${id}`);
  }

  await post.remove();

  res.status(200).json({ message: ` post deleted with id: ${id}` });
});

const likePost = asyncHandler(async (req, res) => {
  // const { id } = req.params;
  const id = req.query.id;

  const post = await PostMessage.findById(id);
  if (!post) {
    res.status(400);
    throw new Error(`No post with id: ${id}`);
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  res.status(201).json(updatedPost);
});

module.exports = {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
};
