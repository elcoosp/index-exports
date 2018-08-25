const { promisify } = require('util')
const path = require('path')
const fs = require('fs')
const Utils = {
  spaceSplit: str => str.split(' ').filter(Utils.notEmpty),
  notEmpty: x => x.trim() !== '',
  ternAlways: (predicate, trueValue, falseValue) => x =>
    predicate(x) ? trueValue : falseValue,
  composePromise: (...fns) => fns.reduce((acc, f) => acc.then(f)),
  onProp: (prop, f) => o => ({ ...o, [prop]: f(o[prop]) }),
  readDir: promisify(fs.readdir),
  removeJsExtension: x => x.slice(0, -3),
  writeFile: promisify(fs.writeFile),
  pathFromCWD: folderPath => path.join(process.cwd(), ...folderPath),
  every: (...args) => x => args.every(f => f(x)),
  not: a => x => x !== a,
  endsWith: a => x => x.endsWith(a)
}
module.exports = Utils
