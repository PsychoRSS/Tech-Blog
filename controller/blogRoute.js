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
});

router.get('/:id', async (req, res) => {
    try {
        const singleBlog = await Blog.findByPk(req.params.id)

        const blog =  singleBlog.get({plain: true});

        res.render('', {blog})
        
        
    } catch (err) {
        
    }
})

router.get('/login', async (req, res) => {
    try {


        // if (req.session.loggedIn) {
        //     res.redirect('/');
        //     return;
        //   }
          res.render('login');
    } catch (err) {
        res.status(500).json(err)
    }
})


router.post('/', async (req, res) => {
    const createBlog = await Blog.create({
        title: req.body.title,
        text: req.body.text,
        artist: req.body.artist,
        user_id: req.body.user_id
    })

    res.status(200).json(createBlog)

})

module.exports = router;