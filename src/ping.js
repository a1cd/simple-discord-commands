const { Cmd } = require("command-based-discord")

/**
 * 
 * @param {String} inp 
 * @param {Discord.Message} msg 
 * @param {Cmd} cmd 
 */
function pingCommand(inp, msg, cmd) {
    msg.reply("pong")
}
/**
 * @type {Cmd}
 * @description ping -- pong
 */
let ping = new Cmd("ping", null, pingCommand)

module.exports = {
    ping
}
