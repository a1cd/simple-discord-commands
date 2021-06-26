const {command} = require('command-based-discord');
const Discord = require('discord.js');
const { MessageEmbed, MessageEditOptions} = require('discord.js');

module.exports = () => {
  return new command({name: "nick", commandFunction: async (input, msg, command) => {
    let setNick = msg.member.setNickname(input, "user ran command: `"+msg.content+"`")
    let authorUrl = msg.author.avatarURL({dynamic: true, size: 512})
    let embed = new MessageEmbed()
    .setThumbnail(authorUrl)
    .setDescription("Good job! What a great name.")
    .setAuthor(input, authorUrl)
    .setTitle("*"+msg.author.username+"* changed their name to "+input+"!")
    .setThumbnail(authorUrl)
    .setTimestamp(msg.createdTimestamp)
    .setFooter("*"+msg.author.username+"* changed their name to "+input, authorUrl)
    await setNick
    let reply = await msg.channel.send(embed)
    let newEmbed = new MessageEmbed()
    .setAuthor(input, authorUrl)
    .setTitle("*"+msg.author.username+"* changed their name to "+input+"!")
    .setTimestamp(msg.createdTimestamp)
    .setFooter("*"+msg.author.username+"* changed their name to "+input)
    reply.edit(newEmbed)
  }, help: "change your name"})
}