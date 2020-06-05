const path = require('path');

const settings = {
  TOTAL_RECORDS: 1, // 10 million -- 1 followed by 7 zeros
  BATCH_SIZE: 1,
  FILE_NAME: 'reviewData',
  DATA_DIR: path.join(__dirname, '../csvFiles/reviewDataSplit'),
  NUMBER_OF_FILES: 1,
  LOG_RATE: 100000, // 1 million -- 1 followed by 6 zeros
};

if (settings.TOTAL_RECORDS % settings.NUMBER_OF_FILES !== 0) {
  throw new Error('config.js: TOTAL_RECORDS must be perfectly divisible by NUMBER_OF_FILES');
}

if (settings.TOTAL_RECORDS % settings.BATCH_SIZE !== 0) {
  throw new Error('config.js: TOTAL_RECORDS must be perfectly divisible by BATCH_SIZE');
}

module.exports = settings;
