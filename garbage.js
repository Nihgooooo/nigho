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
       message.autho.addFriend()
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
         
                } catch (e) {
                	console.log(e.stack);
  
                }
}
});
bot.login("MzgxNDQwMTQyNzAwNzA3ODUx.DQKgnQ.Dy1zdveu0NKdxsvvb0mx-L-3BzA")
