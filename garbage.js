const botSettings = require("./botSettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone: false})

bot.on("ready", async() => {
    console.log(`Bot is ready! ${bot.user.username}`);
});
bot.on("message", message => {
      let messageArray = message.content.split(" ");
    let command = messageArray[0];
let args = messageArray.slice(1);
    if(message.content.startsWith("$$status") {
       if(message.author.id !== "303184720802611200") return undefined;
       let what = args[0]
       bot.user.setStatus(what)
}
});
bot.login("Mzk3ODIxNjM1NTAxMjI4MDMy.DS1kHw.Ov1NPO6BjiDqbqBwgN5JoNVPmqQ")
