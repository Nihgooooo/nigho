const botSettings = require("./botSettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone: false})

bot.on("ready", async() => {
    console.log(`Bot is ready! ${bot.user.username}`);
});
bot.login("Mzg2MDYzMzEwMDEwNzEyMDc1.DQKd0A.n3xydn3vXDM3hP0EvMAq3BFtqtw")
