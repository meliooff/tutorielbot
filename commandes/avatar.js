const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let target = message.mentions.users.first() || message.author; // On définis la cible, soit l'utilisateur soit un membre mentionner
    let profilepic = target.avatarURL; // On récupère soit l'auteur soit la personne mentionné et on cherche l'URL de son avatar

        var avatar_embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setColor("ORANGE")
        .setDescription(`Voici l'avatar de ${target.username}:`)
        .setImage(profilepic) // On utilise la variable profilepic du dessus
        .setFooter("Demandé par : " + message.author.username, message.author.avatarURL)
        .setTimestamp()
        message.channel.send(avatar_embed);
        console.log("Commande avatar effectuée")
    }