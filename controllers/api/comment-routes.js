const router = require('express').Router();
const Comment = require('../../models/Comment');


router.post('/', (req.res) => {
    Comment.create({ ...req.body, userId: req.session.userId})
});