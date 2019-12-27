const fs = require('fs')

function fetchDescription (daemon, list) {
  if (list[daemon]) {
    return list[daemon]
  } else {
    try {
      let content = fs.readFileSync('/lib/systemd/system/' + daemon, 'utf8')
      return content.match(/Description=(.*)/m)[1]
    } catch (e) {
      return "No Description"
    }
  }
}

module.exports = fetchDescription
