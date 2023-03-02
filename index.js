// Include Electron
const { app, BrowserWindow } = require('electron');

// Create the main window for the application
function createMainWindow() {
    // Setup the windows options
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // load the HTML file
    win.loadFile('pong.html');

    // Open DevTools - For Debugging (Optional)
    // win.webContents.openDevTools()
}

app.whenReady().then(createMainWindow);

// Close the application when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

// When the application is activated, create the main window if not exists
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow()
    }
});