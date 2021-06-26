const {command} = require('command-based-discord');
const Discord = require('discord.js');
const { MessageEmbed, MessageEditOptions} = require('discord.js');

let help = () => {
  return new command({name: "help", commandFunction: (input, message, cmd) => {
    /**
    * @param {command} command 
    */
    /**
      * @typedef {Object} CWINDEX
      * @property {command} command
      * @property {number} depth
      * @property {number} difference
    */
    /**
      * 
      * @param {command} command 
      * @returns {Boolean}
    */
    function hasSubcommands(command) {
      if (command.subcommands) {
        if (command.subcommands.length != 0) {
          return true
        }
      }
      return false
    }
    /**
      * 
      * @param {CWINDEX} command 
      * @returns {CWINDEX[]}
    */
    function index(command) {
      /**
        * @type {CWINDEX[]}
      */
      var indexedList = []
      if (hasSubcommands(command.command)) {
        for (let i = 0; i < command.command.subcommands.length; i++) {
          const subcommand = command.command.subcommands[i];
          if (hasSubcommands(subcommand)) {
            indexedList.push({command: subcommand, depth: command.depth+1, hasSub: true})
            let indexedSublist = index({command: subcommand, depth: command.depth + 2})
            for (let i = 0; i < indexedSublist.length; i++) {
              const subitem = indexedSublist[i];
              indexedList.push(subitem)
            }
          } else {
            indexedList.push({command: subcommand, depth: command.depth+1, hasSub: false})
          }
        }
      }
      return indexedList
    }
    var list = index({command: cmd.parent, depth: 0})
    for (let i = 0; i < list.length; i++) {
      const indComm = list[i];
      if (i != 0) {
        list[i].difference = indComm.depth - list[i-1].depth
      }
    }
    /**
    * @param {command} command 
    */
    function commandName(command) {
      function nameGetter(command, name) {
        if (command.parent) {
          return nameGetter(command.parent, command.name + " " + name)
        } else {
          return command.name + "" + name
        }
      }
      return nameGetter(command, "")
    }
    var send = ""
    for (let i = 0; i < list.length; i++) {
      const indComm = list[i];
      let fullCommandName = 
      send = send + "–".repeat(indComm.depth) + commandName(indComm.command) + " — "+ indComm.command.uuid+ " - " + indComm.command.help + " !!" + indComm.hasSub + "\n"
    }
    message.channel.send(send)
  }, help: "a great help command"})
}
module.exports = help