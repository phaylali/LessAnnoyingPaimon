

module.exports= client => {
    const channelId= process.env.CHANNEL;
    const rulesChannel=process.env.RULES;
    client.on("guildMemberAdd",(member)=>{
console.log("someone has entered the shit");
const message = 'Welcome <@${member.id}> to the cursed lands of Tevyat, don\'t forget to pick a role at ${member.guild.channels.cache.get(rulesChannel).toString()}';
const channel = member.guild.channels.cache.get(channelId);
channel.send(message);
})
}