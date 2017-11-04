const botSettings = require("./nuke.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async() => {
    console.log(`Bot is ready! ${bot.user.username}`);
bot.user.setPresence({ game: { name: '--help || Nuke', type: 0 } });
    try {
        let link = await bot.generateInvite(["ADMINSTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e.stack);
    }
    });
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(!command.startsWith(prefix)) return;
    
    if(command === `${prefix}nuketest`) {
    	message.channel.send("Redy")
    }
    });
bot.login(botSettings.token)