import { Client } from 'discord.js'
import Welcome from './welcome.js'
import { registerFont } from 'canvas'
import { join } from 'path'
import fetch from 'node-fetch'
const prefix = '!'
import dot from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
dot.config()

const client = new Client({
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,
    },
    intents: [
        "GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS",

    ],
});

client.on("ready", async () => {
    console.log(`BARBARA C6 REVIVED YOU ${client.user.tag}`);
    const channelId = process.env.CHANNEL;
    Welcome(client);
    function fontFile(name) {
        return join(__dirname, '/fonts/', name)
    }
    registerFont(fontFile('OmniversifyGenshin.ttf'), { family: 'OmniversifyGenshinImpact' })


    const channel = client.channels.cache.get(channelId);
    channel.send({ content: "I'M BACK", files: ['./back.gif',] });
})

client.on('messageCreate', async (message) => {
    //if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.author.bot) return;
    //const args = message.content.slice(prefix.length).split(/ +/);
    //const command = args.shift().toLowerCase();

    if (message.content.startsWith('!gif')) {
        const tokens = message.content.concat(" Genshin").split(" ")


        const keywords = tokens.slice(1, tokens.length)
        const url = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.TENOR}&limit=10`
        const response = await fetch(url)
        const result = await response.json()
        console.log(keywords);

        message.channel.send(result.results[Math.floor(Math.random() * result.results.length)].url)
    }
    if (!message.content.startsWith(prefix)) {
        if (message.content.includes('barbara gifs')) {
            const randomBarbara = barbara[Math.floor(Math.random() * barbara.length)]
    
            message.reply(randomBarbara)
        };
        if (message.content.includes('yoimiya') || message.content.includes('yoimia')) {
            message.reply('have you seen yoimiya\'s AoE dmg??? it\'s fucking op')
        };
        if (message.content.includes('xiangling') || message.content.includes('xl')) {
            message.reply('xl<<<<<<<<<<<')
        };
        if (message.content.includes('fischl')) {
            message.reply('9olo l salah fischl is trash')
        };
        if (message.content.includes('simo') || message.content.includes('soper')) {
            message.reply('yo yo waririz, m3akom simo soper, smiyti b zblyonia alejandro rodriguez gonzalez el torito')
        };
        if (message.content.includes('ghassan') || message.content.includes('ghassane')) {
            message.reply('ra7 lghali ra7, ra7 kazuha ra7, ra7 redhorn ra7, ra7t yelan ra7t')
        };
        if (message.content.includes('klee')) {
            message.reply('klee boom boom bakudan - mini kim jun un / da3ich')
        };
        if (message.content.includes('eula')) {
            message.reply('A tier, 7it no elemental reactions')
        };
        if (message.content.includes('yanfei')) {
            message.reply('yanfei best girl (flat but cute)')
        };
        if (message.content.includes('bennet') || message.content.includes('bennett')) {
            message.reply('mouhsine o bennet twam o zid 3lihom phaylali fl emblem')
        };
        if (message.content.includes('kazuha')) {
            message.reply('ra7 lghali ra7')
        };
        if (message.content.includes('shogun')  || message.content.includes('raiden')) {
            message.reply('lalak Raiden Ei Shogun')
        }
        if (message.content.includes('barbara')) {
            message.reply('Barbara is God tier')
        };
        if (message.content.includes('xingqiu')|| message.content.includes('xingqui')) {
            message.reply('xingqui\'s pronouns are ns/ns')
        };
        if (message.content.includes('albedo')) {
            message.reply('more like alpedo, stay away from klee')
        };
        if (message.content.includes('itto')) {
            message.reply('his cow does more damage than him')
        };
        if (message.content.includes('razor')) {
            message.reply('goodest boy')
        };
        if (message.content.includes('xinyan')) {
            message.reply('who?')
        };
        if (message.content.includes('diona')) {
            message.reply('annoying lil bish, nobody cares about destroying the wine industry')
        };
        if (message.content.includes('childe')) {
            message.reply('zhongli\'s wallet')
        };
        if (message.content.includes('sucrose')) {
            message.reply('why is she sucking roses?')
        };
        if (message.content.includes('noelle')) {
            message.reply('kay3jbouk lkhdamat yak?')
        };
        if (message.content.includes('ninguang')) {
            message.reply('bnt lfchouch')
        };
        if (message.content.includes('amber')) {
            message.reply('are we seriously talking about amber?')
        };
        if (message.content.includes('lisa')) {
            message.reply('mommy? sorry! mommy? sorry!, let\'s climb a mountain for no reason')
        };
        if (message.content.includes('kaeya')) {
            message.reply('where them constellations bruh')
        };
        if (message.content.includes('chongyun')) {
            message.reply('ma3andich msasa')
        };
        if (message.content.includes('zhongli')) {
            message.reply('rock')
        };
        if (message.content.includes('xiao')) {
            message.reply('up, down, up, down, up, down, jatni doukha')
        };
        if (message.content.includes('venti')) {
            message.reply('gaaaaaaaayyyyyyyyyyyyyyy')
        };
        if (message.content.includes('qiqi')) {
            message.reply('may qiqi curse your pity')
        };
        if (message.content.includes('mona')) {
            message.reply('broke ass bish, kadir dart m3a jiran, tsr9hom o thrb')
        };
        if (message.content.includes('keqing')) {
            message.reply('keqing mains are the weirdest')
        };
        if (message.content.includes('jean')) {
            message.reply('the Acting Grand Master of the Gays of Favonius')
        };
        if (message.content.includes('beidu')|| message.content.includes('beidou')) {
            message.reply('are you into women who will dominate you?')
        };
        if (message.content.includes('diluc')) {
            message.reply('diluc lkhanz')
        };
        if (message.content.includes('sayu')) {
            message.reply('let the girl sleep bruuuuuuh')
        };
        if (message.content.includes('rosaria')) {
            message.reply('you\'re into toxic girls, aren\'t you?')
        };
        if (message.content.includes('yunjin')|| message.content.includes('yun jin')) {
            message.reply('no offense but why does she sound like a dying bird?')
        };
        if (message.content.includes('gorou')|| message.content.includes('gourou')|| message.content.includes('gouro')|| message.content.includes('goru')) {
            message.reply('what a nasty dog?, itto\'s sidechick')
        };
        if (message.content.includes('ganyu')) {
            message.reply('GUN YOU, give qiqi a bottle of cocogoat milk')
        };
        if (message.content.includes('aloy')) {
            message.reply('stfu, nobody wants to hear anything about aloy')
        };
        if (message.content.includes('shenhe')) {
            message.reply('cryo mommy? sorry, cryo mommy? sorry')
        };
        if (message.content.includes('thoma')) {
            message.reply('useleeeeeeeeeeeeess')
        };
        if (message.content.includes('kuki')) {
            message.reply('sm7at f9raytha o tb3at asdi9a2 sou2')
        };
        if (message.content.includes('yae') || message.content.includes('miko')) {
            message.reply('the other electro mommy? sorry!!!')
        };
        if (message.content.includes('sara')) {
            message.reply('how did sara beat itto?')
        };
        if (message.content.includes('ayato')) {
            message.reply('I trust yae when she said he\'s evil')
        };
        if (message.content.includes('ayaka')) {
            message.reply('who doesn\'t have ayaka? b7ala b7al la carte national')
        };
        if (message.content.includes('hutao')) {
            message.reply('Who? Tao, waiting for you to die')
        };
        if (message.content.includes('kazuha')) {
            message.reply('mama mama rani ghadi ghadi, mama mama ghadi jwal, dayr saki fktafi, o baghi n3rf 7a9 rjal mama mama ha mama')
        };
        if (message.content.includes('kokomi')) {
            message.reply('do you mean cockomi? can\'t even revive')
        };
        if (message.content.includes('yelan')) {
            message.reply('chti li kayskippi yelan achkayw9a3lo?')
        };
        if (message.content.includes('anass') || message.content.includes('anas') ) {
            message.reply('9olo l anas ykhtar wa7da, beidu wla yoimiya?')
        };
    }

    



})

const barbara = ["https://c.tenor.com/mTlZdIeQH2sAAAAC/barbara-genshin-impact.gif", "https://c.tenor.com/QSx47PIsUQ4AAAAd/genshin.gif", "https://c.tenor.com/4KaP9Qyfv3AAAAAd/barbara-genshin.gif", "https://c.tenor.com/V5cg3z9nqscAAAAM/genshin-impact.gif", "https://c.tenor.com/fp7fWugF1awAAAAC/mihoyo-genshin.gif", "https://c.tenor.com/504bpDDh8BYAAAAd/genshin-impact.gif", "https://c.tenor.com/Zy6zaXkrFIgAAAAM/barbara-genshin.gif"]



client.login(process.env.TOKEN)