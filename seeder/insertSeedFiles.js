// const { dbConnect, dbClient } = require('../mongo/connect');
const databaseWriter = require('./writers/databaseWriter');
const bulkInsert = require('../database/postgres/reviews.js').insertMany;
const Logger = require('./logger');
const { FILE_NAME } = require('./config');


function insertSeedFiles() {
  const logger = new Logger('database insert', 'primary record');
  const startFileNum = 1;
  // bulkInsert = () => {
  //   return Promise.resolve()
  // }
  return databaseWriter(FILE_NAME, startFileNum, bulkInsert, logger);

  // return dbConnect
  //   .then(() => databaseWriter(FILE_NAME, startFileNum, bulkInsert, logger))
  //   .then(() => console.log('DONE!!!'))
  //   .then(() => dbClient.close())
  //   .catch((err) => console.log(err))
}

module.exports = insertSeedFiles;