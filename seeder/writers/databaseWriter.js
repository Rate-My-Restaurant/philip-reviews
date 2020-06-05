const readline = require('readline');
const fs = require('fs');
const path = require('path');

const csvLineToObj = require('../transformers/fromCSV');
const { BATCH_SIZE, TOTAL_RECORDS, LOG_RATE, DATA_DIR, NUMBER_OF_FILES } = require('../config.js');

function databaseWriter(fileName, fileNumber, batchInserter, logger) {
  const filePath = path.join(DATA_DIR, `${fileName}-${fileNumber}.csv`);
  const readerStream = fs.createReadStream(filePath, 'utf8');
  const reader = readline.createInterface({ input: readerStream });
  const recordsPerFile = TOTAL_RECORDS / NUMBER_OF_FILES;

  let inserted = (fileNumber - 1) * recordsPerFile;
  let buffer = [];

  let previousInsertionPromise;

  return new Promise((resolve, reject) => {
    reader.on('line', (csvLine) => {
      buffer.push(csvLineToObj(csvLine));

      if (buffer.length >= BATCH_SIZE) {
        const batch = buffer;
        buffer = [];
        previousInsertionPromise = batchInserter(batch).then(() => {
          // process.exit();
          inserted += batch.length;

          if (inserted % LOG_RATE === 0) {
            logger.log(inserted);
          }
        })
      }
    });

    reader.on('close', () => {
      if (fileNumber < NUMBER_OF_FILES) {
        previousInsertionPromise
          .then(() => {
            logger.nextFile(fileNumber);
            resolve(databaseWriter(fileName, fileNumber + 1, batchInserter, logger));
          });
      } else {
        previousInsertionPromise
          .then(() => resolve());
      }
    });

    reader.on('error', (error) => reject(err));
  });
}

module.exports = databaseWriter;