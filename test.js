require('dotenv').config();
const {command} = require('command-based-discord');
const {help, nick, ping, uptime} = require("./index")
const Discord = require("discord.js")

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN
if (TOKEN == null) {
  console.error("no token provided");
}

const test = require('assert');

bot.login(TOKEN)

bot.on('ready', async () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

var Commands = new command({name: "!", commandFunction: ()=>{}, help: "", subcommands: [
  ping(),
  uptime(),
  nick(),
  new command({subcommands: [
    uptime(),
    nick()
  ], name: "hi", help: "joe"}),
  help()
]})
Commands.reindex(bot)
// Commands.reindex(bot)
bot.on('message', msg => {
  if (msg.content.startsWith("!") && msg.author.username != bot.user.username) {
    Commands.test(msg.content, msg)
  }
});