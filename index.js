const electron = require('electron')
const { app, BrowserWindow } = electron
const path = require('path')

const html = `file://${__dirname}/index.html`
const preload = `/preload.js`

app.on('ready', () => {
  const frontend = new BrowserWindow({
    webPreferences: {
      preload: `file://${__dirname}/preload.js`
    }
  })
  frontend.loadURL(html)
})
