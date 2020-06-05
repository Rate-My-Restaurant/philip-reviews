const { TOTAL_RECORDS, LOG_RATE } = require('./config');

class Logger {
  constructor(action, recordType) {
    this.startTime = process.hrtime();
    this.lastLogTime = process.hrtime();
    this.header = `- ${action}: ${recordType} -`;
  }

  log(currentId) {
    const recordsRemaining = TOTAL_RECORDS - currentId;
    const secondsSinceLastLog = process.hrtime(this.lastLogTime)[0];
    const totalSeconds = process.hrtime(this.startTime)[0];
    const logsRemaining = recordsRemaining / LOG_RATE;

    this.lastLogTime = process.hrtime();

    // const logsRemaining = recordsRemaining / LOG_RATE;
    const estimatedMinutesRemaining = (secondsSinceLastLog * logsRemaining) / 60;
    console.log(this.header);
    console.log(`COUNT: ${currentId}/${TOTAL_RECORDS}`);
    console.log(`TIME SINCE LAST LOG (sec): ${secondsSinceLastLog || '< 1'}`);
    console.log(`ESTIMATED TIME REMAINING (mins): ${estimatedMinutesRemaining || '< 1'}`);
    console.log(`TOTAL TIME (mins): ${totalSeconds / 60}\n`);
  }

  nextFile(currentFileNum) {
    console.log(`*********** SWITCHING TO FILE #${currentFileNum + 1} ***********\n`)
  }
}

module.exports = Logger;
