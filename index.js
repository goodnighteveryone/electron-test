let electron = require('electron');
let app = electron.app;
let BrowserWindow = electron.BrowserWindow;
let mainWindow = null;
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        // width: 800,
        // height: 600
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true
        }
    });
    // mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.loadFile('index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
app.on('window-all-closed', () => {
    app.quit();
});