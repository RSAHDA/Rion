const electron = require('electron')
const { app, BrowserWindow, BrowserView } = electron

const html = `file://${__dirname}/static/setup.html`

app.on('ready', () => {
    const window = new BrowserWindow()
    window.loadURL(html)
})
