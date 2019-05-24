const {Tray, Menu} = remote
//const path = require('path')
const {dialog} = require('electron').remote; 
   
let trayIcon = new Tray('build/currenda_32.ico')
   
const trayMenuTemplate = [
    {
        label: 'Ustawienia',
        click: function () {
            window.open('aplications/mcra/settings.html', '_blank');
        }
    },
    {
        label: 'Wyjdź',
        click: function () {
            remote.getCurrentWindow().close();
        }
    }
]
            
let trayMenu = Menu.buildFromTemplate(trayMenuTemplate)
trayIcon.setContextMenu(trayMenu)
