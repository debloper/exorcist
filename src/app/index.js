
const { ipcRenderer } = require('electron')

ipcRenderer.on('loaded', (event, data) => {
  document.getElementById('title').innerHTML = data.appName
  document.getElementById('details').innerHTML = 'built with Electron v' + data.electronVersion
})
