const {Blog} = require('../models');

const blogs = [
  {
    title: 'Once',
    text: 'Their once was a pony in my house and it got lost, i still dont know where it is.... Help',
    artist: 'Alex Lara',
    user_id: 1
  },
  {
    title: 'Magic',
    text: 'woasaierjfapqrueiopacxfvjdisfjlewpdsofadjlxcjiasatfnslksa',
    artist: 'Philips David',
    user_id: 2
  },
  {
    title: 'secretary?',
    text: 'aslkjgieowbnxchndkjlsafjiweqoppq jrwiqshalfkasj sjfiweoajslknmc,xnci djsapjwqlxjfiweoqjxlkdjla',
    artist: 'Issac Ruiz',
    user_id: 3
  },

];

const seedBlogs = () => Blog.bulkCreate(blogs);

module.exports = seedBlogs;
