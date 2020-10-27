const electron = require('electron')
const { app, BrowserWindow } = require('electron');
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const getProcess = require("./getProcess");
const path = require('path');

const application = express();

application.use(bodyParser.urlencoded({ extended: false }));
application.use(bodyParser.json());
application.use(cors())
const port = 5000;
const MAIN_HTML = path.join('file://', __dirname, 'main.html');
const CHILD_PADDING = 50;

const onAppReady = function () {
  let displays = electron.screen.getAllDisplays();
  let display = electron.screen.getPrimaryDisplay();
  let width = displays[0].bounds.width;
  let parent = new BrowserWindow({
    width: 600,
    height: 600,
    transparent: true,
    frame: false,
    // x: 1920 - 150,
    x: 1920-600,
    y: 0
  });

  parent.setMenuBarVisibility(false)

  parent.once('close', () => {
    parent = null;
  });

  // parent.loadURL(MAIN_HTML);
  parent.loadURL('http://localhost:3000');
  parent.webContents.openDevTools()
};

application.get('/', async (req, res) => {

  res.send([
    {name: 'Hello', memory: 'James'}
  ])
  // const processes = await getProcess.getProcess()
  // console.log(processes)
  // res.send(processes)
})
//~ app.on('ready', onAppReady);
app.on('ready', () => setTimeout(onAppReady, 500));

application.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})