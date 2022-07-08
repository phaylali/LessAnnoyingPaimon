import generateImage from "./generateimage.js";


export default async (client) => {
    const channelId= process.env.CHANNEL;
    const rolesChannel=process.env.ROLES;
    const rulesChannel=process.env.RULES;
    client.on("guildMemberAdd",async (member)=>{
console.log("someone has entered the shit");
const img = await generateImage(member)
const message = `Welcome Noob <@${member.id}> to The Cursed Lands of Teyvat, Pick Your ${member.guild.channels.cache.get(rolesChannel).toString()}, Remember to Read The ${member.guild.channels.cache.get(rulesChannel).toString()}`;
const channel = member.guild.channels.cache.get(channelId);
channel.send({content: message, files: [img]});
})
}

