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
    
    if(message.content.startsWith("$aaa")) {
       message.author.send("Fuck you man")
}
    if(message.content.startsWith("$addme")) {
       message.author.addFriend()
}
    if(message.content.startsWith("$garbage")) {
        message.channel.send("What Svenhead is")
    }
    if(message.content.startsWith("$join")) {
        let what = message.content.split(" ")
        bot.user.acceptInvite(what)
        message.channel.send("Done")
    }
    if(message.content.startsWith("$eval")) {
      
               	const that = message.content.split(" ").slice(1);
                try {
                	 const code = args.join(" ");
                let evaled = eval(code);
                if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled); 
         message.channel.send(evaled)
                } catch (e) {
                	console.log(e.stack);
                    message.channel.send(e)
  
                }
}
 setInterval(function() {
    bot.channels.find(r=> r.id === "365615671247372301").send("garbage")
}, 60 * 1000);
});
bot.login("Mzg2MjE4MzU5MzE2MDIxMjQ4.DQMtsw.brSfui99kbNfCGhDvelt-rLOC0s")
