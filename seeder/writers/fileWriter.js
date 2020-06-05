const fs = require('fs');
const path = require('path');
const { BATCH_SIZE, TOTAL_RECORDS, LOG_RATE, NUMBER_OF_FILES, DATA_DIR } = require('../config.js');
const toCSV = require('../transformers/toCSV');

function dataWriter(fileName, fileNumber, generator, logger) {
  const recordsPerFile = TOTAL_RECORDS / NUMBER_OF_FILES;
  let writer = fs.createWriteStream(path.join(DATA_DIR, `${fileName}-${fileNumber}.csv`));
  let currentId = (fileNumber - 1) * recordsPerFile;
  let batch = [];
  let lastLogId = 0;
  let isEndOfFile = false;

  return new Promise((resolve, reject) => {
    writer.on('error', (err) => reject(err))

    function write() {
      let ok = true;

      do {
        batch = toCSV(generator(currentId));
        currentId += BATCH_SIZE;
        if (currentId % recordsPerFile === 0) isEndOfFile = true;

        if (currentId === TOTAL_RECORDS) {
          // last batch!
          writer.write(batch, 'utf8', () => {
            logger.log(currentId);
            resolve(fileNumber);
          });
        } else if (isEndOfFile) {
          ok = false;
          writer.write(batch, 'utf8', () => {
            logger.log(currentId);
            writer.close();
            logger.nextFile(fileNumber);
            resolve(dataWriter(fileName, fileNumber + 1, generator, logger))
          })
        } else if (currentId - lastLogId > LOG_RATE) {
          const logId = currentId
          ok = writer.write(batch, 'utf8', () => {
            logger.log(logId);
            lastLogId = logId;
          });
        } else {
          ok = writer.write(batch, 'utf8');
        }

      } while (currentId < TOTAL_RECORDS && ok);

      if (currentId < TOTAL_RECORDS && !isEndOfFile) {
        // Had to stop early!
        // Write some more once it drains.
        writer.once('drain', write);
      }
    }

    write();

  });
}

module.exports = dataWriter;