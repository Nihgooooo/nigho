
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: false})

bot.on("ready", async() => {
    console.log(`Bot is ready! ${bot.user.username}`);

    try {
        let link = await bot.generateInvite(["ADMINSTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e.stack);
    }
    bot.user.setPresence({ game: { name: '!helpcmds for help', type: 0 } });
});
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;
    
    });
bot.login('NiqzvMtc9RHYP2P335RIS0_nFHl4fEsP')