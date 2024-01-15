import {app, BrowserWindow, Menu} from 'electron'
import path from 'node:path'
import installExtension, {REDUX_DEVTOOLS} from 'electron-devtools-installer'
import toast from 'react-hot-toast'

process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')


console.log(process.env.SERVER_URL)

let win: BrowserWindow | null

const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
    win = new BrowserWindow({
        width: 1260,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            devTools: true,
        },
    })

    Menu.setApplicationMenu(null)

    win.webContents.openDevTools()

    win.webContents.on('did-finish-load', () => {
        win?.webContents.send('main-process-message', (new Date).toLocaleString())
    })

    if (VITE_DEV_SERVER_URL) {
        win.loadURL(VITE_DEV_SERVER_URL)
    } else {
        win.loadFile(path.join(process.env.DIST, 'index.html'))
    }
}

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

process.on('uncaughtException', (error) => {
    alert(error);
    toast.error(`${error}`);
});

app.whenReady().then(() => {

    [REDUX_DEVTOOLS].map((ext) => {
        installExtension(ext).then((name: string) => console.log(`Installed extension ${name}`))
            .catch((error) => console.log(`An error has occured: ${error}`))
    });

    createWindow();
})
