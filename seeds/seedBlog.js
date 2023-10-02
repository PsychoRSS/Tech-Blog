const {Blog} = require('../models');

const blogs = [
  {
    title: 'Once',
    text: 'Their once was a pony in my house and it got lost, i still dont know where it is.... Help',
    artist: 'Alex Lara',

  },
  {
    title: 'Magic',
    text: 'woasaierjfapqrueiopacxfvjdisfjlewpdsofadjlxcjiasatfnslksa',
    artist: 'Philips David',

  },
  {
    title: 'secretary?',
    text: 'aslkjgieowbnxchndkjlsafjiweqoppq jrwiqshalfkasj sjfiweoajslknmc,xnci djsapjwqlxjfiweoqjxlkdjla',
    artist: 'Issac Ruiz',
   
  },

];

const seedBlogs = () => Blog.bulkCreate(blogs);

module.exports = seedBlogs;
