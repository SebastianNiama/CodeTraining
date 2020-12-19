const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
  // Create new window
  mainWindow = new BrowserWindow({
    width: 930,
    height: 600,
    webPreferences:{
      nodeIntegration: true,
    }
  });
  // Load html in window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes:true
  }));
  // Quit app when closed
  mainWindow.on('closed', function(){
    app.quit();
  });

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate =  [
  // Each object is a dropdown
  {
    label: ''
  }];