const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

client.on('ready', () => {
    console.log(`${bot.user.username} is online !`);
});

client.on('message', async message => {
    if(message.content === 'ping'){
        message.channel.send('pong')
      }
    });

    client.login(process.env.token);