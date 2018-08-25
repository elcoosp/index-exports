const Program = actionDescriptors => ({
  subscribe () {
    const [requestedCommand, ...args] = process.argv.slice(2)

    for (const [command, { execute }] of Object.entries(actionDescriptors)) {
      if (requestedCommand === command) {
        return execute(...args)
      }
    }
    console.log(`ERROR: the command ${requestedCommand} is not available`)
  }
})
module.exports = Program
