Discord = require('discord.js')

exports.run = (bot, message, args) => {
                message.channel.send("Message à édité")
                .then((msg) => {
                    msg.edit("Message édité")
                    message.react("✅")
                });
            }