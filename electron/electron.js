const path = require( 'path' );
const { app, BrowserWindow } = require( 'electron' );
const isDev = process.env.IS_DEV == "true" ? true : false;

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
            preload: path.join( __dirname, 'preload.js' ),
            nodeIntegration: true,
        },
    });
    mainWindow.loadURL( isDev ? 'http://localhost:3000' : `file://${ path.join( __dirname, '../dist/index.html' )}` );
    if ( isDev ) { mainWindow.webContents.openDevTools(); }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then( () => {
    createWindow()
    app.on( 'activate', function() {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if ( BrowserWindow.getAllWindows().length === 0 ) createWindow() }); });

app.on( 'window-all-closed', () => {
    if ( process.platform !== 'darwin' ) {  // if it's not a MAC...
        app.quit();
    }
});