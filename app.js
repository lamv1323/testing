const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();
const prefix ="!";


bot.on('ready', () => {
  console.log(`成功登入 ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === (prefix+'單抽')) {

        number =30;

        imageNo= Math.floor(Math.random()*(number-1+1))+1;

        msg.channel.send({files:["./img/"+imageNo+".png"]})
        }


});

bot.login(config.token);
