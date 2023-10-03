const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth =  require('../utils/auth')

router.get('/', async (req,res) => {
    try {
        const allBlogs =  await Blog.findAll({
            include: {model: User, attributes: ['username']}
        });

        const blogs =  allBlogs.map((blog) => blog.get({plain: true}));
        // res.status(200).json(blogs)
        res.render('homepage', {
            blogs,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    res.render('login');

})


// router.get('/:id', async (req, res) => {
//     try {
//         const singleBlog = await Blog.findByPk(req.params.id)

//         const blog =  singleBlog.get({plain: true});

//         // res.render('', {blog})
        
        
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });



router.post('/', withAuth , async (req, res) => {
 try {
    const createBlog = await Blog.create({
        title: req.body.title,
        text: req.body.text,
        artist: req.body.artist,
        user_id: req.body.user_id
    });

    res.status(200).json(createBlog)
 } catch (err) {
    res.status(500).json(err);
    console.log(err);
 }

})

module.exports = router;