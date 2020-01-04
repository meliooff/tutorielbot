exports.run = (bot, message, args) => {
    let say = args.join(" "); // On récupère le message qui suit "<prefix>say"
    message.delete(); // On supprime le message de l'auteur du message, soit la commande
    message.channel.send(say) // On envoie après avoir supprimé le message
    
    if(!say) return message.reply("Veuillez indiquez du texte ❌") // Le ! signifie l'inverse, donc si il n'y a pas de texte, on répond indiquez du texte
 };