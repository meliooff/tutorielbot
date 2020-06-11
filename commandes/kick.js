exports.run = (bot, message) => {
    const member = message.mentions.members.first() // On cherche la première personne mentionnée
    if(!message.member.hasPermission(`KICK_MEMBERS`)) // Si l'auteur n'a pas les perms de kick
    return message.channel.send('Vous ne disposez pas des bonnes permissions (**KICK_MEMBERS**)') 
    if (!message.guild.member(bot.user).hasPermission('KICK_MEMBERS')) { return message.channel.send('Il me manque des permissions (**KICK_MEMBERS**)')} // On cherche à savoir si le bot à les perms
    
    if(message.author.bot) return
    
    if (!member) { // Si il n'y a personne mentionné :
      return message.channel.send('Merci de mentionner un utilisateur valide !')
    }
    if(!message.guild) return
    
    if(message.author.bot) return
    
      member.kick().then(member => { // On kick le membre, puis
      message.channel.send(`:white_check_mark: | ${member.user.tag} à bien été expulser du serveur!`) // Une fois expulser on écrit
      })
    }