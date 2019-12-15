function parse (data) {
  let lines = data.split('\n')
  let daemons = lines.map(line => {
    let item = line.trim().split(' ')
    let object = {}

    object.duration = item[0]
    object.daemon = item[1]
    return object
  })

  return daemons
}

module.exports = parse
