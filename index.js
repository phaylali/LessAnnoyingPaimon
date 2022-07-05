import { Client } from 'discord.js';
import welcome from './welcome';
const prefix = '!';
require("dotenv").config();
const client = new Client({
allowedMentions:{
    parse:['users','roles'],
    repliedUser: true,
},
intents:[
    "GUILDS","GUILD_MESSAGES","GUILD_PRESENCES","GUILD_MEMBERS","GUILD_MESSAGE_REACTIONS",

],
});

client.on("ready",()=>{
console.log("BOT IS ONLINE");
welcome(client);
})

client.on('message', message =>{
    //if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
if (command === 'fuckyou'){
message.reply('Go touch some grass you fucking weeb')
};
if(message.content.includes('barbara') && !message.author.bot){
    message.reply('barbara is God Tier')
};
})

client.login(process.env.TOKEN)