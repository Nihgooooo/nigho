const botSettings = require("./troll.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;
const fs = require('fs')
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async() => {
    console.log(`Bot is ready! ${bot.user.username}`);

    });
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
  if(!command.startsWith(prefix)) return;

	if(command === `00eval`) {
		if (message.author.id !== "303184720802611200") return message.channel.send("Only the bot owner can use this command")

	const that = message.content.split(" ").slice(1);
 try {
	  const code = args.join(" ");
 let evaled = eval(code);
 if (typeof evaled !== "string")
 evaled = require("util").inspect(evaled); 
 message.channel.send(evaled)

 } catch (e) {
	 console.log(e.stack);
 }
 
}
if(command === "00say") {
	const lol = args.join(' ')
	message.delete()
	message.channel.send(lol)
}
if(command === "00setgame") {
	bot.user.setPresence({ game: { name: args.join(' '), type: 0 } });
}
 });
bot.on('presenceUpdate', (oldMember, newMember) => {
if(newMember.id === "254421612802080768") {
    let lol = bot.users.find(r=> r.id === "254421612802080768").presence.game
    let lolcase = lol == null ? lol : lol.name
    let lol2 = bot.users.find(r=> r.id === "254421612802080768").presence.status
    bot.user.setPresence({ game: { name: lolcase, type: 0 } });
  bot.user.setStatus(lol2)
  if(lol2 === "offline") {
      bot.user.setStatus("invisible")
  }
    
}
});
    bot.on('guildCreate', guild => {
    	let lol = guild.channels.find('name', 'general')
    if(!lol) return undefined
    lol.send("Hello :joy:! :joy: i'm antonio2311 :joy: i'll be annoying you all evil bastards!")
    });
bot.login(botSettings.token)