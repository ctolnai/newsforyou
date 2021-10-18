const db = require('../config/connection');
const { User } = require('../models');
const { Category } = require('../models')
const userSeeds = require('./userSeeds.json');
const categorySeeds = require('./categoryseeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Category.deleteMany({});
    await User.create(userSeeds);
    await Category.create(categorySeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
