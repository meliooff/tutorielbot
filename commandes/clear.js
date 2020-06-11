exports.run = (bot, message, args) => {        
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Permissions manquantes");

    if(!args[0]) return message.channel.send("Précisez un nombre de messages à supprimer")
    if(args[0] > 100) return message.channel.send("Tu ne peux pas supprimer plus de 100 messages") //On détecte une erreur si la personne indique un nombre suppérieur à 100 puisque le bot ne peux pas supprimer plus de 100 msgs à la fois
    message.channel.bulkDelete(args[0]).then(() => { //Une fois le nombre de message voulu supprimer :
        message.channel.send(`${args[0]} messages supprimés.`)
    });
}