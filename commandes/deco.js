exports.run = (bot, message) => {
    if (message.author.id != '290467364372480000') {return message.reply("Vous n'avez pas les permissions")
  } else {
        message.channel.send("*Je me déconnecte*")  
          console.log('Je me déconnecte');
  
          bot.destroy();
  
          setTimeout(function() {
            process.exit(1);
        }, 3 * 1000)
  
      }
    }