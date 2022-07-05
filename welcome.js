

module.exports= client => {
    const channelId= "992814841611956234";
    const rulesChannel="992814842748612618";
    client.on("guildMemberAdd",(member)=>{
console.log("someone has entered the shit");
const message = 'Welcome <@${member.id}> to the cursed lands of Tevyat, don\'t forget to pick a role at ${member.guild.channels.cache.get(rulesChannel).toString()}';
const channel = member.guild.channels.cache.get(channelId);
channel.send(message);
})
}