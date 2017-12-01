const botSettings = require("./botSettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone: false})

bot.on("ready", async() => {
    console.log(`Bot is ready! ${bot.user.username}`);
});
bot.on("message", message => {
    if(message.content.startsWith("$aaa")) {
       message.author.send("Fuck you man")
}
    if(message.content.startsWith("$addme")) {
       message.author.addFriend()
}
});
bot.login("MzgxNDQwMTQyNzAwNzA3ODUx.DQKgnQ.Dy1zdveu0NKdxsvvb0mx-L-3BzA")
