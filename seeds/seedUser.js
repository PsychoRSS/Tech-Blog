const { User } = require('../models');

const userData = [
  {
    username: 'Alex Lara',
    email: 'alexbis@gmail.com',
    password: 'hashashhash',
  },
  {
    username: 'Philips David',
    email: 'phill21344112345@gmail.com',
    password: 'hello',
  },
  {
    username: 'Philips David',
    email: 'ruizMan@gmail.com',
    password: 'THERAWRESTOFXDDDD',
  },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
