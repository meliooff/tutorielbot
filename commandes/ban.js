exports.run = (bot, message) => {
    const member = message.mentions.members.first() // On cherche la première personne mentionnée
    if(!message.member.hasPermission(`BAN_MEMBERS`)) // Si l'auteur n'a pas les perms de ban
    return message.channel.send('Vous ne disposez pas des bonnes permissions (**BAN_MEMBERS**)') 
    if (!message.guild.member(bot.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('Il me manque des permissions (**BAN_MEMBERS**)')} // On cherche à savoir si le bot à les perms
    
    if(message.author.bot) return
    
    if (!member) { // Si il n'y a personne mentionné :
      return message.channel.send('Merci de mentionner un utilisateur valide !')
    }
    if(!message.guild) return
    
    if(message.author.bot) return
    if (!member.bannable) { // Si la personne ne peux pas être banni :
      return message.channel.send('Cet utilisateur ne peux pas être banni.')
    }
    
    return message.guild.members.ban(member, { reason: "Aucune raison fournie"}) //On ban le membre
      .then(() => message.channel.send(`:white_check_mark: | ${member.user.tag} à bien été banni du serveur!`)) // Une fois banni on écrit
      .catch(error => message.reply(`Une erreur est survenue.`)) // En cas d'erreur
    }