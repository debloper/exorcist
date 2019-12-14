function parse (data) {
  let lines = data.split('\n')
  let daemons = lines.map(line => {
    let item = line.trim().split(' ')
    let object = {}

    object[item[1]] = item[0]
    return object
  })

  return daemons
}

module.exports = parse
