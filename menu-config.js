// Virasty Desktop 1.0
// Hossein Pira
// https://virasty.com

const { ipcMain } = require('electron');

module.exports = [
    {
        label: 'Virasty',
        submenu: [
            {label : 'Home', click : () => { require('./main')("home") }},
            {label : 'About', click : () => { require('./main')("about") }},
            {role : 'quit'},
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {role : 'undo'},
            {role : 'redo'},
            {role : 'cut'},
            {role : 'copy'},
            {role : 'paste'},
            { type: 'separator' },
            {label : 'Print', click: printPage},
        ]
    },
    {
        label: 'View',
        submenu: [
            {role : 'reload'},
            {role : 'zoomIn'},
            {role : 'zoomOut'},
        ]
    },
]

// Print page method
function printPage() {
    ipcMain.emit('printPage')
}