const Discord = require("discord.js");

const config = require("./config.json");

var bot = new Discord.Client();

bot.on("ready", function(Message) {
    console.log("AlphaBOT Beta Online!")
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome-channel").sendMessage("welcome to the server " + member.toString() + " type >help for commands");
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (!message.content.startsWith(config.PREFIX)) return;

    var args = message.content.substring(config.PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "test":
            message.channel.sendMessage("positive");
            break;
        //
        case "help":
            var embed = new Discord.RichEmbed()
                .addField("AlphaBOT source", "what a skidd, lel")
                .addField(">test", "tests if bot is online/working correctly")
                .addField(">help", "shows bot commands")
                .addField(">ping", "pong!")
                .setFooter("chill there will be more commands in the future dammit")
                .setColor(0xff0000)
            message.channel.sendEmbed(embed);
            break;
            //
        case "ping":
        message.channel.sendMessage("pong!")
        break;
        // more commands and stuff coming in the future! be sure to subscribe to me at NebularZero on YouTube;)
        };
    });
bot.login(config.TOKEN)
