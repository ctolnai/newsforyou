const db = require('../config/connection');
const { User } = require('../models');
const { Category } = require('../models')
const { Article } = require('../models')
const userSeeds = require('./userSeeds.json');
const categorySeeds = require('./categorySeeds.json')
const articleSeeds = require('./articleSeeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Category.deleteMany({});
    await Article.deleteMany({});
    await User.create(userSeeds);
    await Category.create(categorySeeds);
    await Article.create(articleSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
