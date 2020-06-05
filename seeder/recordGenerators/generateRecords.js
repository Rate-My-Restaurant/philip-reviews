const { BATCH_SIZE } = require('../config');

function generateSingleRecord(id) {
  return {
    id: id,
    name: 'demo',
    city: 'SF',
  };
}

function generateBatchOfRecords(startId) {
  const batch = [];
  startId += 1;

  for (let i = startId; i - startId < BATCH_SIZE; i += 1) {
    batch.push(generateSingleRecord(i));
  }
  return batch;
}

module.exports = generateBatchOfRecords;
