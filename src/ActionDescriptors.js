const inquirer = require('inquirer')
const ConfigStore = require('./configStore')
const U = require('./Utils')
const writeFolderReexports = require('./writeFolderReexports')

const ActionDescriptors = {
  config: {
    description: 'Initialize the configuration file',
    execute: () =>
      U.composePromise(
        inquirer.prompt([
          {
            name: 'folderPaths',
            message:
              'Path of the folders (from the root directory) you want to systematically update when running the exec command',
            validate: U.ternAlways(
              U.notEmpty,
              true,
              'Give me some folder paths 👀'
            )
          }
        ]),
        U.onProp('folderPaths', U.spaceSplit),
        x => ConfigStore.set(x)
      )
  },
  exec: {
    description:
      'Execute the script creating index files of re-exports for the folderPaths provided in the config',
    execute: () =>
      Promise.all(ConfigStore.get('folderPaths').map(writeFolderReexports))
  }
}

module.exports = ActionDescriptors
