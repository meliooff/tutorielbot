const Discord = require('discord.js');

exports.run = (bot, message, args) => { // On utilise le commande handler, on définis donc plusieurs variables "bot", "message", "args"
const embed = new Discord.RichEmbed() // On définis l'embed, seul "embed" (nom de la variable) est personnalisable
        .setAuthor(bot.user.username, bot.user.avatarURL) // On définis l'auteur avec pour nom celui de notre bot ainsi que son avatar
        .setColor("ORANGE")
        .setDescription("🏓| Commande ping")
        .setThumbnail(bot.user.avatarURL) // Le thumbnail est donc l'avatar du bot
        .addField("Ping", bot.ping + "`ms`")
        .setFooter("Demandé par : " + message.author.username, message.author.avatarURL) // On indique le nom et l'avatar de l'auteur du message
        .setTimestamp()
    message.channel.send(embed) // On envoie enfin l'embed dans le salon
                    console.log('Commande ping effectuée') // On écrit dans la console que la commande est effectué, c'est comme des logs dans ce cas présent
                };