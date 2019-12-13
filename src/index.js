// Application entrypoint

const { app, BrowserWindow } = require('electron');
const config = require('../config/window.json')

// Global reference of the window object
let window;

const createWindow = () => {
  window = new BrowserWindow(config);

  window.loadFile(`${__dirname}/app/index.html`);

  // window.webContents.openDevTools()

  window.webContents.on('did-finish-load', () => {
    window.webContents.send('loaded', {
      appName: 'exorcist',
      electronVersion: process.versions.electron
    })
  })

  // Reset the window object when closed
  window.on('closed', () => {
    window = null;
  });
};

// Electron has finished initialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit();
});
