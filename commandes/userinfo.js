const Discord = require('discord.js')


exports.run = (bot, message, args) => {
    let target = message.mentions.users.first() || message.author;

    const embed = new Discord.RichEmbed()
    .setAuthor(target.username, target.avatarURL)
    .setColor("ORANGE")
    .addField(`Nom:`, `${target.username}`, true) // Le "true" permet d'organiser notre embed
    .addField(`ID:`, target.id, true)
    .addField(`Discriminateur:`, target.discriminator, true)
    .addField(`Robot:`, target.bot) //On cherche à savoir si la personne mentionnée est un robot ou pas
    .setThumbnail(target.avatarURL)
    .setFooter("Demandé par : " + message.author.username, message.author.avatarURL)
    message.channel.send(embed)
}