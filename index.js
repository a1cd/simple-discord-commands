const {ping} = require('./src/ping');
const {uptime} = require('./src/uptime');
const {Cmd, help} = require('discord-made-siple');
const nick = require("./src/name")

module.exports = {
    help,
    ping,
    uptime,
    nick
}
