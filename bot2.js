const Discord = require('discord.js');
var auth = require('./auth.json');
const client = new Discord.Client();
const Tenor = require("tenorjs").client({
    "Key": "6FVRRPVVPSOL", // https://tenor.com/developer/keyregistration
    "Filter": "off", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
    "MediaFilter": "minimal", // either minimal or basic, not case sensitive
    "DateFormat": "D/MM/YYYY - H:mm:ss A" // Change this accordingly
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const nb = ['厉害', '牛逼', 'nb'];
client.on('message', msg => {
    // console.log(msg.author.id);
    if (nb.some(r=>msg.content.includes(r))) {
        a = ['./resume.gif', './knowledge.png'];
        var rv = a[Math.floor(Math.random() * a.length)];
        msg.channel.send({ files: [rv] });
    }
    if (msg.author.id == 292431364387766272) {
        let chance = Math.random();
        if (chance < 0.2){
            msg.channel.send("腹黑<3");
        }
        else if (chance < 0.4){
            msg.channel.send("腹黑闭嘴");
        }
    }
    if (msg.author.id == 393643156781924363) {
        if (Math.random() < 0.4){
            msg.channel.send("老婆爱你哦❤️");
        }
    }
    if (msg.content.includes('https://tenor.com/view/')) {
        //extract keywords
        let pos = msg.content.indexOf('-gif');
        let keys = msg.content.slice(23, pos).split('-');
        let ra = keys[Math.floor(Math.random() * keys.length)];
        Tenor.Search.Random(ra, "1").then(Results => {
            msg.channel.send(Results[0].url);
            // Results.forEach(Post => {

            //       console.log(`Item ${Post.id} (Created: ${Post.created}) @ ${Post.url}`);
            // });
        }).catch(console.error);
    }
});

client.login(auth.token);