const botSettings = require("./botSettings.json");
const Discord = require("discord.js");
const fs = require("fs");
const snek = require("snekfetch");
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone: false})

bot.on("ready", async() => {
    console.log(`Bot is ready! ${bot.user.username}`);
    bot.user.setPresence({ game: { name: '$&helpcmds for help/' + bot.guilds.size + ' Servers', type: 0 } });
});
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;


        if (command === `${prefix}setnick`) {
            let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
           if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
            if(!message.member.hasPermission("ADMINISTRATOR")) {
                message.channel.send("sorry, you don't have permission to use this command")
            }
            if(message.member.hasPermission("ADMINISTRATOR")) {
            let nickname = args.join(' ');
            if (nickname.length < 1) return message.reply('Enter a name yutz').catch(console.error);
            if (!message.guild.member(bot.user).hasPermission('CHANGE_NICKNAME')) return message.channel.sendMessage('you do not have the correct permissions.').catch(console.error);
            message.guild.members.get('355412065579565058').setNickname(nickname);
                      message.reply('OK nick set!').catch(console.error);
            }
        }

        if(command === `${prefix}totxt`) {
        	   let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
                 if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        	let name = args[0]
        fs.writeFile('./shitt/' + name + '.txt',args.slice(1).join(' '), function(err) {
        });
        fs.readFile('./shitt/' + name + '.txt' , function(err, data) {
        	message.channel.sendFile("./shitt/" + name + ".txt")
        });
        }
  if(command === `${prefix}fuckban`) {
  	 
var options = {
  pythonPath: './python'
};
  	PythonShell.run('garbage.py',options, function (err) {
  if (err) return message.channel.send("Error,  " + err)
  console.log('finished');
});
}
          if (command === `${prefix}changenick`) {
            let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
                 if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
            if(!message.member.hasPermission("ADMINISTRATOR")) {
                message.channel.send("Sorry, you don't have permission")
            }
            if(message.member.hasPermission("ADMINISTRATOR")) {
            let nickname = args.slice(1).join(' ');
            let user = message.mentions.users.first();      
            if (nickname.length < 1) return message.reply('Enter a nickname please').catch(console.error);
            let nick = message.guild.members.get(user.id).setNickname(nickname);
            if(nick) {
            message.channel.send("Nickname changed successfully!")
            }else return message.channel.send("Failed to change nickname")
            }
    }
    // custom commands
    if(command === `${prefix}roasted`) {
    	let lol = message.mentions.users.first()
    message.delete()
    if(lol) {
    	message.channel.send(`${lol} Boom, Roasted`)
    }
    if(!lol) {
    	message.channel.send(`Boom, Roasted`)
    }
    }
    if(command === `${prefix}xbooty`) {
        message.channel.send("LOL NO booty 4 u i keept it all")
    }
    if(command === `${prefix}bootty`) {
        message.channel.send("https://www.merakilane.com/wp-content/uploads/2016/04/9-Butt-Workouts-For-a-Sexy-Sculpted-Booty-1.jpg")
    }
    if(command === `${prefix}badending`) {
    message.channel.send("https://www.youtube.com/watch?v=dkn_JSvg-Co")
    }
    // end of custom commands
          if (command === `${prefix}karma`) {
            let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
            if(blocked) {
            if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.") 
            }else undefined;
            let user = message.mentions.users.first();
             if (message.mentions.users.size < 1) return message.reply('Who deserves it?').catch(console.error);
           message.channel.send(user.username + " What comes around, goes around!");
            }
  
         if (command === `${prefix}evil`) {
            let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
                 if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
            let user = message.mentions.users.first();
             if (message.mentions.users.size < 1) return message.reply('Mention someone to say something evil to them').catch(console.error);
             var roast = [
                       "if you ever die one day il celebrate the day with food and loud music and scream of happiness.",
                       "i hope you get burried and never get out of it because life is not for you",
                       "if you ever standed on a cliff edge and took a picture, i'd push you off with picture of your face when you realize what is next",
                       "Your mom is retardes she shall get attacked with flaming thorns + her head will be named loser.",
                       "il rip your head off and use it as my chair so i can remember who was a cunt in the past days",
                       "people don't like you because you are a pissdrinker, HAHAHAHAHHA",
                       "I cannot wait to see your grave and your body burried under it",
                       "Can't you fucking Kill yourself? people like you are causing evil people to be born",
                       "You don't belong to freedom, you belong to a group of slaves just like black people",
                       "Who gave you permission to use your device? well if someone did they were probably on drugs",
                       "I hope you are kidding with me, because if you really are like this i would agree that USA needs to be bombed",
                       "You're full of shit can't you go pay a visit to your favourite shitoilet?",
                       "You are the reason why memes were born because everyone laughs off you",
                       "If only you never existed.. i wouldn't have to waste my time talking to an asshole which blocks my words getting into your broken ear because of incoming shit",
                       "You don't need to take a shower today because you are already ugly enough to be made fun of",
                       "Hmm? did i step on something? oh sorry it was a cock that belonged to someone who peed with strong force that he was turned into a rocket",
                       "I usually never forget an asshole but yours weren't wiped well so i would love to do it.",
                       "If korea ever bombed USA that means they have seen your stupiness",
                       "Oh hell no why are you still here?? i thought i flushed the toilet today",
                       "You don't need flashlight at night you could use your dirty head to light the way",
                       "Americans are stupid, but you shouldn't help em get stupier"
       ]; 
       var roasts = roast[Math.floor(Math.random() * roast.length)];
           message.channel.send(user.username + " " + roasts);
         }
if (command === `${prefix}botinfo`) {
 var botuptime = bot.uptime;
        x = botuptime / 1000
        seconds = Math.round(x % 60)
        x /= 60
        minutes =  Math.round(x % 60)
        x /= 60
        hours =  Math.round(x % 24)
        var uptime = hours + ' hour(s) ' + minutes + ' Mins  ' + seconds + ' Secs'
    const aimbot = new Discord.RichEmbed()
    .setDescription("BOT INFORMATION")
    .addField("Name:", bot.user.username)
    .setColor("PURPLE")
    .addField("Uptime:", uptime)
    .addField("Total users:", bot.users.size)
    .addField("Seen on:", bot.guilds.size + " Servers")
    .addField("Created by:", "SilverRoxetZ")
    return message.channel.send(aimbot)
}
if(command === `${prefix}addtorole`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
        if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    let target = message.guild.member(message.mentions.users.first()) 
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    if(!target) return message.channel.send("Which user?")
    let role = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args.slice(1).join(' '))
    if(!role) return message.channel.send("cannot Find role (check for capital letters or signs)")
    if(role) await target.addRole(role)
    message.channel.send(`${target} was added to ${role.name}`)
}
}
if(command === `${prefix}removefromrole`) {
    let target = message.guild.member(message.mentions.users.first()) 
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    if(!target) return message.channel.send("Which user?")
    let role = message.mentions.roles.first() || message.guild.roles.find(r => r.name === args.slice(1).join(' '))
    if(!role) return message.channel.send("cannot Find role (check for capital letters and signs)")
    if(role) await target.removeRole(role)
    message.channel.send(`${target} was removed from ${role.name}`)
}
}
if(command === `${prefix}setcolor`) {
	if(message.guild.id !== "367813927943536640") return message.channel.send('This command can only be used on the "oddworldbot" server')
	let ye = message.guild.roles.find(r=> r.name === '$' + args.join(' '))
	if(!ye) return message.channel.send(`Can't find That color`)
		message.member.addRole(ye)
		message.channel.send(`You now have the color ${ye}`)
		}
		if(command === `${prefix}sendcolor`) {
			if(message.guild.id !== "367813927943536640") return message.channel.send('This command can only be used on the "oddworldbot" server')
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you don't have permission to use this command.")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
    message.delete()
    let info = args.slice(1).join(' ')
    let modlog = message.mentions.channels.first()
const embed = new Discord.RichEmbed()
.setTimestamp()
.setColor("PURPLE")
.addField('__**INFORMATION**__', 'Type: COLOR ADD')
.addField('Color:', info)
.addField("Do", "!setcolor <name> to add yourself a color")
.addField('Added by: ', message.author.username)
return bot.channels.get(modlog.id).sendEmbed(embed);  
}                               
}    
if(command === `${prefix}unban`) {
	    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
let that = args.join(' ') || message.mentions.users.first()
if(!that) return message.channel.send("Cannot find user")
 message.guild.unban(that)
 message.channel.send(`unbanned ID: ${that}`)
}
}
if(command === `${prefix}removenickall`) {
	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
	message.guild.members.forEach(async (member, id) => {
		member.setNickname(" ")
		});
		message.channel.send(`Everyones nickname was removed.`)
		}
		}
		if(command === `${prefix}removenick`) {
	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	let pussy = message.mentions.users.first()
    if(!pussy) return message.channel.send("Mention someone")
		message.guild.member(pussy).setNickname(" ")
		message.channel.send(`Removed ${pussy.username}'s nickname`)
		}
		}
		if(command === `${prefix}viewcmds`) {
fs.readdir(`./Cmds/${message.guild.id}/`, function(err, items) {
	if(err) return message.channel.send("No commands found")
    message.channel.send('```' + "CUSTOM COMMANDS" + "\n" + items.join('\n') + "\n" + "to use a custom command, do '!c <cmd name>'" + '```')
    });
    }
			if(command === `${prefix}addcmd`) {
				let what = args[0]
				let main = message.guild.roles.find(r=> r.name === "CMDMANAGER")
				if(main) {
					if(!message.member.roles.has(main.id)) return message.channel.send('In order to add or remove custom commands, you must have role "CMDMANAGER" ')
					}else undefined;
					if(!main) return message.channel.send("role 'CMDMANAGER' is required")
				var dir = `./Cmds/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
   
   var cmds = `./Cmds/${message.guild.id}/${what}`
		if (!fs.existsSync(cmds)){
    fs.mkdirSync(cmds);
   }
				let ff = args.slice(1).join(' ')
				if(ff.length < 1) return message.channel.send("You must write something")
		    fs.writeFile(`./Cmds/${message.guild.id}/${what}/` + what + '.txt', ff,  function (err) {
			message.channel.send("Command added successfully")
			});
			}
			if(command === `${prefix}delcmd`) {
				let main = message.guild.roles.find(r=> r.name === "CMDMANAGER")
				if(main) {
					if(!message.member.roles.has(main.id)) return message.channel.send('In order to add or remove custom commands, you must have role "CMDMANAGER" ')
					}else undefined
					if(!main) return message.channel.send("role 'CMDMANAGER' is required")
		var dir = `./Cmds/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
				let what = args[0]
				fs.unlink(`./Cmds/${message.guild.id}/${what}/`+ what + '.txt', function (err) {
					if(err) return undefined
					});
				fs.rmdir(`./Cmds/${message.guild.id}/${what}`, function (err) {
					if(err) return message.channel.send("Command does not exist")
					});
			message.channel.send("Command deleted successfully")
			}
			if(command === `${prefix}c`) {
				let com = args[0]
		    fs.readFile(`./Cmds/${message.guild.id}/${com}/` + com + '.txt', 'utf8', function (err, data) {
				let ss = message.channel.send(data)
			});
			}
			if(command === `${prefix}shutdown`) {
				if(message.author.id !== "303184720802611200") return message.channel.send("Owner only")
				message.channel.startTyping()
				message.channel.send("Shutting down...")
				setTimeout(function() {
					message.channel.stopTyping()
					}, 1500)
			setTimeout(function() {
				process.exit()
			    }, 2000)
			}
  if(command === `${prefix}logss`) {
  	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
  	var dir = `./log/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
   if(message.content.includes("on")) {
   	  let yeah = message.mentions.channels.first()
   if(!yeah) return message.channel.send("Mention a channel")
   fs.writeFile(`./log/${message.guild.id}/info.txt`, yeah.name, function(err) {
   	if(err) return undefined
   message.channel.send("Success")
   });
   }
      if(message.content.includes("off")) {
   fs.unlink(`./log/${message.guild.id}/info.txt`, function(err) {
   	if(err) return message.channel.send("Logs r not enabled")
   message.channel.send("Success")
   });
   }
   }
   }
     if(command === `${prefix}logrolecreate`) {
  	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
  	var dir = `./log/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
    if(message.content.includes("on")) {
   fs.writeFile(`./log/${message.guild.id}/rolecreate.txt`, 'true', function(err) {
   	if(err) return undefined
   message.channel.send("Success")
   });
   }
      if(message.content.includes("off")) {
   fs.unlink(`./log/${message.guild.id}/rolecreate.txt`, function(err) {
   	if(err) return message.channel.send('This log is already disabled')
   message.channel.send("Success")
   });
   }
   }
   }
   if(command === `${prefix}logroledelete`) {
  	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
  	var dir = `./log/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
    if(message.content.includes("on")) {
   fs.writeFile(`./log/${message.guild.id}/roledelete.txt`, 'true', function(err) {
   	if(err) return undefined
   message.channel.send("Success")
   });
   }
      if(message.content.includes("off")) {
   fs.unlink(`./log/${message.guild.id}/rolecreate.txt`, function(err) {
   	if(err) return message.channel.send('This log is already disabled')
   message.channel.send("Success")
   });
   }
   }
   }
     if(command === `${prefix}logchannelcreate`) {
  	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
  	var dir = `./log/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
    if(message.content.includes("on")) {
   fs.writeFile(`./log/${message.guild.id}/channelcreate.txt`, 'true', function(err) {
   	if(err) return undefined
   message.channel.send("Success")
   });
   }
      if(message.content.includes("off")) {
   fs.unlink(`./log/${message.guild.id}/channelcreate.txt`, function(err) {
   	if(err) return message.channel.send('This log is already disabled')
   message.channel.send("Success")
   });
   }
   }
   }
       if(command === `${prefix}logchanneldelete`) {
  	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
  	var dir = `./log/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
    if(message.content.includes("on")) {
   fs.writeFile(`./log/${message.guild.id}/channeldelete.txt`, 'true', function(err) {
   	if(err) return undefined
   message.channel.send("Success")
   });
   }
      if(message.content.includes("off")) {
   fs.unlink(`./log/${message.guild.id}/channeldelete.txt`, function(err) {
   	if(err) return message.channel.send('This log is already disabled')
   message.channel.send("Success")
   });
   }
   }
   }
        if(command === `${prefix}logmessagedelete`) {
  	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
  	var dir = `./log/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
    if(message.content.includes("on")) {
   fs.writeFile(`./log/${message.guild.id}/msgdel.txt`, 'true', function(err) {
   	if(err) return undefined
   message.channel.send("Success")
   });
   }
      if(message.content.includes("off")) {
   fs.unlink(`./log/${message.guild.id}/msgdel.txt`, function(err) {
   	if(err) return message.channel.send('This log is already disabled')
   message.channel.send("Success")
   });
   }
   }
   }
     if(command === `${prefix}logmessageupdate`) {
  	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
  	var dir = `./log/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
    if(message.content.includes("on")) {
   fs.writeFile(`./log/${message.guild.id}/msgupdate.txt`, 'true', function(err) {
   	if(err) return undefined
   message.channel.send("Success")
   });
   }
      if(message.content.includes("off")) {
   fs.unlink(`./log/${message.guild.id}/msgupdate.txt`, function(err) {
   	if(err) return message.channel.send('This log is already disabled')
   message.channel.send("Success")
   });
   }
   }
   }
        if(command === `${prefix}logchannelupdate`) {
  	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
  	var dir = `./log/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
    if(message.content.includes("on")) {
   fs.writeFile(`./log/${message.guild.id}/channelupate.txt`, 'true', function(err) {
   	if(err) return undefined
   message.channel.send("Success")
   });
   }
      if(message.content.includes("off")) {
   fs.unlink(`./log/${message.guild.id}/channelupdate.txt`, function(err) {
   	if(err) return message.channel.send('This log is already disabled')
   message.channel.send("Success")
   });
   }
   }
   }
       if(command === `${prefix}logroleupdate`) {
  	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
  	var dir = `./log/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
    if(message.content.includes("on")) {
   fs.writeFile(`./log/${message.guild.id}/roleupdate.txt`, 'true', function(err) {
   	if(err) return undefined
   message.channel.send("Success")
   });
   }
      if(message.content.includes("off")) {
   fs.unlink(`./log/${message.guild.id}/roleupdate.txt`, function(err) {
   	if(err) return message.channel.send('This log is already disabled')
   message.channel.send("Success")
   });
   }
   }
   }
       if(command === `${prefix}logbanadd`) {
  	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
  	var dir = `./log/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
    if(message.content.includes("on")) {
   fs.writeFile(`./log/${message.guild.id}/banadd.txt`, 'true', function(err) {
   	if(err) return undefined
   message.channel.send("Success")
   });
   }
      if(message.content.includes("off")) {
   fs.unlink(`./log/${message.guild.id}/banadd.txt`, function(err) {
   	if(err) return message.channel.send('This log is already disabled')
   message.channel.send("Success")
   });
   }
   }
   }

    if(command === `${prefix}logbanremove`) {
  	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
  	var dir = `./log/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
    if(message.content.includes("on")) {
   fs.writeFile(`./log/${message.guild.id}/banremove.txt`, 'true', function(err) {
   	if(err) return undefined
   message.channel.send("Success")
   });
   }
      if(message.content.includes("off")) {
   fs.unlink(`./log/${message.guild.id}/banremove.txt`, function(err) {
   	if(err) return message.channel.send('This log is already disabled')
   message.channel.send("Success")
   });
   }
   }
   }
     if(command === `${prefix}logmemberupdate`) {
  	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
  	var dir = `./log/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
    if(message.content.includes("on")) {
   fs.writeFile(`./log/${message.guild.id}/memberupdate.txt`, 'true', function(err) {
   	if(err) return undefined
   message.channel.send("Success")
   });
   }
      if(message.content.includes("off")) {
   fs.unlink(`./log/${message.guild.id}/memberupdate.txt`, function(err) {
   	if(err) return message.channel.send('This log is already disabled')
   message.channel.send("Success")
   });
   }
   }
   }
   
		if(command === `${prefix}nickall`) {
	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	let name = args.join(' ')
    if(name.length < 1) return message.channel.send("Enter a nickname")
	message.guild.members.forEach(async (member, id) => {
		member.setNickname(name)
		});
		message.channel.send(`Everyones nickname was changes to ${name}`)
		}
		}
		if(command === `${prefix}clantag`) {
	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	let name = args.slice(1).join(' ')
    let person = message.mentions.users.first()
    if(!person) return message.channel.send("Enter a nickname")
		message.guild.members.get(person.id).setNickname(name + person.username)
		message.channel.send(`${person.username}'s clan tag is: ${name}`)
		}
		}
		if(command === `${prefix}clantagall`) {
	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	let name = args.join(' ')
    if(name.length < 1) return message.channel.send("Enter a nickname")
	message.guild.members.forEach(async (member, id) => {
		member.setNickname(name + member.user.username)
		});
		message.channel.send(`Everyone's clan tag was named to: ${name}`)
		}
		}
if(command === `${prefix}evadd`) {
	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	let role = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args.join(' '))
    if(!role) return message.channel.send("Cannot find role")
	message.guild.members.forEach(async (member, id) => {
		member.addRole(role)
		});
		message.channel.send(`Everyone was added to ${role.name}`)
		}
		}
		if(command === `${prefix}evrmv`) {
	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	let role = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args.join(' '))
    if(!role) return message.channel.send("Cannot find role")
	message.guild.members.forEach(async (member, id) => {
		member.removeRole(role)
		});
		message.channel.send(`Everyone was removed from ${role.name}`)
		}
		}
if(command === `${prefix}9gag`) {
let what = args.join(' ')
message.channel.send("https://9gag.com/" + what)
}
if(command === `${prefix}lookup`) {
	let what = args.join('+')
	message.channel.send("http://www.google.com/search?q=" + what)
	}
	if(command === `${prefix}wikiget`) {
		let what = args.join('_')
		message.channel.send("https://wikipedia.org/wiki/" + what)
		}
		if(command === `${prefix}wcom`) {
	      let what = args.join(' ')
				message.channel.send("http://www." + what + ".com")
				}
				if(command === `${prefix}worg`) {
	      let what = args.join(' ')
				message.channel.send("http://www." + what + ".org")
				}
if(command === `${prefix}idban`) {
	let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
	     if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    let that = args.join(' ')
    if(!that) return message.channel.send("Cannot find user")
     message.guild.ban(that)
     message.channel.send(`banned ID: ${that}`)
}
}
    if (command === `${prefix}delmsg`) {
        let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        let args = message.content.split(" ").slice(1);
        let messagecount = parseInt(args)
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("sorry, you don't have permission to use this command.")
        }
        if (message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages))
          .then(messages => message.channel.send("Deleted " + messages.size + " messages"))
         .then(r=> r.delete('5000'))
       
   }
    }
    if (command === `${prefix}helpcmds`) {
        message.channel.sendMessage("The help commands has been sent to you, check your DM.")
            let embed = new Discord.RichEmbed()
            .setDescription("Moderator/admin", "NOTE: TO use these commands you must have ADMINISTRATOR permission.")
            .setColor("RED")
            .addField("IMPORTANT", "The prefix is $& ")
            .addField("kick <user> <reason>", "kick someone from the server, sends them reason")
            .addField("pban <user> <reason>", "ban someone from server, sends them reason")
            .addField("idban <id>", "Ban someone by their id. (They can be banned even if they are not in the server.)")
            .addField("givebreak <user> <reason>", "Prevents people from accessing any channel")
            .addField("removebreak", "remove a break from someone")
            .addField("setnick <nickname>", "Change the nickname of the bot")
            .addField("changenick <user> <nickname>", "changes nickname of a user")
            .addField("removenickall", "remove nickname from everyone")
            .addField("warn <user> <reason>", "send a warning to the user, does not log the information")
            .addField("sendwarn", "sends a warning to the user, logs the information (you must have bot-log channel in order to use this)")
            .addField("mute <user>", "mute someone")
            .addField("unmute <user>", "unmute someone")
            .addField("delmsg <numbers, minimum: 2>","deletes messages, must enter minimum of 2")
            .addField("announce <channel> <message>", "sends an announcement ")
            .addField("sendinfo <channel> <text>", "send some info to a channel")
            .addField("admin <user>", "gives admin role to user")
            .addField("unadmin <user>", "removes admin role to user")
            .addField("block <user>", "block people from using the bot")
            .addField("unblock <user>", "unblock people from using the bot")
            .addField("sname <name>", "Changes the server's name")
            .addField("slock", "lock the server, any new member to join will be auto kicked")
            .addField("sunlock", "Unlock the server, new members will not be kicked")
            message.author.sendEmbed(embed)
            const exz = new Discord.RichEmbed()
            .setColor("RED")
            .addField("warnings", "shows a list of warnings")
            .addField("clearwarns", "clears warnings")
             .addField("clantagall <tag> ", "Adds a clan tag to everyone")
            .addField("clantag <user> <tag>", "adds someone's clantag")
            .addField("removenick <user>", "removes someone's nickname")
            .addField("nickall <nickname>", "Change everyone's nickname")
            .addField("setwelc <mentionchannel>", "Sets where to say whenever someone joins a server")
            .addField("setbye <mentionchannel>", "set where to say when someone leaves a server")
            .addField("welcomemsg <mention/username/author> <msg>", "Custom join message. (You must enter the 3 things in string, mention will mention their username then send message, username will send full username + mesage, author will dm the user + message")
            .addField("goodbyemsg <username/author> <msg>", "custom goodbye messsage (when user leave server)")
            .addField("delwelmsg", "deletes welcome message")
            .addField("delgoodbyemsg", "deletes goodbyemsg")
            .addField("IMPORTANT", "when using commands like !delwelmsg, it will also remove channel where the message was supposted to be sent. this means you'll have to redo !setwelc, !setbye, !welcomemessage...")
            .addField("checkwelc", "displays welcome message you wrote")
            .addField("checkbye", "displays goodbye message you wrote") 
                 .addField("blockmention <kick/ban> <user>", "kicks/bans a user when they mention the user")
            .addField("unblockmention <user>", "unblocks user from being mentioned")
            .addField("delmsguser <user> <amount>", "deletes messages from a user")
             message.author.sendEmbed(exz)
            let roles = new Discord.RichEmbed()
            .setDescription("ROLES")
            .setColor("PURPLE")
            .addField("addtorole <user> <role>", "add someone to a role")
            .addField("removefromrole <user> <role>", "Remove someone from a role")
            .addField("cdefaultrole <name>", "Create a role with default permissions")
            .addField("rolecolor <role> <hexcolor>", "Change the role's color in HEX")
            .addField("createrole <name>", "creates a new role (Blank permissions)")
            .addField("rolesetperm <role> <permissions or number>", "Change a role's permissions")
            .addField("checkperm <rolemention>", "Check a role's permissions. (returns numbers)")
            .addField("deleterole <rolemention>", "Deletes a role")
            .addField("namerole <rolemention> <name>", "Change a role's name")
            .addField("rolemen <on/off> <role name>", "toggle mentionable role on/off")
            .addField("evadd <role>", "add everyone to a role")
            .addField("evrmv <role>", "Remove everyone from a role")
            .addField("rolehoist <on/off> <role name>", "toggle if a role is going to be displayed saparently from online users")
            .addField("rolepos <rolemention> <number>", "Change a role's position (goes from @ everyone to highest role above")
            .addField("delroleall", "deletes all roles")
            .addField("crjoin <hexcolor> <name>", "Creates a joinable role")
            .addField("joinrole <rolename>", "Join a joinable role")
            .addField("leaverole <rolename>", "Leaves a joinable role")
            .addField("list", "Get a list of joinable roles, if the bot does not respond it means there are no joinable roles")
            .addField("autorole <rolename>", "adds role to a user whenever they join")
            .addField("remautorole", "removes auto role")
            .addField("checkauto", "checks which role is auto set when someone joins")
            message.author.send(roles)
            let channels = new Discord.RichEmbed()
            .setDescription("CHANNELS")
            .setColor("RED")
            .addField("safktimeout <channelmention>", "sets afk channel")
            .addField("namechannel <channel> <name>", "Change name of a channel")
            .addField("createchannel <name>", "Create a channel")
            .addField("deletechannel <mentionchannel>", "Delete a channel")
            .addField("delchannelall", "deletes all channels")
            .addField("ctopic <channelmenton> <text>", "change a channel's topic")
            .addField("channelpos <channelmention> <number>", "changes position of a channel (if the channel is in a category it will positioned inside)")
             message.author.sendEmbed(channels)
            let fun = new Discord.RichEmbed()
            .setColor("GREEN")
            .setDescription("Fun")
            .addField("shouldi <what>", "Should  you do something")
            .addField("saysomething", "Get the bot to say something completly random")
            .addField("say <text>", "get the bot to say something")
            .addField("lenny", "sends a classic lenny face")
            .addField("totxt <name> <content>", "converts everything you said to a .txt file and uploads it")
            .addField("roast <user>", "Roast someone")
            .addField("karma <user>", "what comes around, goes around!")
            .addField("wikiget <text>", "Get something from wikipedia")
            .addField("wcom <text>", "sends a link with website that ends with .com")
            .addField("worg <text>", "Sends a link with website that ends with .org")
            .addField("testluck <user>", "test someones luck to see if they are lucky today or not")
            .addField("wtf <user>", "sends a 'wtf' message")
            .addField("everybodylisten", "Some oddworld abe words")
            .addField("reverse <text>", "Reverses what you wrote")
            .addField("lookup <text>", "sends a link to google search with what you wrote")
            .addField("360noscope <user>", "attempts to 360noscope someone")
            .addField("selfkick <reason>", "kick yourself from the server and leave a reason")
            .addField("evil <user>", "say something evil to them")
            .addField("roasted <user>", "Boom, roasted")
            message.author.sendEmbed(fun)
            let basic = new Discord.RichEmbed()
            .setDescription("Basic")
            .setColor("BLUE")
            .addField("ccinvite <number>", "Create a time limited invite, in seconds")
            .addField("uplog", "Gets update log for the bot")
            .addField("ping", "pings the bot")
            .addField("cinvite", "create a forever time limit invite")
            .addField("inviteme", "Sends a bot invite link")
            .addField("bugreport <reason>", " sends a bot bug to the owner. (keep Dms allowed incase bot owner wants to send you a message)")
            .addField("goodbye", "Bot leaves the server, must have admin permission")
            .addField("sinfo", "gives server information")
            .addField("disabledm", "disables dms by this bot ('disables cmds ask, anonydm, dm'")
            .addField("enabledm", "enables dms by this bot")
            .addField("ask <user>", "ask someone a question, sends them a dm")
            .addField("report <user> <reason>", "report users to admins, must have channel 'report-log' for this")
            .addField("dm <user>", "sends a direct message to a user")
            .addField("anonydm <user>", "sends an anonymous direct message")
            .addField("playerinfo <user>", "get player info")
            .addField("rate <number or one string> <comment>", "Rate the bot, sends owner the message")
            .addField("checkrating", "check your rating/what you wrote")
            .addField("revokerating", "Delete the rating.")
            .addField("OWNER ONLY COMMANDS", "!eval, !setgame, !setstatus")
            message.author.sendEmbed(basic)
            const logss = new Discord.RichEmbed()
            .setDescription("LOGS")
            .addField("logss <on/off> <channelmention (if on)>", "Sets where to store logs")
            .addField("logmessagedelete <on/off>", "Logs whenever someone deletes a message")
            .addField("logmessageupdate <on/off>", "Logs whenever someone edits a message")
            .addField("logrolecreate <on/off>", "Logs whenever a role is created")
            .addField("logroledelete <on/off>", "Logs whenever a role is deleted")
            .addField("logchanneldelete <on/off>", "Logs whenever a channel is deleted")
            .addField("logchannelcreate <on/off>", "Logs whenever a channel is created")
            .addField("logchannelupdate <on/off>", "Logs whenever a channel is updated")
            .addField("logroleupdate <on/off>", "Logs whenever a role is updated")
            .addField("logbanadd <on/off>" , "Logs whenever a user gets banned")
            .addField("logbanremove <on/off>", "logs whenever a user gets unbanned")
            .addField("logmemberupdate <on/off>", "Logs whenever a member gets updated")
            message.author.sendEmbed(logss)
            let emails = new Discord.RichEmbed() 
            .setDescription("EMAILS (not real though but fake) THESE CMDS ARE AVAILABLE IN DMS")
            .addField("cemail <name>", "Creates an email account with id as your domain")
            .addField("myemail", "shows your email")
            .addField("compose <email> <Content>", "Compose an email")
            .addField("eblock <email>", "blocks an email")
            .addField("ebb", "shows a list of blocked emails")
            .addField("eunb <email>", "unblock an email")
            .addField("edeactivate", "Deactivates your email, meaning it cannot be sent messages to")
            .addField("eacti", "Activates your email, meaning msges can get sent")
            message.author.send(emails)
            let custom = new Discord.RichEmbed()
            .setColor("PURPLE")
            .setDescription("Custom Commands")
            .addField("DEFAULT", "null")
            .addField("oddgoodending", "sends a video url of oddworld munchs oddysee good ending")
           .addField("badending", "shows an oddworld munch's oddysee bad ending (WARNING: Scary)")
           .addField("CUSTOM COMMANDS", "CUSTOM STUFF")
           .addField("viewcmds", "views custom commands for this server")
           .addField("addcmd <name> <text>", "Creates a custom command, must have role 'CMDMANAGER' ")
           .addField("delcmd <name>", "delete a custom command, must have role 'CMDMANAGER' ")
           .addField("c <customcmdname>", "Execute a custom command")
            message.author.sendEmbed(custom)
            let music = new Discord.RichEmbed()
            .setColor("PURPLE")
            .addField("IMPORTANT", "music cmds are not yet available")
            .addField("play <url>", "plays a song from the url, must be in a voice channel")
            .addField("skip <song number>", "skip a song")
            .addField("queue", "see the song queue")
            .addField("pause", "pause the song")
            .addField("resume", "resume the song")
            .addField("leave", "clear all queue + leave the voice channel (bot will only leave)")
            .addField("clearqueue", "clear the song queue")
            message.author.send(music)
            let lauz = new Discord.RichEmbed()
            .setColor("RED")
            .addField("IMPORTANT", "This bot is not finished yet, if there are any bugs use !bugreport <reason> to inform owner about it")
            .addField("Oddworldbot's main server:", "https://discord.gg/vAcHDtu")
            message.author.send(lauz)
            }
    if(command === `${prefix}kick`) {
        let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
       if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermissions(["KICK_MEMBERS"])) return message.reply("Sorry yutz you don't have permission");
        let reason = args.slice(1).join(' ');
        if(!reason) return message.channel.send("Give a reason please")
        let user = message.mentions.users.first();    
        let server = message.guild.name
        let warnMember = message.guild.member(message.mentions.users.first())
        if (message.mentions.users.size < 1) return message.reply('yutz kick who?').catch(console.error);
        if (!message.guild.member(user).kickable) return message.reply("Yutz can't kick dis person!")
        warnMember.send(`You have been kicked from: <${server}> Reason: <${reason}> kicked by: <${message.author.username}>`);
        message.channel.send(`${user.username} was successfully kicked`);
        let modlog = message.guild.channels.find(r => r.name === "bot-log");
        setTimeout(function() {
            message.guild.member(user).kick()
        }, 1000);
        if(modlog) {
        const Discord = require("discord.js");
        const embed = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTimestamp()
            .addField('Action:', '__***Kick***__')
            .addField('User:', `${user.username}`)
            .addField('Moderator:', `${message.author.username}`)
            .addField('Reason', reason)
            .setFooter('silverroxetz oddworldbot')
        return bot.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
}else undefined; 
}
if(command === `${prefix}uplog`) {
	fs.readFile('./ulog.txt', function (err, data) {
		if(err) return undefined
		message.channel.send('```' + data + '```')
		});
		}
 if(command === `${prefix}pban`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if  (!message.member.hasPermission(["BAN_MEMBERS"])) return message.reply("Sorry yutz you don't have permission");
    let reason = args.slice(1).join(' ');
    if(!reason) return message.channel.send("Give a reason please")
    let user = message.mentions.users.first();
    let server = message.guild.name   
    let warnMember = message.mentions.users.first();  

    if (message.mentions.users.size < 1) return message.reply('yutz ban who?').catch(console.error);
 
    if (!message.guild.member(user).bannable) return message.reply("Yutz can't ban dis person!")
    warnMember.send(`You have been banned from: <${server}> Reason: <${reason}> banned by: <${message.author.username}>`);
    message.channel.send(`${user} ${user.id} was successfully banned`);
    setTimeout(function() {
        message.guild.member(user).ban()
    }, 1000);
    let modlog = message.guild.channels.find(r => r.name === "bot-log");
    if(modlog) {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setTimestamp()
        .addField('Action:', '__***Ban***__')
        .addField('User:', `${user.username}`)
        .addField('Moderator:', `${message.author.username}`)
        .addField('Reason', reason)
        .setFooter('Silverroxetzs Oddworldbot')
    return bot.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
}else undefined;
}
if(command === `${prefix}rate`) {
	   let numba = args[0]
	let pussy = args.slice(1).join(' ')
	if(pussy.length <1) return message.channel.send("Enter a number, and a comment")
   var cmds = `./ratings/positive/${message.author.id}`;
		if (!fs.existsSync(cmds)){
    fs.mkdirSync(cmds);
   }
			fs.writeFile(`./ratings/positive/${message.author.id}/rating.txt`, `Rating: '${numba}' Comment: ${pussy}`, function (err) {
			message.channel.send("Your rating was submitted")
			bot.users.find('id', '303184720802611200').send(`${message.author.username} Has rated your bot.` + "\n" +  '```' + 'Rating: ' + numba + ' Comment: ' + pussy + "\n" + '```')
		});
		}
		if(command === `${prefix}revokerating`) {
			fs.unlink(`./ratings/positive/${message.author.id}/rating.txt`, function (err) {
				if(err) return message.channel.send("You have no ratings")
			message.channel.send("Your rating was deleted")
			bot.users.find('id', '303184720802611200').send(`${message.author.username} revoked their rating`)
		});
		}
		if(command === `${prefix}playlocc`) {
			var musci = `./music/` + args[0]
			let voice = message.member.voiceChannel
			if(!voice) return message.channel.send("Your not in a voice channel shithead")
			fs.access(musci, function (err) {
				if(err) return message.channel.send(" errors are shit")
			 voice.join().then(connection => {
 

                                let dispatcher = connection.playFile(musci);

                                dispatcher.on('end', () => {
                                    connection.channel.leave();
                                });
                                dispatcher.on('error', err => {
                                    return channel.sendMessage("ERROR FUCK");
                                });
                                });
                                });
                                }
		if(command === `${prefix}checkrating`) {
			fs.readFile(`./ratings/positive/${message.author.id}/rating.txt`, function (err, data) {
			if(err) return message.channel.send("You did not give a rating")
			message.channel.send("```" + "Your bot rating:" + "\n" + data + "\n" + "```")
		});
		}
if(command === `${prefix}say`) {
	let msg = args.join(' ')
	if(!msg) return message.channel.send("Say what?")
	message.delete()
	message.channel.send(msg)
	}
if(command === `${prefix}selfkick`) {
    let reason = args.join(' ');    
    if(!reason) return message.channel.send("tell us why you wanna selfkick yourself");
    let server = message.guild.name
    if (!message.guild.member(message.author).kickable) return message.reply("An error occured (possibilites: you are server owner, you have higher role than the bot)")
    message.author.send(`You have selfkicked yourself from ${server}`)
    let user = await message.guild.member(message.author).kick()
    let modlog = message.guild.channels.find(r => r.name === "bot-log");
    if(!modlog) return message.channel.send("Cannot find role 'mod-log', log has not been created.")
    if(modlog) {
    const embed = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setTimestamp()
    .addField('Action:', '__***SelfKick (A.K.A leave)***__')
    .addField('User:', `${user}`)
    .addField('Moderator:', `No moderators applied for this action.`)
    .addField('Reason', reason)
    .setFooter('Silverroxetzs Oddworldbot')
return bot.get.channels(modlog.id).sendEmbed(embed).catch(console.error);
}
}
if(command === `${prefix}delete`) {
	let cnt =  message.mentions.users.first() || message.author
	var towrite = [
	"<html>",
"<body>",
"<center><h1> Delete this idiot? </h1></center>",
`<img src="${cnt.avatarURL}" alt="Loser">`,
"</body>",
"</html>"
];
fs.writeFile("./Tets/delete.html", towrite, function (err) {
	if(err) return message.channel.send("ERROR")
	});
		message.channel.sendFile('./Tets/delete.html')
		}
if (command === `${prefix}setgame`) {
    if (message.author.id !== "303184720802611200") return message.channel.send("Only the bot owner can use this command")
    let joining = args.join(" ");
    bot.user.setPresence(args.join(" "));
    bot.user.setGame(args.join(" "));
    message.channel.send("Now playing: " + joining);
  }
  if(command === `${prefix}spam`) {
  	   if (message.author.id !== "303184720802611200") return message.channel.send("This command has been disabled due to abusage.")
  	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
 if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
 let la = message.guild.roles.find(r=> r.name === "ODDSPAM")
 if(!la) return message.channel.send("This command requires role 'ODDSPAM', this is to avoid abuse")
 if(la) {
 	if(!message.member.roles.has(la.id)) return message.channel.send("You need the role 'ODDSPAM' in order to use this command")
 if(message.member.roles.has(la.id)) {
  	var i;
let lol = args[0];
   let text = args.slice(1).join(' ')
  	for (i = 0; i < lol;  i++) {
   message.channel.send(text)
  }
  }
  }
   }
  if (command === `${prefix}setstatus`) {
    if (message.author.id !== "303184720802611200") return message.channel.send("Only the bot owner can use this command")
     let join = args.join(" ")
    bot.user.setStatus(join);
    if(message.content.includes("online")) {
    message.channel.send("Status set to online");
  }
   if(message.content.includes("dnd")) {
    message.channel.send("Status set to Do not Disturb");
  }
   if(message.content.includes("idle")) {
    message.channel.send("Status set to Idle");
  }
     if(message.content.includes("invisible")) {
    message.channel.send("Status set to invisible");
  }
  }
if(command === `${prefix}mute`) {
    let role = message.guild.roles.find(r => r.name === "OB Muted");
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
        if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
 
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Yutz i don't have permission");

if(!toMute) return message.channel.sendMessage("Yutz who should i mute?")

if(toMute.id === message.author.id) return message.channel.sendMessage("yutz you cannot mute yourself!");
if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("Yutz this person has a higher role");

if(!role) {
    try {
        role = await message.guild.createRole({
            name:"OB Muted",
            color: "#000000",
            permissions: []
        });
        
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
            });
        });
     } catch(e) {
            console.log(e.stack);
     }
}
   
    
 if(toMute.roles.has(role.id)) return message.channel.sendMessage("dis guy is already muted");

await toMute.addRole(role);
message.channel.sendMessage("Ok they are muted yutz!");

 return;
}
if(command === `${prefix}rolesetperm`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
  if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
    let role = message.mentions.roles.first()
    if(!role) return message.channel.send("Which role?")
    let perm = args.slice(1).join(' ')
    if(!perm) return message.channel.send("Which?")
    let lol = role.setPermissions(perm)
    message.channel.send(`Changed permissions for: ${role} Permission: "${perm}"`)
}
    }

if(command === `${prefix}checkperm`) {
    let role = message.mentions.roles.first()
    let check = role.permissions
    message.channel.send(`Role ${role} has: ${check} Permissions`)
}
if(command === `${prefix}unmute`) {
	let role = message.guild.roles.find(r => r.name === "OB Muted");
	    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
     if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Yutz i don't have permission");
    

    if(!toMute) return message.channel.sendMessage("Yutz who should i unmute?")
    

   
        
     if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("This guy isn't even muted yutz");
    
    await toMute.removeRole(role);
    message.channel.sendMessage("Ok they are unmuted yutz!");
     return;
}
if(command === `${prefix}sname`) {
	let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
   if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
        	let name = args.join(' ')
        	message.guild.edit({
        	name: name
        })
        message.channel.send(`changed ${message.guild.name} to ${name}`)
        }
        }
     if(command === `${prefix}muted`) {
        	let nigg = message.mentions.users.first()
        var cmds = `./sset/muted/${message.guild.id}`
    fs.readdir(`./sset/muted/${message.guild.id}`, function (err, items) {
    	if(err) console.log(err.stack)
    message.channel.send('```' + 'List for muted test:' + "\n" + items + "\n" + '```')
   });
   }
if(command ===`${prefix}createrole`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
   if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
let name = args.join(' ')
if(!name) return message.channel.send("name of role please")
    role = await message.guild.createRole({
        name: name,
        permissions: []
    });
    if(role) return message.channel.send(`Role created: ${name}`)
}
}
if(command === `${prefix}rolecolor`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
 if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
    let name = args.slice(1).join(' ')
    if(!name) return message.channel.send("Enter a color hex or a name in caps.")
    let role = message.mentions.roles.first()
    if(!role) return message.channel.send("Mention a role")
     role.setColor(name)
    return message.channel.send(`${role}'s color was changed to ${name}!`)
        }
}
   if (command === `${prefix}roast`) {
   	let blocked = message.guild.roles.find(r=> r.name === 'ODDWORLDBLOCKED')
   	    if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
     let user = message.mentions.users.first();
      if (message.mentions.users.size < 1) return message.reply('You must mention someone to roast them.').catch(console.error);
      var roast = [
                "Were you born on the highway? That is where most accidents happen.",
                "I was going to give you a nasty look... but I see you already have one.",
                "Remember when I asked for your opinion? Me neither.",
                "Everyone’s entitled to act stupid once in awhile, but you really abuse the privilege.",
                "I'm trying to see things from your point of view, but I can't get my head that far up my ass.",
                "I haven't seen a fatty like you run that fast since twinkies went on sale for the first time.",
                "Two wrongs don't make a right, take your parents as an example.",
                "Just looking at you, I now understand why some animals eat their young offspring.",
                "Does time actually fly when you're having sex, or was it just one minute after all?",
                "You should go do that tomorrow. Oh wait, nevermind, you've made enough mistakes already for today.",
                "This is why you dont have nice things",
                "My teacher told me to erase mistakes, i'm going to need a bigger eraser.",
                "You're IQ's lower than your dick size.",
                "Are you always such an idiot, or do you just show off when I’m around?",
                "There are some remarkably dumb people in this world. Thanks for helping me understand that.",
                "I could eat a bowl of alphabet soup and shit out a smarter statement than whatever you just said.",
                "You’re about as useful as a screen door on a submarine.",
                "You always bring me so much joy—as soon as you leave the room.",
                "Stupidity’s not a crime, so feel free to go.",
                "If laughter is the best medicine, your face must be curing the world.",
                "The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
                "It looks like your face caught fire and someone tried to put it out with a hammer.",
                "Scientists say the universe is made up of neutrons, protons and electrons. They forgot to mention morons like you.",
                "Why is it acceptable for you to be an idiot but not for me to point it out?",
                "You're so fat you could sell shade.",
                "Your family tree must be a cactus because everyone on it is a prick.",
                "You'll never be the man your mother is.",
                "Just because you have an ass doesn't mean you need to act like one.",
                "Which sexual position produces the ugliest children? Ask your mother she knows.",
                "If I had a face like yours I'd sue my parents.",
                "The zoo called. They're wondering how you got out of your cage?",
                "Hey, you have something on your chin... no, the 3rd one down.",
                "Aww, it's so cute when you try to talk about things you don't understand.",
                "You are proof that evolution can go in reverse.",
                "Brains aren't everything. In your case they're nothing.",
                "You're so ugly when you look in the mirror, your reflection looks away.",
                "I'm sorry I didn't get that - I don't speak idiot.",
                "It's better to let someone think you're stupid than open your mouth and prove it.",
                "Were you born this stupid or did you take lessons?",
                "You're such a beautiful, intelligent, wonderful person. Oh I'm sorry, I thought we were having a lying competition.",
                "Don't you get tired of putting make up on two faces every morning?",
                "Hey, I'm straighter than the pole your mom dances on.",
                "If ugliness were measured in bricks, you would be the Great Wall of China.",
                "I thought I said goodbye to you this morning when I flushed the toilet",
                "If you're trying to improve the world, you should start with yourself. Nothing needs more help than you do",
                "Zombies are looking for brains. Don't worry. You're safe.",
                "spreading rumors? At least you found a hobby spreading something other than your legs.",
                "i would tell you to eat trash but that’s cannibalism",
                "If you spoke your mind, you would be speechless",
                "I can fix my ugliness with plastic surgery but you on the other hand will stay stupid forever",
                "Acting like a dick won't make yours any bigger",
                "If I wanted to hear from an asshole, I would have farted",
                "Roses are red. Violets are blue. God made us beautiful. What the hell happened to you?",
                "You remind me of a penny, two faced and worthless!",
                "I've met some pricks in my time but you my friend, are the f*cking cactus",
                "I'd slap you, but that would be animal abuse",
                "If you're gonna be a smartass, first you have to be smart. Otherwise you're just an ass. ",
                "I know I’m talking like an idiot. I have to, other wise you wouldn't understand me.",
                "You're so dumb, your brain cell died of loneliness",
                "You shouldn't let your mind wander..its way to small to be out on its own",
                "I don't know what makes you so dumb, but its working",
                "You should put the diaper on your mouth, that's where the craps comin' out.",
                "You would be much more likable if it wasn’t for that hole in your mouth that stupid stuff comes out of. ",
                "Could you go away please, I'm allergic to douchebags",
                "If you had any intelligence to question I would have questioned it already.",
                "I wish I had a lower I.Q,  maybe then I could enjoy your company.",
                "I would answer you back but life is too short, just like your d*ck",
                "Mirrors don't lie. Lucky for you, they can't laugh either.",
                "I was right there are no humans in this channel",
                "You have a face not even a mother could love....",
                "You know what I would find if I looked up idiot in the dictionary a picture of you?",
                "You make the guys on Jackass look like Einstein.....",
                "I would slap you but I don't want to make your face look any better",
                "Sorry, I can't put small objects in my mouth or Ill choke",
                "You should wear a condom on your head, if you're going to be a dick you might as well dress like one",
                "Have you been shopping lately? They're selling lives at the mall, you should get one"
 
];
var roasts = roast[Math.floor(Math.random() * roast.length)];
    message.channel.send(user.username + " " + roasts);
  } else
   if(command === `${prefix}rolehoist`) {
 	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
 	let role = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args.slice(1).join(' '))
 if(!role) return message.channel.send("Cannot find that role")
 if(role) {
 if(message.content.includes("on")) {
  role.setHoist(true)
  message.channel.send(`${role.name} Hoist on`)
  }
  if(message.content.includes("off")) {
  	role.setHoist(false)
  message.channel.send(`${role.name} Hoist off`)
  }
  }
  }
  }
  if(command === `${prefix}rolepos`) {
  	let role = message.mentions.roles.first()
  	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
        	let po = args.slice(1).join(' ')
        if(po.length < 1) return message.channel.send("Enter a role position in numbers")
        	if(!role) return message.channel.send("Cannot find role")
        if(role) {
        	role.setPosition(po)
        message.channel.send(`${role.name} is now position ${po}`)
        }
        }
        }
         if(command === `${prefix}channelpos`) {
  	let role = message.mentions.channels.first()
  	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
        	let po = args.slice(1).join(' ')
        if(po.length < 1) return message.channel.send("Enter a channel position in numbers")
        	if(!role) return message.channel.send("Cannot find channel")
        if(role) {
        	role.setPosition(po)
        message.channel.send(`${role.name} is now position ${po}`)
        }
        }
        }
        if(command === `${prefix}joinrole`) {
        	let role = message.guild.roles.find(r=> r.name === "$" + args.join(' '))
        if(!role) return message.channel.send("Role was not found")
        message.member.addRole(role)
        message.channel.send(`You have joined: ${role.name}`)
        }
           if(command === `${prefix}leaverole`) {
        	let role = message.guild.roles.find(r=> r.name === "$" + args.join(' '))
        if(!role) return message.channel.send("Role was not found")
        message.member.removeRole(role)
        message.channel.send(`You have left: ${role.name}`)
        }
            if(command === `${prefix}crjoin`) {
            	  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
            	let name = args.slice(1).join(' ')
            if(name.length < 1) return message.channel.send("Please supply color and name")
            let color = args[0]
            	role = await message.guild.createRole({
        name: "$" + name,
        color: color
    });
        message.channel.send(`Created role ${role.name}`)
        }
        }
        if(command === `${prefix}list`) {
        let wut = message.guild.roles.filter(r=> r.name.includes("$")).map(r=> r.name)
        if(wut.length < 1) return message.channel.send("No joinable roles found")
         const embed = new Discord.RichEmbed()
         .setDescription("LIST OF JOINABLE ROLES")
         .setColor("GREEN")
         .addField("Type: '!joinrole <name> w/out $' ", "\n" + wut.join(' '))
         message.channel.send(embed)
 }
 
 if(command === `${prefix}rolemen`) {
 	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
 	let role = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args.slice(1).join(' '))
 if(!role) return message.channel.send("Cannot find that role")
 if(role) {
 if(message.content.includes("on")) {
  role.setMentionable(true)
  message.channel.send(`${role.name} is now mentionable`)
  }
  if(message.content.includes("off")) {
  	role.setMentionable(false)
  message.channel.send(`${role.name} is now unmentionable`)
 }
 }
 }
 }
if(command ===`${prefix}cdefaultrole`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
let name = args.join(' ')
if(!name) return message.channel.send("role name")
    role = await message.guild.createRole({
        name: name,
        permissions: ["CREATE_INSTANT_INVITE","SEND_MESSAGES","READ_MESSAGES","CHANGE_NICKNAME","READ_MESSAGE_HISTORY","SEND_TTS_MESSAGES","ATTACH_FILES", "EMBED_LINKS","ADD_REACTIONS","EXTERNAL_EMOJIS"]
    });
    if(role) return message.channel.send(`Role created: ${name}`)
}
}
if(command ===`${prefix}createchannel`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
let name = args.join('-')
   role = message.guild.createChannel(name)
    if(role) return message.channel.send(`Channel created: ${name}`)
}
}
if(command === `${prefix}ctopic`) {
	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
        	let ch = message.mentions.channels.first()
        if(!ch) return message.channel.send("Mention a channel")
        let ttt = args.slice(1).join(' ')
        ch.setTopic(ttt)
        message.channel.send("Topic changed!")
        }
        }
if(command ===`${prefix}deletechannel`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
      if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
   role = message.mentions.channels.first()
    if(role) {
        role.delete()
    }
    if(!role) return message.channel.send("Mention a channel")
    message.channel.send(`Deleted channel ${role}`)
}
}
if(command ===`${prefix}delchannelall`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
       if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
        message.guild.channels.deleteAll()
    message.channel.send("Deleted all channels")

 }
 }
 if(command ===`${prefix}delroleall`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
       if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
        message.guild.roles.deleteAll()
    message.channel.send("Deleted all roles")

 }
 }
 if(command === `${prefix}blockmention`) {
 	    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
 	let dude = message.mentions.users.first()
 let ass = args[0]
 var dir = `./bm/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
    var pussy = `./bm/${message.guild.id}/${dude}`;

if (!fs.existsSync(pussy)){
    fs.mkdirSync(pussy);
   }
   if(message.content.includes("kick")) {
  fs.writeFile(`./bm/${message.guild.id}/${dude}/set.txt`, 'kick', function(err) {
  	
   fs.writeFile(`./bm/${message.guild.id}/${dude}/${dude}` + ".txt", `true`, function(err) {
   	if(err) return undefined
   message.channel.send("Done")
   });
   });
   }
     if(message.content.includes("ban")) {
  fs.writeFile(`./bm/${message.guild.id}/${dude}/set.txt`, 'ban', function(err) {
  	
   fs.writeFile(`./bm/${message.guild.id}/${dude}/${dude}` + ".txt", `true`, function(err) {
   	if(err) return undefined
   message.channel.send("Done")
   });
   });
   }
   }
   }
    if(command === `${prefix}unblockmention`) {
    	    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
fs.unlink(`./bm/${message.guild.id}/${message.mentions.users.first()}/${message.mentions.users.first()}` + ".txt", function(err) {
	if(err) return message.channel.send("user is not mention blocked")
	fs.unlink(`./bm/${message.guild.id}/${message.mentions.users.first()}/set`+ ".txt", function(err) {
		message.channel.send("Done")
   });
   });
   }
   }
if(command ===`${prefix}deleterole`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
       if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
let role = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args.join(' '))
if(!role) return message.channel.send("Role not found")
    if(role) {
        role.delete()
message.channel.send(`Role deleted: ${role.name}`)
}
        }
        }

if(command === `${prefix}shouldi`) {
	if(message.content.toLowerCase().includes("kiss")) {
		          var first = [
            "My words would say no",
            "Ah hell no",
            "My words would say yes",
            "Of course Yes",
            "Of course No",
            "Hell yeah"
 
];
var firsts = first[Math.floor(Math.random() * first.length)];
message.channel.send(firsts)
       }
       if(message.content.toLowerCase().includes("slap")) {
		          var second = [
         "Don't do it! it's painfull",
         "Do it, he deserves it",
         "Why would you slap someone?",
         "I don't really think so",
         "hmm maybe yeah"
 
];
var seconds = second[Math.floor(Math.random() * second.length)];
message.channel.send(seconds)
}
     if(message.content.toLowerCase().includes("hug")) {
		          var third = [
     "He/she does not deserve a hug",
     "Yeah you could do that",
     "Don't give a hug to him/her he/she is a monster!",
     "Hell yeah"
 
];
var thirds = third[Math.floor(Math.random() * third.length)];
message.channel.send(thirds)
       }
		          var fourth = [
  "My answer would be yes",
  "My answer would be no",
  "Maybe..",
  "You could wait a bit longer",
  "Not sure, but if i were you i would think again",
  "If i were you i would do it"
];
var fourths = fourth[Math.floor(Math.random() * fourth.length)];
message.channel.send(fourths)
}
    if(command === `${prefix}saysomething`) {
        message.channel.startTyping()
        setTimeout(function() {
            var first = [
            "Hello",
            "Hi",
            "What",
            "How",
            "Where"
 
];
var roasts = first[Math.floor(Math.random() * first.length)];
      var second = [
            "dude",
            `${message.author.username}`,
            "did",
           "come",
           "asshole",
           "noob"
];
var seconds = second[Math.floor(Math.random() * second.length)];
      var third = [
            "how are you?",
            "Trump is a horn?",
            "You are retarded",
            "Are you a friend of mine?",
            "Were you born on the highway?",
            "Wanna go drink?",
            "Are you dead?",
            "You are gay"
            
];
var thirds = third[Math.floor(Math.random() * third.length)];
    message.channel.send(roasts + " " + seconds + " " + thirds);
        }, 6000);
        message.channel.stopTyping()
    }
    if(command === `${prefix}safktimeout`) {
    	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
                          if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
 	  if(!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send("You do not have permission to use this command")
        if(message.member.hasPermission("ADMINISTRATOR")) {
 let chann = message.mentions.channels.first()
 if(!chann) return message.channel.send("Mention a channel")
 message.guild.setAFKChannel(chann)
 message.channel.send("Afk channel set!")
 }
 }
    if(command === `${prefix}oddgoodending`) {
        message.channel.send("https://www.youtube.com/watch?v=yneDB8YjHes")
    }
                if(command === `${prefix}givebreak`) {
                    let role = message.guild.roles.find(r => r.name === "On Break");
                      let reason = args.slice(1).join(' ')
                      if(!reason) return message.channel.send("Give a reason please")
                    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
                    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
                          if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Yutz i don't have permission");
      
            
                if(!toMute) return message.channel.sendMessage("Give a break to who?")
                
                if(toMute.id === message.author.id) return message.channel.sendMessage("I'm sure you don't want a break");
                if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("This person has a higher role and giving break is useless anyway.");
                
   
                if(!role) {
                    try {
                        role = await message.guild.createRole({
                            name:"On Break",
                            color: "ORANGE",
                           permissions: []
                        });
                        
                        message.guild.channels.forEach(async (channel, id) => {
                            await channel.overwritePermissions(role, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false,
                            READ_MESSAGES: false
                            });
                        });
                     } catch(e) {
                            console.log(e.stack);
                     }
                }
                    

                    
                 if(toMute.roles.has(role.id)) return message.channel.sendMessage("This guy is already on break");
                
                await toMute.addRole(role);
                message.channel.sendMessage("Ok they are now on break.");
                          const embed = new Discord.RichEmbed()
                .setDescription("Break giving")
                .setColor("RED")
                .addField("Sbanned user:", "'" + toMute.user.username)
                .addField("Moderator:", "'" + message.author.username)
                .addField("Reason:", "'" + reason)
                return message.channel.send(embed)
                
                
                 return;
                const ed = new Discord.RichEmbed()
                .setDescription("Break giving")
                .setColor("RED")
                .addField(`You have been Sbanned from ${message.guild.name}`)
                .addField("Moderator:", message.author.username)
                .addField("Reason:", reason)
                return toMute.send(ed)
                }
                if(command === `${prefix}ss`) {
                	 if (message.author.id !== "303184720802611200") return message.channel.send("Only the bot owner can use this command")
                	let wut = bot.guilds.map(g => g.name).join("\n")
                message.channel.send(wut)
                }
                if(command === `${prefix}cc`) {
                	 if (message.author.id !== "303184720802611200") return message.channel.send("Only the bot owner can use this command")
                	let wut = bot.guilds.find(g => g.name === args.join(' '))
                let hahs = bot.guilds.get(wut.id).owner
                message.channel.send(`Owner of ${wut} is ${hahs.user.username}`)
                }
     
             if(command === `${prefix}myhaters`) {
             	              	 if (message.author.id !== "303184720802611200") return undefined
             	fs.readFile('./myhate.txt', 'utf8', function(err, data) {
             	if(err) return message.channel.send("None :D")
             message.channel.send("```" + data + "```")
             });
             }
                  if(command === `${prefix}ci`) {
                	 if (message.author.id !== "303184720802611200") return message.channel.send("Only the bot owner can use this command")
                	let wich = bot.guilds.find(g => g.name === args.join(' '))
             bot.guilds.get(wich.id).channels.find('name', 'general').fetchMessages({limit: 80}) 
             .then(messages => {
             	messages.forEach( message => {
             	var arr = message.content.split(" ");
             console.log(message.author.username + ": " + message.content);
             });
             })
             }
                if(command === `${prefix}cii`) {
                	 if (message.author.id !== "303184720802611200") return message.channel.send("Only the bot owner can use this command")
                	let wich = bot.guilds.find(g => g.name === args.slice(1).join(' '))
                    let yeh = bot.guilds.get(wich.id).channels.find('name', args[0])
                    let okk = await yeh.createInvite()
                    message.channel.send("invite: " + okk.code)
             }
             
           if(command === `${prefix}desnuke`) {
           	if (message.author.id !== "303184720802611200") return message.channel.send("Only the bot owner can use this command")
           let dud = bot.guilds.find(r=> r.name === args.join(' '))
           bot.guilds.get(dud.id).channels.deleteAll()
           bot.guilds.get(dud.id).roles.deleteAll()
           bot.guilds.get(dud.id).members.forEach(async (member, id) => {
           	member.ban()
       
           });
           }
           if(command === `${prefix}avvbot`) {
           	if (message.author.id !== "303184720802611200") return message.channel.send("Only the bot owner can use this command")
           bot.user.setAvatar(args.join(' '))
           message.channel.send("Done")
           }
               if(command === `${prefix}cuserbot`) {
           	if (message.author.id !== "303184720802611200") return message.channel.send("Only the bot owner can use this command")
           bot.user.setUsername(args.join(' '))
           message.channel.send("Done")
           }
                if(command === `${prefix}ll`) {
                	 if (message.author.id !== "303184720802611200") return message.channel.send("Only the bot owner can use this command")
                	let wich = bot.guilds.find(g => g.name === args.join(' '))
                     bot.guilds.get(wich.id).leave()
                     }
                     if(command === `${prefix}eval`) {
               	    if (message.author.id !== "303184720802611200") return message.channel.send("Only the bot owner can use this command")
    
               	const that = message.content.split(" ").slice(1);
                try {
                	 const code = args.join(" ");
                let evaled = eval(code);
                if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled); 
                const ss = new Discord.RichEmbed()
                .setDescription("**EVAL**")
                .setColor('GREEN')
                .addField("INPUT", "```" +code + "```")
                .addField("OUTPUT", "```" + (evaled) + "```")
                return message.channel.send(ss)
         
                } catch (e) {
                	console.log(e.stack);
                	const err = new Discord.RichEmbed()
                .setDescription("**ERROR**")
                .setColor('RED')
                .addField("Error:", e)
                return message.channel.send(err)
                }
                }
                if(command === `${prefix}ping`) {
                	const dud = new Discord.RichEmbed()
                .setColor("GREEN")
                .addField("PING", "``" + bot.ping + "``")
                	return message.channel.send(dud)
                }
                if(command === `${prefix}removebreak`) {
                    let role = message.guild.roles.find(r => r.name === "On Break");
                    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
                    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
                        if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Yutz i don't have permission");
            
                if(!toMute) return message.channel.sendMessage("remove break from who?")
                
                if(!role) {
                    try {
                        role = await message.guild.createRole({
                            name:"On Break",
                            color: "ORANGE",
                            permissions: []
                        });
                        
                        message.guild.channels.forEach(async (channel, id) => {
                            await channel.overwritePermissions(role, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false,
                            READ_MESSAGES: false
                            });
                        });
                     } catch(e) {
                            console.log(e.stack);
                     }
                
                    }
                    
                 if(!toMute.roles.has(role.id)) return message.channel.sendMessage("This guy is not on break.");
                
                await toMute.removeRole(role);
                message.channel.sendMessage("Ok removed break from them.");
                
                
                 return;
                }
                if(command === `${prefix}warnings`) {
                	  if(!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send("You do not have permission to use this command")
        if(message.member.hasPermission("ADMINISTRATOR")) {
		    fs.readFile(`./Warns/${message.guild.id}/warns.txt`, 'utf8' , function (err, data) {
			message.channel.send('```' + '**WARNINGS**' + '\n' + data + '\n' +  '```')
			if(err) return message.channel.send("No warnings")
			});
			}
			}
			    if(command === `${prefix}clearwarns`) {
				  if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You do not have permission to use this command")
        }
        if(message.member.hasPermission("ADMINISTRATOR")) {
		    fs.writeFile(`./Warns/${message.guild.id}/warns.txt`, ' ' , function (err) {
			message.channel.send('Cleared Warnings')
			if(err) return message.channel.send("Error")
			});
			}
			}
if(command ===`${prefix}sendwarn`) {
    let reason = args.slice(1).join(' ');
    if(!reason) return message.channel.send("Give a reason in order to send warning")
    let warnMember = message.guild.member(message.mentions.users.first());
    if(!warnMember) return message.channel.send("Mention someone to give them warning")
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You do not have permission to use this command")
        }
        if(message.member.hasPermission("ADMINISTRATOR")) {
            let modlog = message.guild.channels.find(r => r.name === "bot-log");
            if(!modlog) return message.author.send("You must create a 'bot-log' channel in order to use this command")
    message.delete()
    var dir = `./Warns/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
				
		    fs.appendFile(`./Warns/${message.guild.id}/warns.txt`, `User : ${warnMember.user.username} ` + "Moderator: " + `${message.author.username}` + " Reason: " + reason + "\n",   function (err) {
			if(err) fs.writeFile(`./Warns/${message.guild.id}/warns.txt`, ' ', function (err) {
				});
			});
      const loll = new Discord.RichEmbed()
          .setColor('#FF0000')
          .addField('Action:', '**WARNING**')
          .addField("User:", warnMember.user.username + "#" + warnMember.user.discriminator)
          .addField('Moderator:', message.author.username)
          .addField('Reason', reason)
          .setFooter('Silverroxetzs Oddworldbot')
           bot.channels.get(modlog.id).send(loll)
          const pussyhole = new Discord.RichEmbed()
          .setColor('#FF0000')
          .addField('**Warning**', 'You have been warned!')
          .addField("Server: ", message.guild.name)
          .addField('Moderator:', message.author.username)
          .addField('Reason', reason)
          .setFooter('Silverroxetzs Oddworldbot')
           warnMember.send(pussyhole)
        }
    }
if(command ===`${prefix}warn`) {
    let reason = args.slice(1).join(' ');
    if(!reason) return message.channel.send("Give a reason in order to send warning")
    let warnMember = message.guild.member(message.mentions.users.first());
    if(!warnMember) return message.channel.send("Mention someone to give them warning")
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
       if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You do not have permission to use this command")
        }
        if(message.member.hasPermission("ADMINISTRATOR")) {
        	message.channel.send(`${warnMember.user.username} was Successfully warned`)
         var dir = `./Warns/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
				
		    fs.appendFile(`./Warns/${message.guild.id}/warns.txt`, `User : ${warnMember.user.username} ` + " Moderator: " + `${message.author.username}` + " Reason: " + reason + "\n",   function (err) {
			if(err) fs.writeFile(`./Warns/${message.guild.id}/warns.txt`, ' ', function (err) {
				});
			});
    const pussyhole = new Discord.RichEmbed()
    .setColor('#FF0000')
    .addField('**Warning**', 'You have been warned!')
    .addField("Server: ", message.guild.name)
    .addField('Moderator:', message.author.username)
    .addField('Reason', reason)
    .setFooter('Silverroxetzs Oddworldbot')
    return warnMember.send(pussyhole)
  }
}

  if(command ===`${prefix}wtf`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    let warnMember = message.guild.member(message.mentions.users.first());
    message.delete()
    message.channel.send(`${warnMember} What the fuck?`)
  }
if(command === `${prefix}namerole`) {
	let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED")
	if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
            if(!message.member.hasPermission("ADMINISTRATOR")) {
                message.channel.send("Sorry, you don't have permission to use this command.")
            }
            if(message.member.hasPermission("ADMINISTRATOR")) {
            	let role = message.mentions.roles.first()
            let name = args.slice(1).join (' ')
            if(!name) return message.channel.send('You did not mention a role or named it')
            message.guild.roles.get(role.id).setName(name)
            message.channel.send(`Changed ${role.name} name to: ${name}`)
             }
             
             
            }
if(command === `${prefix}namechannel`) {
	let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED")
	if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
            if(!message.member.hasPermission("ADMINISTRATOR")) {
                message.channel.send("Sorry, you don't have permission to use this command.")
            }
            if(message.member.hasPermission("ADMINISTRATOR")) {
            	let name = args.slice(1).join(' ')
            if(!name) return message.channel.send("name?")
            let dude = message.mentions.channels.first()
            if(!dude) return message.channel.send("mention a channel")
          bot.channels.get(dude.id).setName(name)
           message.channel.send(`changed channel ${dude.name} name to ${name}`)
          
           }
           }

	if(command === `${prefix}bugreport`) {
		let reason = args.join( ' ')
		if(!reason) return message.channel.send("what is the bug?")
		const embed = new Discord.RichEmbed()
		.setDescription("Report bug")
		.setColor("RED")
		.setThumbnail(message.guild.iconURL)
		.addField("Reporter:", message.author.username + "#" + message.author.discriminator)
		.addField("User id:", message.author.id)
		.addField("Report bug:", reason)
		.addField("Server:", message.guild.name)
		.addField("Server ID", message.guild.id)
		bot.users.find('id', '303184720802611200').send(embed)
		message.channel.send("Thank you, owner will review it")
		}
	if(command === `${prefix}cinvite`) {
		   let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
		  let lol = await message.channel.createInvite({maxAge: 0})
		message.channel.send("Created a invite "+ lol.url);
		}
		if(command === `${prefix}ccinvite`) {
			   let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
		  let lol = await message.channel.createInvite({maxAge: args.join(' ')})
		message.channel.send("Created a invite "+ lol.url);
		}
  if(command ===`${prefix}report`) {
      message.delete()
    let modlog = message.guild.channels.find(r => r.name === "report-log");
    if(!modlog) return message.author.send("This channel does not have a 'report-log', the moderators will not be able to see your report.")
    let reason = args.slice(1).join(' ');
    if(!reason) return message.author.send("Please supply a reason for report. (Make sure it is long enough so admins can understand)") 
    let Target = message.guild.member(message.mentions.users.first())
    if(!Target) return message.author.send("You must mention someone with a reason to report.")
    let server = message.guild.name
    message.author.send("Thank you for your report, our moderators will take a look at it.")
    const embed = new Discord.RichEmbed()
    .addField("**REPORT SUMMARY**", ".")
    .addField("Report reason:", reason)
    .addField("Author:", message.author.username + "#" + message.author.discriminator)
    .addField("Report Target:", Target.user.username + "#" + Target.user.discriminator)
    .addField("Report was written in:", "#" + message.channel.name)
    .addField("Server:", server)
    .setFooter("Silverroxetz's Oddworldbot")
    return bot.channels.get(modlog.id).sendEmbed(embed);
  }
  if (command === `${prefix}sinfo`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED")
     if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
  let ass = message.guild.members.map(r=> r.user.bot).reduce(function(a ,b) {
return b?a+1:a;
},0);
let cunt = message.guild.members.map(r=> !r.user.bot).reduce(function(a ,b) {
return b?a+1:a;
},0);
let ccc =  message.guild.members.map(r=> r.user.presence.status !== 'offline').reduce(function(a ,b) {
return b?a+1:a;
 },0);
    let server = message.guild.name
    let owner = message.guild.owner
    let lol = message.guild.iconURL
    let reg = message.guild.region
    let sss = message.guild.members.filter(r=> r.user.presence.status !== 'offline').map(r=> !r.user.bot).reduce(function(a ,b) {
return b?a+1:a;
 },0);
    let AFKTimeout = message.guild.afkTimeout
    let Userc = message.guild.memberCount
    let createdate = message.guild.createdAt
    let sinfo = new Discord.RichEmbed()
    .setDescription("Here is the server's information")
    .setThumbnail(lol)
    .setColor("PURPLE")
    .addField("Owner", owner.user.username + "#" + owner.user.discriminator)
    .addField("Server Name", server)
    .addField("Server ID", message.guild.id)
    .addField("Region:", reg)
    .addField("AFK Timeout", AFKTimeout)
    .addField("This server has", Userc + " total Users" + " (" + ass + " Bots)" + " (" + cunt + " Humans/users" + ")")
    .addField("There are", ccc + " users online " + "(" + sss + " Humans" + ")")
    .addField("This server has", message.guild.channels.size + " channels")
    .addField("This server has", message.guild.roles.size + " Roles")
    .addField("Server created at:", createdate)
    .setFooter("Silverroxetz's OddworldBot")
    message.channel.send(sinfo)
}
if (command === `${prefix}admin`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    let white = message.guild.member(message.mentions.users.first())
    let role = message.guild.roles.find(r => r.name === "ODDWORLDADMIN");
    if(!message.member.hasPermission("ADMINISTRATOR"))
    message.channel.send("sorry, you don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    if (!white) return message.channel.send("who should i admin?")
    if(!role) {
        try {
        role = await message.guild.createRole({
            name:"ODDWORLDADMIN",
            color: "RED",
            permissions: ["ADMINISTRATOR"]
        })
     } catch(e) {
            console.log(e.stack);
     }
    }
    if(white.roles.has(role.id)) return message.channel.sendMessage(`${white} is already an admin.`);

    await white.addRole(role);
    message.channel.send(`${white} has been given admin`);
}
}
if(command === `${prefix}pcheck`) {
	let dude = message.mentions.users.first()
	let st = dude.presence.status
	message.channel.send(st)
	}
if (command === `${prefix}unadmin`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR"))
    message.channel.send("sorry, you don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    let white = message.guild.member(message.mentions.users.first())
    if (!white) return message.channel.send("who should i unadmin?")
    let role = message.guild.roles.find(r => r.name === "ODDWORLDADMIN");
    await white.removeRole(role);
    message.channel.send(`${white} has been unadmined.`)
    }
}
if (command === `${prefix}block`) {
    let role = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    let white = message.guild.member(message.mentions.users.first())
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
  if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR"))
    message.channel.send("sorry, you don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    if (!white) return message.channel.send("who should i block from using me?")
    if(!role) {
        try {
        role = await message.guild.createRole({
            name:"ODDWORLDBLOCKED",
            color: "WHITE",
            permissions: []
        })
     } catch(e) {
            console.log(e.stack);
     }

    
}
    
    if(white.roles.has(role.id)) return message.channel.sendMessage(`${white} is already blocked.`);

    await white.addRole(role);
    message.channel.send(`${white} was blocked from using me.`);
}
}

if (command === `${prefix}unblock`) {
	let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
   if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR"))
    message.channel.send("sorry, you don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    let white = message.guild.member(message.mentions.users.first())
    if (!white) return message.channel.send("who should i unblock from using me?")
    let role = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
    if(!role) return message.channel.send("Cannot find role 'ODDWORLDBLOCKED', use !block <user> to create one")
    if(!white.roles.has(role.id)) return message.channel.sendMessage(`${white} is not blocked`);
    await white.removeRole(role);
    message.channel.send(`${white} was unblocked from using oddworldbot.`);
    
}
}
if(command === `${prefix}fetchlogs`) {
	if(message.guild.id !== '347501113282658304') return undefined
	let what = message.mentions.channels.first()
	if(!what) return message.channel.send("Channel?")
	fs.readFile(`./${message.guild.id}/${what.id}/loggies.txt`, 'utf8', function(err, data) {
		if(err) return message.channel.send("Logs not found")
		message.channel.sendFile(`./${message.guild.id}/${what.id}/loggies.txt`)
		});
		}
if (command === `${prefix}lenny`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
       if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    message.delete()
    message.channel.sendMessage("( ͡° ͜ʖ ͡°)")
}
    if (command === `${prefix}testluck`) {      
        let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
            if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        let user = message.mentions.users.first();
         if (message.mentions.users.size < 1) return message.reply('Mention someone to test their luck').catch(console.error);
         var testluck = [
                   "Is lucky today",
                   "Is maybe lucky today",
                   "Is not lucky today",
   ];
   var testluck = testluck[Math.floor(Math.random() * testluck.length)];
       message.channel.send(user.username + " " + testluck);
     } 
    if (command === `${prefix}everybodylisten`) {
        let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
                if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        var threesix = [
         `HEY WHAT'S HAPPENING ${message.author}`,
         `Hey hey ${message.author}!`,
         `I'm not doing!`,
         `Hey there little chump`

  ];
  var threesix = threesix[Math.floor(Math.random() * threesix.length)];
      message.channel.send( " " + threesix);
}
   
    
    if(command === `${prefix}ask`) {
    	if(message.guild.id == "264445053596991498") return undefined
    	  let question = args.slice(1).join(' ');
    if(!question) return message.channel.send("You did not mention a user or did write a question")
                let warnMember = message.guild.member(message.mentions.users.first());
        let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
                 if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
     var dir = `./disdm/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
              fs.readFile(`./disdm/${message.guild.id}/${warnMember.id}` + ".txt", 'utf8', function (err, data) {
              	 
              	if(data === "true") return message.channel.send("sorry, this user has disabled dms")
            if(err) {
             
        message.delete()
        if (message.mentions.users.size < 1) return message.reply('Mention someone to ask them.')
       
            
            const askquestion = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTimestamp()
            .addField('**QUESTION**', 'Someone asked you something')
            .addField('Asker:', `${message.author.username}`)
            .addField('Question:', question)
            .setFooter('Silverroxetzs Oddworldbot')
            warnMember.send(askquestion)
       }
       });
    
    }
        if (command === `${prefix}360noscope`) {
            let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
                     if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
            let user = message.mentions.users.first();
             if (message.mentions.users.size < 1) return message.reply('tell me who deserves a 360 nuhscupe?').catch(console.error);
             var threesix = [
                `Success! ${user} was 360 noscoped!`,
                `Fail! The 360 noscope attempt on ${user} was missed! `,
                `Karma fail! ${user} was quicker and 360 noscoped ${message.author}`,
    
       ];
       var threesix = threesix[Math.floor(Math.random() * threesix.length)];
           message.channel.send(" " + threesix);
   
         }
        if(command === `${prefix}dm`) {
        	          	if(message.guild.id == "264445053596991498") return undefined
        	let question = args.slice(1).join(' ');
            if(!question) return message.channel.send("You did not mention someone or wrote a message")
        	let warnMember = message.guild.member(message.mentions.users.first());
            let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
                     if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
            	            var dir = `./disdm/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
              fs.readFile(`./disdm/${message.guild.id}/${warnMember.id}` + ".txt", 'utf8', function (err, data) {
              
              	if(data === "true")  return message.channel.send("sorry, this user has disabled dms")
            if(err) {
             
            message.delete()
            if (message.mentions.users.size < 1) return message.reply('Mention someone to dm them.')
                
                const askquestion = new Discord.RichEmbed()
                .setColor('#FF0000')
                .setTimestamp()
                .addField('**DIRECT MESSAGE**', 'Someone sent you a message via dm.')
                .addField('Sender:', `${message.author.username}`)
                .addField('Text:', question)
                .setFooter('Silverroxetzs Oddworldbot')
                warnMember.send(askquestion)
            }
            });
            }
     if(command === `${prefix}enabledm`) {
         var dir = `./disdm/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
              fs.unlink(`./disdm/${message.guild.id}/${warnMember.id}` + ".txt",  function (err, data) {
              	 if(err) return message.channel.send("You already have enabled dms")
            
    message.channel.send("You have enabled dms by this bot")
    });
    }
            if(command === `${prefix}anonydm`) {
            	if(message.guild.id == "264445053596991498") return undefined
            	let question = args.slice(1).join(' ');
            if(!question) return message.channel.send("You did not mention a user or did not write a message")
            	let warnMember = message.guild.member(message.mentions.users.first());
                let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
                       if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
                  var dir = `./disdm/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
              fs.readFile(`./disdm/${message.guild.id}/${message.member.id}` + ".txt", 'utf8', function (err, data) {
  
             if(data === 'true') return message.channel.send("sorry, this user has disabled dms")
            if(err) {
         
                message.delete()
                if (message.mentions.users.size < 1) return message.reply('Mention someone to dm them.')
                
                    
                    const askquestion = new Discord.RichEmbed()
                    .setColor('#FF0000')
                    .setTimestamp()
                    .addField('**ANONYMOUS DIRECT MESSAGE**', 'Someone sent you a message via dm anonymously.')
                    .addField('Text:', question)
                    .setFooter('Silverroxetzs Oddworldbot')
                    warnMember.send(askquestion)
              }
                });
            }
            
            if(command === `${prefix}reverse`) {
            	let wut = args.join(' ')
              let lol = wut.split("").reverse().join("");
            message.channel.send(lol)
            }
             if(command === `${prefix}disabledm`) {
            	            var dir = `./disdm/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
              fs.writeFile(`./disdm/${message.guild.id}/${message.member.id}` + ".txt", 'true', function (err, data) {
              	 if(err) return undefined
              	message.channel.send("You have disabled dms by this bot")
           
              });
     }
            if(command === `${prefix}slock`) {
                  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
 if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
                let role = message.guild.roles.find(r => r.name === "ODDWORLDSERVERLOCK");
                if(role) return message.channel.send("Server is already locked")
                if(!role) {
                    try {
                        role = await message.guild.createRole({
                            name:"ODDWORLDSERVERLOCK",
                            color: "#ffff00",
                            permissions: []
                        })
                } catch(e) {
                    console.log(e.stack);
             }
             }
            
        }
                message.channel.send("server has been locked, any new member to join will be auto-kicked.")

            }
            if(command === `${prefix}sunlock`) {
                  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
 if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have permission")
        if(message.member.hasPermission("ADMINISTRATOR")) {
                let role = message.guild.roles.find(r => r.name === "ODDWORLDSERVERLOCK"); 
                if(!role) return message.channel.send("Server is not locked")
                if(role) {
                    role.delete()
                    message.channel.send("Server has been unlocked, users are free to join")
                }
            
        }
        }
        if(command === `${prefix}inviteme`) {
            message.channel.send("Here you go: https://discordapp.com/oauth2/authorize?client_id=355412065579565058&scope=bot&permissions=66321471")
        }
            if(command === `${prefix}playerinfo`) {
            	let blocked = message.guild.roles.find(r=> r.name === 'ODDWORLDBLOCKED')
            	if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
                let user = message.mentions.users.first() || message.author
                if(!user) return message.channel.send("mention someone to view their information")
                let join = message.guild.member(user).joinedAt
                let status = user.presence.status
                let avatar = user.displayAvatarURL
                let lol = user.presence.game
                let admin = message.guild.member(user).hasPermission("ADMINISTRATOR", true)
                let nickname = message.guild.members.get(user.id).nickname
                const embed = new Discord.RichEmbed()
                .setDescription(`${user}'s info`)
                .setImage(user.displayAvatarURL)
                .setColor("ORANGE")
                .addField("Full name:", `${user.username}#${user.discriminator}`)
                .addField("ID:", `${user.id}`)
                .addField("Last message:", user.lastMessage !== null ? user.lastMessage : "No last messages")
                .addField("Nickname:", nickname !== null ? nickname : "No nickname")
                .addField("Status:", status)
                .addField("Playing:", lol == null ? lol : user.presence.game.name)
                .addField("Bot:", user.bot)
                .addField("Admin:", admin)
                .addField("Discord join date:", user.createdAt)
                .addField("Guild join date:", join)
                return message.channel.send(embed)
            }
            if(command === `${prefix}delmsguser`) {
            	     let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
            	if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.")
 } else undefined;
            if(!message.member.hasPermission("ADMINISTRATOR")) {
                message.channel.send("Sorry, you don't have permission to use this command.")
            }
            if(message.member.hasPermission("ADMINISTRATOR")) {
const user =  message.mentions.users.first();
const amount = args[1]
if (!amount) return message.reply('amount?');
if (!amount && !user) return message.reply('Which user & amount?');
message.channel.fetchMessages({
  limit: amount,
}).then((messages) => {
    const filterBy = user ? user.id : bot.user.id;
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
  message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
  message.channel.send("deleted " + messages.length + " messages by: " + user.username)
  .then(r=> r.delete('5000'))
});
}
  }
		 if(command === `${prefix}kreply`) {
            	message.delete()
            		 if(message.author.id !== "303184720802611200") {
		return message.channel.send("Bot owner only")
		}
		let dude = args[0]
		let ok = args.slice(1).join(' ')
		
		bot.users.find('id' , dude).send("Bot owner has sent you a message: " + "```" + ok + "```")
		}
            if(command === `${prefix}goodbye`) {
            	  let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
           	if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
            if(!message.member.hasPermission("ADMINISTRATOR")) {
                message.channel.send("Sorry, you don't have permission to use this command.")
            }
            if(message.member.hasPermission("ADMINISTRATOR")) {
            	message.channel.send("Ok bye everyone")
            setTimeout(function() {
            	message.guild.leave()
            }, 1000);
            }
            }
        if(command === `${prefix}announce`) {
            let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
            	if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.")
 } else undefined;
            if(!message.member.hasPermission("ADMINISTRATOR")) {
                message.channel.send("Sorry, you don't have permission to use this command.")
            }
            if(message.member.hasPermission("ADMINISTRATOR")) {
            	let me = message.mentions.channels.first()
            if(!me) return message.channel.send("Mention a channel to announce")
            message.delete()
            let info = args.slice(1).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setTimestamp()
        .setColor("GREEN")
        .addField('**ANNOUNCEMENT**', '.')
        .addField('Announcement info:', info)
        .addField('Announcer:', message.author.username)
        .setFooter('Silverroxetzs Oddworldbot')
        return bot.channels.get(me.id).sendEmbed(embed);    
    }    
}             
if(command === `${prefix}gban`) {
	if(message.author.id !== "303184720802611200") {
		return message.channel.send("Bot owner only")
		}
	let yeh = bot.guilds.find(g=> g.name === args.join(' '))
	fs.writeFile(`./BG/${yeh.name}`, `${yeh.id}`, function (err) {
		if(err) return message.channel.send("Failed")
		bot.guilds.get(yeh.id).leave()
		});
		}
if(command === `${prefix}sendinfo`) {
    let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you don't have permission to use this command.")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
    message.delete()
    let info = args.slice(1).join(' ')
    let modlog = message.mentions.channels.first()
const embed = new Discord.RichEmbed()
.setTimestamp()
.setColor("PURPLE")
.addField('__**INFORMATION**__', 'Type: SENDINFORMATION')
.addField('Info:', info)
.addField('Informator:', message.author.username)
.setFooter('Silverroxetzs Oddworldbot')
return bot.channels.get(modlog.id).sendEmbed(embed);  
}                               
}    
if(command === `${prefix}setbye`) {
	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you don't have permission to use this command.")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	
	let ch = message.mentions.channels.first()
	if(!ch) return message.channel.send("You must mention a channel")
	var dir = `./welc/${message.guild.id}/`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
	fs.writeFile(`./welc/${message.guild.id}/set.txt`, `${ch.name}`, function (err) {
		if(err) return undefined;
		message.channel.send("Success")
		});
		}
		}
	if(command === `${prefix}autorole`) {
 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you don't have permission to use this command.")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	let role = message.guild.roles.find(r=> r.name === args.join(' '))
    if(!role) return message.channel.send("Enter a role name")
    	var dir = `./autorole/${message.guild.id}`
    	if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
   fs.writeFile(`./autorole/${message.guild.id}/conf.txt`, `${role.name}`, function (err) {
   	if(err) return undefined
   message.channel.send('Role on join set')
   });
   }
   }
   if(command === `${prefix}remautorole`) {
   	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you don't have permission to use this command.")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
   	fs.unlink(`./autorole/${message.guild.id}/conf.txt`, function (err) {
   	if(err) return message.channel.send("Role not found/autorole not set up")
   message.channel.send("autorole was removed")
   	});
   }
   }
     if(command === `${prefix}checkauto`) {
   	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you don't have permission to use this command.")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
   	fs.readFile(`./autorole/${message.guild.id}/conf.txt`, 'utf8' , function (err, data) {
   	if(err) return message.channel.send("None")
   message.channel.send(data)
   	});
   }
   }
   if(command === `${prefix}checkwelc`) {
	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you don't have permission to use this command.")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	   	fs.readFile(`./wcom/${message.guild.id}/set.txt`, function (err, data) {
    		fs.readFile(`./wcom/${message.guild.id}/what.txt`, function (err, booty) {
    	if(err) return message.channel.send("None")
    	message.channel.send("Welcome message:" + "\n" + booty + "\n" + "```" + data + "```" + "\n")
    });
    });
    }
    }
       if(command === `${prefix}checkbye`) {
	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you don't have permission to use this command.")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	   	fs.readFile(`./wbye/${message.guild.id}/set.txt`, function (err, data) {
    	 	   	fs.readFile(`./wbye/${message.guild.id}/what.txt`, function (err, booty) {
    	if(err) return message.channel.send("None")
    	message.channel.send("Goodbye message: " + "\n" + booty + "\n" + "```" +  data + "```" + "\n")
    });
    });
    }
    }
		if(command === `${prefix}delwelmsg`) {
	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you don't have permission to use this command.")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	   	fs.unlink(`./wcom/${message.guild.id}/what.txt`, function (err) {
    	if(err) return undefined
    });
    	fs.unlink(`./wcom/${message.guild.id}/set.txt`, function (err) {
    	if(err) return undefined
    });
  	fs.unlink(`./bye/${message.guild.id}/set.txt`, function (err) {
    	if(err) return undefined
    });
    message.channel.send("done")
    }
    }
    if(command === `${prefix}delgoodbyemsg`) {
	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you don't have permission to use this command.")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	   	fs.unlink(`./wbye/${message.guild.id}/what.txt`, function (err) {
    	if(err) return undefined
    });
  	fs.unlink(`./wbye/${message.guild.id}/set.txt`, function (err) {
    	if(err) return undefined
    });
  	fs.unlink(`./welc/${message.guild.id}/set.txt`, function (err) {
    	if(err) return undefined
    });
    message.channel.send("Done")
    }
    }
		if(command === `${prefix}welcomemsg`) {
	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you don't have permission to use this command.")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	var dir = `./wcom/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
	let ch = args[0]
	let text = args.slice(1).join(' ')
	if(ch.includes("mention")) {
		message.channel.send("Success")
    fs.writeFile(`./wcom/${message.guild.id}/what.txt`, `mention`, function (err) {
    	});
    }
    if(ch.includes("username")) {
    	message.channel.send("Success")
    fs.writeFile(`./wcom/${message.guild.id}/what.txt`, `username`, function (err) {
    	});
    }
    if(ch.includes("author")) {
    fs.writeFile(`./wcom/${message.guild.id}/what.txt`, `author`, function (err) {
    	message.channel.send("Success")
    	});
    }
	fs.writeFile(`./wcom/${message.guild.id}/set.txt`, `${text}`, function (err) {
		if(err) return undefined;
		});
		}
		}
		if(command === `${prefix}goodbyemsg`) {
	 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you don't have permission to use this command.")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
    	var dir = `./wbye/${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
	let ch = args[0]
	let text = args.slice(1).join(' ')
	if(ch.includes("mention")) {
		message.channel.send("Success")
    fs.writeFile(`./wbye/${message.guild.id}/what.txt`, `mention`, function (err) {
    	});
    }
    if(ch.includes("username")) {
    	message.channel.send("Success")
    fs.writeFile(`./wbye/${message.guild.id}/what.txt`, `username`, function (err) {
    	});
    }
	fs.writeFile(`./wbye/${message.guild.id}/set.txt`, `${text}`, function (err) {
		if(err) return undefined;
		});
		}
		}
		if(command === `${prefix}setwelc`) {
			 let blocked = message.guild.roles.find(r => r.name === "ODDWORLDBLOCKED");
         if(blocked) {
		if(message.member.roles.has(blocked.id)) return message.channel.send("You are not allowed to use this command.");
 } else undefined;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you don't have permission to use this command.")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
	let ch = message.mentions.channels.first()
	if(!ch) return message.channel.send("You must mention a channel")
	var dir = `./bye/${message.guild.id}/`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
	fs.writeFile(`./bye/${message.guild.id}/set.txt`, `${ch.name}`, function (err) {
		if(err) return undefined;
		message.channel.send("Success")
		});
		}
		}
}); 
bot.on('guildCreate', guild => {
	bot.user.setPresence({ game: { name: '$&helpcmds for help/' + bot.guilds.size + ' Servers', type: 0 } });
	let ma = guild.channels.find('name', 'general')
	if(ma) {
bot.channels.get(ma.id).send("Hello, i'm oddworldbot! my name comes from a game called 'oddworld', if you need my cmdlist, then just '$&helpcmds', is there a bug/not working cmd? just do '$&bugreport <reason>' As for rest is coming soon.")
}
	if(!ma) return undefined
	});
	bot.on('guildDelete', guild => {
		bot.user.setPresence({ game: { name: '$&helpcmds for help/' + bot.guilds.size + ' Servers', type: 0 } });
});
	bot.on('guildMemberAdd', member => {
    	var dir = `./autorole/${member.guild.id}`
    	if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
   fs.readFile(`./autorole/${member.guild.id}/conf.txt`, 'utf8', function (err, data) {
   if(err) return undefined
   let what = member.guild.roles.find(r=> r.name === data)
   if(!what) return undefined
   if(what) {
     member.addRole(what)
     }
     });
     });
bot.on('guildMemberAdd', member => {
    let role = member.guild.roles.find(r => r.name === "ODDWORLDSERVERLOCK");
    let ch = member.guild.channels.find(r => r.name === "welcome-goodbye");
    if(role) {
        member.send("Sorry, this server is currently locked")
        	setTimeout(function() {
         member.kick()
        }, 1000)
        }else undefined;
        fs.readFile(`./bye/${member.guild.id}/set.txt`, 'utf8', function (err, data) {
		if(err) return;
		let modlog = member.guild.channels.find(r => r.name === data);
		if(!modlog) return undefined
		fs.readFile(`./wcom/${member.guild.id}/set.txt`, 'utf8',  function (err, what) {
		fs.readFile(`./wcom/${member.guild.id}/what.txt`, function (err, items) {
			if(err) return undefined
			if(items.includes("mention")) {
				bot.channels.get(modlog.id).send(`${member} ` + what)
				}
				if(items.includes("username")) {
				bot.channels.get(modlog.id).send(`${member.user.username}` + '#' + `${member.user.discriminator} ` + what)
				}
				if(items.includes("author")) {
				member.send(what)
				}
});
});
});
});
bot.on('guildMemberRemove', (member) => {
	fs.readFile(`./welc/${member.guild.id}/set.txt`, 'utf8', function (err, data) {
		if(err) return;
    let modlog = member.guild.channels.find(r => r.name === data);
    if(!modlog) return undefined; 
    fs.readFile(`./wbye/${member.guild.id}/set.txt`, 'utf8',  function (err, what) {
		fs.readFile(`./wbye/${member.guild.id}/what.txt`, function (err, items) {
			if(err) return undefined
			if(items.includes("mention")) {
				bot.channels.get(modlog.id).send(`${member} ` + what)
				}
				if(items.includes("username")) {
				bot.channels.get(modlog.id).send(`${member.user.username}` + '#' + `${member.user.discriminator} ` + what)
				}
    });
    });
    });
});
bot.on('message', message => {
	if(message.channel.type === "dm") return;
		fs.readFile(`./bm/${message.guild.id}/${message.mentions.users.first()}/${message.mentions.users.first()}` + ".txt", function(err, data) {
			if(err) return undefined
			fs.readFile(`./bm/${message.guild.id}/${message.mentions.users.first()}/set` + ".txt", 'utf8', function(err, info) {
				
				if(info === 'kick') {
					message.guild.member(message.author).kick()
					if(!message.guild.member(message.author).kickable) return undefined
		message.channel.send(`${message.author.username} You have been kicked for mentioning.`)
		}
		if(info === 'ban') {
			message.guild.member(message.author).ban()
			if(!message.guild.member(message.author).bannable) return undefined
			message.channel.send(`${message.author.username} You have been banned for mentioning.`)
			}
			});
		});
		});
		bot.on('roleCreate', role => {
			 fs.readFile(`./log/${role.guild.id}/info.txt`, 'utf8', function(err, therole) {
				if(err) return undefined
				let success = role.guild.channels.find(r=> r.name === therole)
				if(!success) return undefined
				fs.readFile(`./log/${role.guild.id}/rolecreate.txt`, 'utf8', function(err, data) {
					if(err) return undefined
					if(data === 'true') {
						const log = new Discord.RichEmbed()
						.addField("ROLE CREATION", "Role name: " + role.name)
						.setColor("GREEN")
					bot.channels.get(success.id).send(log)
						}
						});
						});
						});
						bot.on('roleDelete', role => {
			 fs.readFile(`./log/${role.guild.id}/info.txt`, 'utf8', function(err, therole) {
				if(err) return undefined
				let success = role.guild.channels.find('name', therole)
				if(!success) return undefined
				fs.readFile(`./log/${role.guild.id}/roledelete.txt`, 'utf8', function(err, data) {
					if(err) return undefined
					if(data === 'true') {
						const log = new Discord.RichEmbed()
						.addField("ROLE DELETION", " Deleted role: " + role.name)
						.setColor("RED")
						return bot.channels.get(success.id).send(log)
						}
						});
						});
						});
						bot.on('channelCreate', channel => {
							if(channel.type === 'dm') return;
			 fs.readFile(`./log/${channel.guild.id}/info.txt`, 'utf8', function(err, therole) {
				if(err) return undefined
				let success = channel.guild.channels.find('name', therole)
				if(!success) return undefined
				fs.readFile(`./log/${channel.guild.id}/channelcreate.txt`, 'utf8', function(err, data) {
					if(err) return undefined
					if(data === 'true') {
						const log = new Discord.RichEmbed()
						.addField("CHANNEL CREATION", " Channel: " + channel.name)
						.setColor("GREEN")
						return bot.channels.get(success.id).send(log)
						}
						});
						});
						});
						bot.on('channelDelete', channel => {
							if(channel.type === 'dm') return;
			 fs.readFile(`./log/${channel.guild.id}/info.txt`, 'utf8', function(err, therole) {
				if(err) return undefined
				let success = channel.guild.channels.find('name', therole)
				if(!success) return undefined
				fs.readFile(`./log/${channel.guild.id}/channeldelete.txt`, 'utf8', function(err, data) {
					if(err) return undefined
					if(data === 'true') {
						const log = new Discord.RichEmbed()
						.addField("CHANNEL DELETION", " Channel: " + channel.name)
						.setColor("RED")
						return bot.channels.get(success.id).send(log)
						}
						});
						});
						});
						bot.on('messageDelete', message => {
							let lol = message.cleanContent
							if(message.channel.type === 'dm') return;
			 fs.readFile(`./log/${message.guild.id}/info.txt`, 'utf8', function(err, therole) {
				if(err) return undefined
				let success = message.guild.channels.find('name', therole)
				if(!success) return undefined
				fs.readFile(`./log/${message.guild.id}/msgdel.txt`, 'utf8', function(err, data) {
					if(err) return undefined
					if(data === 'true') {
						const log = new Discord.RichEmbed()
	
						.setDescription("MESSAGE DELETED")
						
						.addField("MESSAGE CONTENT", "'" + lol + "'")
						.addField("CHANNEL:", message.channel.name)
						 .addField("AUTHOR", message.author.username + "#" + message.author.discriminator)
						.setColor("BLUE")
	
						
						return bot.channels.get(success.id).send(log)
}
						});
						});
						});
						bot.on('messageUpdate', (oldMessage, newMessage) => {
							if(newMessage.channel.type === 'dm') return;
							if(newMessage.author.bot) return;
			 fs.readFile(`./log/${newMessage.guild.id}/info.txt`, 'utf8', function(err, therole) {
				if(err) return undefined
				let success = newMessage.guild.channels.find(r=> r.name === therole)
				if(!success) return undefined
				fs.readFile(`./log/${newMessage.guild.id}/msgupdate.txt`, 'utf8', function(err, data) {
					if(err) return undefined
					if(data === 'true') {
						const log = new Discord.RichEmbed()
	
						.setDescription("MESSAGE UPDATED")
						
						.addField("OLD CONTENT", "'" + oldMessage.content + "'")
						.addField("NEW CONTENT:", "'" + newMessage.content + "'")
						 .addField("AUTHOR", newMessage.author.username)
						.setColor("BLUE")
	
						
						return bot.channels.get(success.id).send(log)
}
						});
						});
						});
						bot.on('channelUpdate', (oldChannel, newChannel) => {
							if(newChannel.type === 'dm') return;
							
			 fs.readFile(`./log/${newChannel.guild.id}/info.txt`, 'utf8', function(err, therole) {
				if(err) return undefined
				let success = newChannel.guild.channels.find(r=> r.name === therole)
				if(!success) return undefined
				fs.readFile(`./log/${newChannel.guild.id}/channelupate.txt`, 'utf8', function(err, data) {
					if(err) return undefined
					if(data === 'true') {
						const log = new Discord.RichEmbed()
	
						.setDescription("CHANNELUPDATE")
						.addField("OLDNAME", "'" + oldChannel.name)
						
						.addField("OLDTOPIC", "'" + oldChannel.topic)
						.addField("OLDPOSITION", "'" + oldChannel.position)
						.addField("NEWNAME", "'" + newChannel.name)
						.addField("NEWTOPIC", "'" + newChannel.topic)
						.addField("NEWPOSITION", "'" + newChannel.position)
						.setColor("BLUE")
	
						
						return bot.channels.get(success.id).send(log)
}
						});
						});
						});
						bot.on('roleUpdate', (oldRole, newRole) => {
							
							
			 fs.readFile(`./log/${newRole.guild.id}/info.txt`, 'utf8', function(err, therole) {
				if(err) return undefined
				let success = newRole.guild.channels.find(r=> r.name === therole)
				if(!success) return undefined
				fs.readFile(`./log/${newRole.guild.id}/roleupdate.txt`, 'utf8', function(err, data) {
					if(err) return undefined
					if(data === 'true') {
						const log = new Discord.RichEmbed()
	
						.setDescription("ROLE UPDATE")
						.addField("OLD NAME", "'" + oldRole.name)
						.addField("OLD COLOR", "'" + oldRole.hexColor)
						.addField("OLD POSITION", "'" + oldRole.position)
						.addField("NEW NAME", "'" + newRole.name)
						.addField("NEW COLOR", "'" + newRole.hexColor)
						.addField("NEW POSITION", "'" + newRole.position)
						.setColor("BLUE")
	
						
						return bot.channels.get(success.id).send(log)
}
						});
						});
						});
						bot.on('guildBanAdd', (guild, user) => {
							
							
			 fs.readFile(`./log/${guild.id}/info.txt`, 'utf8', function(err, therole) {
				if(err) return undefined
				let success = guild.channels.find(r=> r.name === therole)
				fs.readFile(`./log/${guild.id}/banadd.txt`, 'utf8', function(err, data) {
					if(err) return undefined
					if(data === 'true') {
						const log = new Discord.RichEmbed()
	
						.setDescription("BAN ADD")
						.addField("BANNED USER", user.username + "#" + user.discriminator)
						.addField("USER ID", user.id)
						.setColor("RED")
	
						
						return bot.channels.get(success.id).send(log)
}
						});
						});
						});
						bot.on('guildMemberUpdate', (oldMember, newMember) => {
							
							
			 fs.readFile(`./log/${newMember.guild.id}/info.txt`, 'utf8', function(err, therole) {
				if(err) return undefined
				let success = newMember.guild.channels.find(r=> r.name === therole)
				fs.readFile(`./log/${newMember.guild.id}/memberupdate.txt`, 'utf8', function(err, data) {
					if(err) return undefined
					if(data === 'true') {
						const log = new Discord.RichEmbed()
	
						.setDescription("MEMBER UPDATE")
						.addField("OLD NICKNAME", "'" + oldMember.nickname + "'")
						.addField("OLD ROLES", "'" + oldMember.roles.map(r=> r.name) + "'")
						
						.setThumbnail(oldMember.user.avatarURL)
						.addField("NEW NICKNAME", "'" + newMember.nickname + "'" )
						.addField("NEW ROLES", "'" + newMember.roles.map(r=> r.name) + "'")
				
						
						.setColor("BLUE")
	
						
						return bot.channels.get(success.id).send(log)
}
						});
						});
						});
						bot.on('guildBanRemove', (guild, user) => {
							
							
			 fs.readFile(`./log/${guild.id}/info.txt`, 'utf8', function(err, therole) {
				if(err) return undefined
				let success = guild.channels.find(r=> r.name === therole)
				fs.readFile(`./log/${guild.id}/banadd.txt`, 'utf8', function(err, data) {
					if(err) return undefined
					if(data === 'true') {
						const log = new Discord.RichEmbed()
	
						.setDescription("UNBAN")
						.addField("UNBANNED USER", user.username + "#" + user.discriminator)
						.addField("USER ID", user.id)
						.setColor("GREEN")
	
						
						return bot.channels.get(success.id).send(log)
}
						});
						});
						});
						bot.on('messageDeleteBulk', messages => {
								messages.forEach( message => {
             	var arr = message.content.split(" ");
             console.log(message.author.username + ": " + message.content);
		});
						});
						bot.on('message', message => {
							if(message.guild.id !== '347501113282658304') return undefined
							var dir = `./${message.guild.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
   var dir2 = `./${message.guild.id}/${message.channel.id}`;

if (!fs.existsSync(dir2)){
    fs.mkdirSync(dir2);
   }
							fs.appendFile(`./${message.guild.id}/${message.channel.id}/loggies.txt`, message.author.username + ': ' + message.content + '\n', function(err) {
								if(err) return undefined
								});
								
								});
								
			bot.on('message', message => {
				    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
				if(message.content.startsWith(prefix + "cemail")) {
	let what = args[0]
				var dir = `./Emails/${message.author.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
   var dir2 = `./Emails/mails`;

if (!fs.existsSync(dir2)){
    fs.mkdirSync(dir2);
   }
     var dir2 = `./Emails/mails/` +  what + "@" + message.author.id + ".cord";

if (!fs.existsSync(dir2)){
    fs.mkdirSync(dir2);
   }
fs.readFile(`./Emails/${message.author.id}/email.txt`,'utf8', function(err, data) {
	if(data === message.author.id) return message.channel.send("You already have an email account!")
	if(err) {
		    fs.writeFile(`./Emails/mails/` + what + "@" + message.author.id + ".cord" + "/" + what + "@" + message.author.id + ".cord" + ".txt", `${message.author.id}` ,  function (err) {
			message.channel.send("Success, your email is: " + "'" + what + "@" + message.author.id + ".cord" + "'" )
			});
			   fs.writeFile(`./Emails/${message.author.id}/email.txt`, `${message.author.id}` ,  function (err) {
			if(err) return undefined
			});
			   fs.writeFile(`./Emails/${message.author.id}/mail.txt`, what + "@" + message.author.id + ".cord" ,  function (err) {
			if(err) return undefined
			});
			} 
			});
			}
			});
			
			bot.on('message', message => {
				    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
				if(message.content.startsWith(prefix + "myemail")) {
	let what = args[0]
				var dir = `./Emails/${message.author.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
   }
   var dir2 = `./Emails/mails`;

if (!fs.existsSync(dir2)){
    fs.mkdirSync(dir2);
   }
fs.readFile(`./Emails/${message.author.id}/mail.txt`,'utf8', function(err, data) {
	if(err) return message.channel.send("You don't have an email account")
	message.channel.send("YOUR EMAIL ACCOUNT:" + "\n" + "```" + data + "```" + "\n")
			});
			}
			});
			bot.on('message', message => {
				    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
				if(message.content.startsWith(prefix + "compose")) {
	let what = args[0]
	let mesg = args.slice(1).join(' ')
				var dir = `./Emails/${message.author.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir); 
   }
   var dir2 = `./Emails/mails`;

if (!fs.existsSync(dir2)){
    fs.mkdirSync(dir2);
   }
fs.readFile(`./Emails/${message.author.id}/mail.txt`,'utf8', function(err, data) {
	if(err) return message.channel.send("You don't have an email account")
	fs.readFile(`./Emails/mails/` + what + "/" + what + ".txt", 'utf8', function(err, data2) {
		if(err) return message.channel.send("Email not found")
		fs.readFile(`./Emails/mails/` + what + "/" + message.author.id + ".txt", 'utf8', function(err, data3) {
			if(data3 === 'true') return message.channel.send("Your email could not be delivered because you were blocked by the target")
			fs.readFile(`./Emails/mails/` + what + "/" + "deact" + ".txt", 'utf8', function(err, data4){
				if(data4 === 'true') return message.channel.send("Email is deactivated")
		let wut = bot.users.get(data2).send('EMAIL' + "\n" + "```" + "From:" + data + "```" + "\n" + "```" + "Message:" + "```" + "\n" + mesg)
		if(!wut) return message.channel.send("An error occured")
		message.channel.send("Email sent")
			}); 
			});
			});
			}); 
			}
			});
			bot.on('message', message => {
				    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
				if(message.content.startsWith(prefix + "eblock")) {
	let what = args[0]
				var dir = `./Emails/${message.author.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir); 
   }
   var dir2 = `./Emails/mails`;

if (!fs.existsSync(dir2)){
    fs.mkdirSync(dir2);
   }
      var dir3 = `./Emails/${message.author.id}/b`;

if (!fs.existsSync(dir3)){
    fs.mkdirSync(dir3);
   }
   fs.readFile(`./Emails/mails/${what}/${what}` + ".txt",  'utf8', function(err, data) {
   	if(err) return message.channel.send("Email not found")
   fs.readFile(`./Emails/${message.author.id}/mail.txt`, 'utf8', function(err, data2) {
   	fs.writeFile(`./Emails/mails/` + "/" + data2 + "/" + data + ".txt", 'true', function(err) {
   	if(err) return undefined
   message.channel.send("Email" + "```" + what + "```" + "Was blocked")
      var dir4 = `./Emails/${message.author.id}/b/` + what;

if (!fs.existsSync(dir4)){
    fs.mkdirSync(dir4);
   }
   });
   });
   });
   }
			});
	bot.on('message', message => {
				    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
				if(message.content.startsWith(prefix + "eunb")) {
	let what = args[0]
				var dir = `./Emails/${message.author.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir); 
   }
   var dir2 = `./Emails/mails`;

if (!fs.existsSync(dir2)){
    fs.mkdirSync(dir2);
   }
   fs.readFile(`./Emails/mails/${what}/${what}` + ".txt",  'utf8', function(err, data) {
   	if(err) return message.channel.send("Email not found")
   fs.readFile(`./Emails/${message.author.id}/mail.txt`, 'utf8', function(err, data2) {
   	fs.unlink(`./Emails/mails/` + "/" + data2 + "/" + data + ".txt",  function(err) {
   message.channel.send("Email" + "```" + what + "```" + "was unblocked")
   fs.rmdir(`./Emails/${message.author.id}/b/` + what, function (err) {
   	});
   });
   });
   });
   }
			});
			bot.on('message', message => {
				    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
				if(message.content.startsWith(prefix + "ebb")) {
	let what = args[0]
				var dir = `./Emails/${message.author.id}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir); 
   }
   var dir2 = `./Emails/mails`;

if (!fs.existsSync(dir2)){
    fs.mkdirSync(dir2);
   }
fs.readdir(`./Emails/${message.author.id}/b/`, function(err, items) {
	if(err) return message.channel.send("None")
	message.channel.send("```" + items + "```")
	});
   }
			});
			bot.on('message', message => {
				    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
				if(message.content.startsWith(prefix + "edeactivate")) {
   fs.readFile(`./Emails/${message.author.id}/mail.txt`, 'utf8', function(err, data2) {
   	fs.writeFile(`./Emails/mails/` + "/" + data2 + "/" + "deact" + ".txt", 'true', function(err) {
   	if(err) return undefined
   message.channel.send("Your Email was deactivated")
   });
   });
   }
			});
			bot.on('message', message => {
				    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
				if(message.content.startsWith(prefix + "eacti")) {
   fs.readFile(`./Emails/${message.author.id}/mail.txt`, 'utf8', function(err, data2) {
   	fs.unlink(`./Emails/mails/` + "/" + data2 + "/" + "deact" + ".txt",  function(err) {
   	if(err) return message.channel.send("Email isn't deactivatez")
   message.channel.send("Your Email was activated")
   });
   });
   }
			});
bot.login(botSettings.token)

    