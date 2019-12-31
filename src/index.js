// Application entrypoint

const { app, BrowserWindow, ipcMain } = require('electron')
const exec = require('child_process').exec

const config = require('./config.json')
const parseDaemons = require('./utils/parseDaemons')

// Global reference of the window object
let window

const createWindow = () => {
  window = new BrowserWindow(config)

  window.loadFile(`${__dirname}/dist/index.html`)

  window.webContents.on('did-finish-load', () => {
    exec('systemd-analyze blame', (e, out, err) => {
      let payload
      if (out) payload = parseDaemons(out)
      window.webContents.send('loaded', payload)
    })
  })

  ipcMain.on('action', (event, arg) => {
    exec('systemctl disable ' + arg, (e, out, err) => {
      if(!e) window.webContents.send('dispelled', arg)
    })
  })

  // Avoids flash of white background
  window.on('ready-to-show', () => {
    window.show()
  })

  // Reset the window object when closed
  window.on('closed', () => {
    window = null
  })
}

// Electron has finished initialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit()
})
