var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    console.log(message);
    console.log(user);
    console.log(userID);
    if (message.includes('厉害')) {
        bot.uploadFile({ to: channelID, file: "./resume.gif" });
    }
    if (userID == 292431364387766272){
        bot.sendMessage({
            to: channelID,
            message: '腹黑闭嘴'
        });
    }
    // if (message.substring(0, 1) == '!') {
    //     var args = message.substring(1).split(' ');
    //     var cmd = args[0];

    //     args = args.splice(1);
    //     switch(cmd) {
    //         // !ping
    //         case 'ping':
    //             bot.sendMessage({
    //                 to: channelID,
    //                 message: 'Pong!'
    //             });
    //         break;
    //         // Just add any case commands if you want to..
    //      }
    //  }
});