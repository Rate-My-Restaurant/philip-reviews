const fs = require('fs');
const path = require('path');

function toCSVString(objects) {
  const csvLines = objects.map((obj) => Object.values(obj).join(','));
  csvLines.push(''); // necessary to ensure new line at end of batch
  return csvLines.join('\n');
}

module.exports = toCSVString;