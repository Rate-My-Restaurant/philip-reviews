const generateRecords = require('./recordGenerators/generateRecords');
const fileWriter = require('./writers/fileWriter');
const Logger = require('./logger');
const { FILE_NAME } = require('./config');

function makeSeedFiles() {
  const logger = new Logger('write file', 'primary record');
  const startFileNum = 1;

  return fileWriter(FILE_NAME, startFileNum, generateRecords, logger)
    .then(() => console.log('DONE!!!'))
    .catch((err) => console.log(err))
}

module.exports = makeSeedFiles;