const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setTitle('ping')
    .setDescription(`${client.ws.ping}ms`)
    .setColor("RABDOM")
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.ping = {
  name: "ping"
};