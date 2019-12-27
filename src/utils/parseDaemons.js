const fetchDescription = require('./fetchDescription')
const knownDaemons = require('../data/daemons.json')

function parseDaemons (data) {
  let lines = data.split('\n')
  let daemons = lines.map(line => {
    let item = line.trim().split(' ')
    let object = {}

    object.daemon = item[1]
    object.duration = item[0]
    object.description = fetchDescription(item[1], knownDaemons)
    return object
  })

  return daemons
}

module.exports = parseDaemons
