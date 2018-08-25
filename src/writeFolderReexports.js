const U = require('./Utils')
const path = require('path')

const makeExportsContent = xs =>
  xs.reduce(
    (acc, x) =>
      (acc += `export { default as ${U.removeJsExtension(
        x
      )} } from './${x}'\n`),
    ''
  )

const writeFolderReexports = async folderPathRaw => {
  try {
    const folderPath = U.pathFromCWD(folderPathRaw.split('/'))
    const folderNames = await U.readDir(folderPath).then(xs =>
      xs.filter(U.every(U.not('index.js'), U.endsWith('.js')))
    )

    await U.writeFile(
      path.join(folderPath, 'index.js'),
      makeExportsContent(folderNames),
      'utf8'
    )
  } catch (e) {
    console.log(e)
  }
}

module.exports = writeFolderReexports
