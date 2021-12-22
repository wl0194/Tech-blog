const router = require('express').Router();
const { Post } = require('../../models/Post');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, rest) => {
    try {
        const postData = await Post.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(postData);
      } catch (err) {
        res.status(400).json(err);
      }
})