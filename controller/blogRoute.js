const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth =  require('../utils/auth')

router.get('/', async (req,res) => {
    try {
        const allBlogs =  await Blog.findAll();

        const displayBlogs =  allBlogs.map((blog) => {
            blog.get({plain: true})
        });

        res.render('homepage', {
            displayBlogs
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;