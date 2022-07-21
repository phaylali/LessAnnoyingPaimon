import { createCanvas, loadImage } from 'canvas'
import { AttachmentBuilder } from 'discord.js'
const achievement = "https://i.imgur.com/ddv7j8o.png"

const dim = {
    height: 348,
    width: 1472,
    margin: 20
    }


const generateImage = async (member) => {
    let username = member.user.username
    
    const canvas = createCanvas(dim.width,dim.height)
    const ctx = canvas.getContext("2d")
    const backimg = await loadImage(achievement)
    ctx.drawImage(backimg,0,0)
    const avimg = await loadImage(member.user.displayAvatarURL({format: "png", size: 512}))
    ctx.drawImage(avimg, 195, 130,100,100)
    ctx.fillStyle = "black"
    ctx.font = '46pt OmniversifyFonts'
    ctx.fillText(username, 890, 255);
    const attachment  = new AttachmentBuilder(canvas.toBuffer(), "welcome.png")
return attachment

}
export default generateImage