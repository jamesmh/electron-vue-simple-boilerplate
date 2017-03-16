module.exports = ({ sender }, args) => {
    sender.send("vue-welcome-message-response", global.AppGlobals.resources["vue-welcome-message-from-ipc"]);
}