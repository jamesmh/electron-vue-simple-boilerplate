const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path")
const { readJsonSync } = require('./electron/file/file')

//Set-up stuff like resources.
global.AppGlobals = {
  //p.s. This is synchronous...you could show a splash screen while loading init files? Who knows!
  //"./electron/file/file.js" has file reading with promises read-to-go :)
  resources: readJsonSync(path.join(__dirname, "static", "resources.json"))
}

//Register all ipc events in special place :)
require('./electron/bootstrap/ipcRegistration').Register(ipcMain)

//Start app/
app.on("ready", _ => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL(path.join("file://", __dirname, 'index.html'))
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', _ => mainWindow = null)
});

