const Register = (ipcMain) => {
    for (key in events) {
        ipcMain.on(key, events[key]);
    }
}


const events = {
    "vue-welcome-message": require('../events/vue-welcome-message'),
}

module.exports = {
    Register
}