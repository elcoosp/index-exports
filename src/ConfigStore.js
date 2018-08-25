const MakeConfig = require('configstore')
const pkg = require('../package.json')

// create a Configstore instance with an unique ID e.g.
// Package name and optionally some default values

const ConfigStore = new MakeConfig(pkg.name, { folderPaths: [] })
module.exports = ConfigStore
