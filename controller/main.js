const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let win = new BrowserWindow({width:800, height: 600})
  win.loadURL(`file://${__dirname}/index.html`)
  //win.webContents.openDevTools( { detach: true } ) //dev tools - uncomment for the Chrome Dev Toools

  win.on('close', function(){
    //things that happen when you close the main window
    win = null;
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  // Currently this is commented out. Uncomment to fix it
  /*
  if (process.platform !== 'darwin') {
    app.quit()
  }*/
  app.quit();
})
