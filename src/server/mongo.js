const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const env = require('./env/environment');

// eslint-disable-next-line max-len
const mongoUri = `mongodb://admin:1q2w3e4r@handigjoh-shard-00-00-ksexg.azure.mongodb.net:27017,handigjoh-shard-00-01-ksexg.azure.mongodb.net:27017,handigjoh-shard-00-02-ksexg.azure.mongodb.net:27017/test?ssl=true&replicaSet=HandigJoh-shard-0&authSource=admin&retryWrites=true&w=majority`;


function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(
    mongoUri,
    {
      useMongoClient: true
    }
  );
}

module.exports = {
  connect,
  mongoose
};
