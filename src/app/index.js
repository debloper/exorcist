
const { ipcRenderer } = require('electron')

ipcRenderer.on('loaded', (event, data) => {
  document.getElementById('details').innerHTML = JSON.stringify(data, '  ', null)
})
