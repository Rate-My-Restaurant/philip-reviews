// const makeSeedFiles = require('./makeSeedFiles');
// const insertSeedFiles = require('./insertSeedFiles');

const cliArg = process.argv[2]; // first commandline argument

if (cliArg === 'full') {
  const makeSeedFiles = require('./makeSeedFiles');
  const insertSeedFiles = require('./insertSeedFiles');

  makeSeedFiles()
    .then(() => console.log('\n\n########## MOVING TO INSERTION ##########\n\n'))
    .then(insertSeedFiles)
    .catch((err) => console.log(err));
} else if (cliArg === 'files') {
  const makeSeedFiles = require('./makeSeedFiles');

  makeSeedFiles()
    .then(() => console.log('\nSeed Files Created!'))
    .catch((err) => console.log(err));
} else if (cliArg === 'database') {
  const insertSeedFiles = require('./insertSeedFiles');

  insertSeedFiles()
    .then(() => console.log('\nSeed Files Inserted into Database!'))
    .catch((err) => console.log(err));
} else {
  throw new Error('Please include command line argument: "both" or "files" or "database"')
}