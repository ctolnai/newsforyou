const db = require('../config/connection');
const { User } = require('../models');
const { Article } = require('../models')
const userSeeds = require('./userSeeds.json');
const articleSeeds = require('./articleSeeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Article.deleteMany({});
    await Article.create(articleSeeds);
    await User.create(userSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
