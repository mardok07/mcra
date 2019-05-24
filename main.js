const {app, BrowserWindow} = require('electron')
//const {dialog} = require('electron').remote; 
var path = require('path')
let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 440,
        height: 758,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        },
        icon: path.join(__dirname, 'images/32x32.ico')
    })
    mainWindow.loadFile('index.html')
    mainWindow.on('closed', function () {
        mainWindow = null
    })
//    mainWindow.setResizable(false)
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})

require('update-electron-app')()
require('update-electron-app')({
  repo: 'mardok07/mcra',
  updateInterval: '5 minutes',
  logger: require('electron-log')
})




