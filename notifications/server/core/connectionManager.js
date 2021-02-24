const mongoose = require('mongoose');
const logger = require('@core/logger');

async function connectMongoDb() {
  const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB,
  } = process.env;

  // const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
  const url = `mongodb://mongoadmin:mongoadmin@localhost:27017/notifications?authSource=admin`;

  const options = {
    useNewUrlParser: true,
    // reconnectTries: Number.MAX_VALUE,
    // reconnectInterval: 500,
    connectTimeoutMS: 10000,
    useUnifiedTopology: true
  };

  try {
    await mongoose.connect(url, options);
    console.log('mongo db is connected');
    logger.log('mongo db is connected');
  } catch (ex) {
    console.log('mongo db connection failed', ex);
    logger.log('mongo db connection failed', ex);
  }
}

module.exports = {
  connectMongoDb,
};
