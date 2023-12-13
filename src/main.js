const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();webpackdisplay
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    width: 800,
    icon: './src/assets/app-icon@1x.png',
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  //mainWindow.webContents.openDevTools();
};

Menu.setApplicationMenu(null)

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

