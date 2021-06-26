const {command} = require("command-based-discord")

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
let ping = () => {return new command({name: "ping", help: "*ping*; **pong** - used to test latentcy", commandFunction: pingCommand})}

module.exports = {
    ping
}
