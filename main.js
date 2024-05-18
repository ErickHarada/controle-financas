const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const { app } = require('electron');

// run this as early in the main process as possible
if (require('electron-squirrel-startup')) app.quit();

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/malote-sobre-controle/browser/index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});