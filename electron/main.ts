import { app, BrowserWindow, Menu } from 'electron'
import path from 'node:path'
import log from 'electron-log/main';

process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')


let win: BrowserWindow | null

const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
  win = new BrowserWindow({
    width: 1260,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools : true,
    },
  })

  Menu.setApplicationMenu(null)
  
  win.webContents.openDevTools()
  
  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


log.initialize({ preload: true });
log.info('Log from the main process');
log.transports.file.resolvePathFn = () => 'logs/app.logs'


process.on('uncaughtException', (error) => {
  alert(error);
});

app.whenReady().then(createWindow)
