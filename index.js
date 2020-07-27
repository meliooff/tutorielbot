const Discord = require('discord.js'); //C'est une variable, qui se nomme "Discord" qui a besoint des dépendances de discord.js
const bot = new Discord.Client(); //On peut remplacer "bot" par "client". Cette variable va créer le bot en quelque sorte
const config = require("./config.json"); //Nous récupérons la configuration "config.json" et le ./ correspond à la racine du bot, là où se trouve l'index
bot.login(config.token) //Le "bot" reprend la variable "bot" juste au dessus. Le token sera dans la config.json
const prefix = config.prefix // Nous définissons le préfix du bot tel que le préfix utiliser dans la config.json

bot.on('ready', function () { //Dès que le bot est connecté et donc "ready", il va effectuer toutes les actions présentes dans les accolades
console.log("Connecté")
bot.user.setPresence({ //On définit que le bot (variable du début) va définir sa présence (jeu) par les caractéristiques dans les accolades
    game: { // On définit le jeu tel que :
        name: `le serveur | ${prefix}help`, // Nom du jeu
        type: "Watching", // Type de jeu (ici ça sera regarde ...)
    }
});
});


bot.on('message', async (message) => { //On cherche à identifier chaque messages vus par le bot
    const args = message.content.slice(prefix.length).trim().split(' '); // Création d'une variable, qui cherche l'argument après le préfix
    const cmd = args.shift().toLowerCase();
  
    if (message.author.bot) return; // On interdit les bots d'utiliser les commandes
    if (!message.content.startsWith(prefix)) return; // Et si la commande ne commence pas par le préfix on ne fait rien
  
    /// Command Handler ///
     try {     
        ///Auto-Reload ///
        delete require.cache[require.resolve(`./commandes/${cmd}.js`)]; 
  
        let commandFile = require(`./commandes/${cmd}.js`); // On cherche dans le dossier "commandes" la commande en question
        commandFile.run(bot, message, args);
  
     } catch (e) {
         console.log(e.stack); // Ne touchez pas à ca, on utilise la console
     }
      })
