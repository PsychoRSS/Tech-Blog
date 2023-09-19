const sequelize = require('../config/connection');

const blogData = require('./seedBlog');
const userData = require('./seedUser');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await blogData();

  await userData();

  process.exit(0);
};

seedAll();
