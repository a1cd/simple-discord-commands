const {ping} = require('./src/ping');
const uptime = require('./src/uptime');
const help = require('./src/help')
const {Cmd} = require('command-based-discord');
const nick = require("./src/name")

module.exports = {
    help,
    ping,
    uptime,
    nick
}
// const hypixel = require('hypixel-api-v2');
// new hypixel.HypixelAPI()