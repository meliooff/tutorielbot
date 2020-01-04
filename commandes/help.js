const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
const embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setColor("ORANGE")
        .setDescription("Je suis un bot privé créer par MélioOff regroupant que quelques commandes:\n\n`!help`, `!ping`, `!avatar`, `!say`, `!ban`, `!deco`, `!edit`, `!userinfo`")
        .setThumbnail(bot.user.avatarURL)
        .setFooter("Demandé par : " + message.author.username, message.author.avatarURL)
        .setTimestamp()
    message.channel.send(embed)
                };