const express = require('express');
const router = express.Router();
const posts = require('../controllers/posts');

router.get('/', posts.getPosts);
router.post('/', posts.createPost);
router.get('/:id', posts.getPost);
router.patch('/:id', posts.updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

module.exports = router;
