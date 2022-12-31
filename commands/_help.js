const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
            react: "📜",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/COLOMBO')
                    .locale('id')
                const date = moment.tz('Asia/Colombo').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = ` ┏━━━━ ❲ ` + fancytext(Config.ownername.split(' ')[0], 58) + ` ❳ ━━━━━┉◈\n`
                str +=
                    `┣━◉
┗━「 Hi 👋 , ${citel.pushName} 」
┏┫✑  How Are You? 🤭
┇┗━━━━━━━━━━━━┉◈
┗━「 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 」       
    ┇✘ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
    ┇✘ᴅᴀᴛᴇ : ${date}
    ┇✘ᴛɪᴍᴇ : ${time}
    ┇✘ʙᴏᴛ ɴᴀᴍᴇ : Dragon MD V3
    ┋✘ᴄᴏᴍᴍᴀɴᴅꜱ : ${commands.length}
    ┋✘ᴍᴇᴍᴏʀʏ ᴜꜱᴀɢᴇ : ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
    ┋✘ʟᴀɴɢᴜᴀɢᴇ : ${tlang().lang}
    ┋✘ᴄᴏᴍᴍᴀɴᴅ ᴘʀᴇꜰɪx : [ ${prefix} ]
    ┋✘ʙᴏᴛ ᴜꜱᴇʀꜱ : ${total}
    ┇✘ᴏᴡɴᴇʀ ɴᴀᴍᴇ :${Config.ownername}
    ┋✘ᴅᴇᴠᴇʟᴏᴘᴇʀ ɴᴀᴍᴇ : ៚֟ᴍ֢ʀͥ.ᴀͣᴍͫɪʏ͙ᴀ֮༒֘ᴏꜰ̐̈́ᴄ֮༒֘ʏᴛ͢⁸⁵⁴¹༆࿐
    ┇✘ᴏᴡɴᴇʀ ɴᴏ : +94767453646
    ┇✘ʜᴏꜱᴛ ɴᴀᴍᴇ : Dragon MD DB
┏━┫✘ᴘʟᴀᴛꜰᴏʀᴍ : Linux
┇  ┗━━━━━━━━━━━━┉ ⳹
┗━「 🎊 Please Subscribe This Channel 🎊 」
   ┇ https://youtube.com/@Dragon-MD-OFC
   ┗┳━━━━━━━━━━━━┉ ⳹
       ┇✑  Please Select
       ┇✑  The Command from, Below
       ┗━━━━━━━━━━━━━┉◈\n
`
                str += `◉┈──『 ` + fancytext('Commands', 57) + `』──┈◉`
                for (const category in cmds) {
                    str += `\n\n┏━━━❐ ❰ ✪『 ${tiny(category)} 』✪ ❱ ━━❐
┃\n`
                    for (const plugins of cmds[category]) {
                        str += `┇ ❂➻✯ ${prefix}${plugins}\n`
                    }
                    str += `┇\n┗━━━━━━━━━━━━━❏`
                }

                    str += `\n`
                let generatebutton = [{
                    buttonId: `${prefix}owner`,
                    buttonText: {
                        displayText: '🤵 ᴏᴡɴᴇʀ'
                    },
                    type: 1
                }, {
                    buttonId: `${prefix}list`,
                    buttonText: {
                        displayText: '📃 ʟɪꜱᴛ ᴍᴇɴᴜ'
                    },
                    type: 1
                }, {
                    buttonId: `${prefix}system`,
                    buttonText: {
                        displayText: '⚕ ʙᴏᴛ ꜱᴛᴀᴛᴜꜱ ⚕️'
                    },
                    type: 1
                }]
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4,
                    buttons: generatebutton
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general",
            react: "🐉"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙━━──⊷`
            str += '```' + `
┃ ⛥╭──────────────      
┃ ⛥│ User: ${citel.pushName}
┃ ⛥│ Theme: ${tlang().title}
┃ ⛥│ Prefix: ${prefix}
┃ ⛥│ Owner: ${Config.ownername}
┃ ⛥│ Commands: ${commands.length}
┃ ⛥│ Uptime: ${runtime(process.uptime())}
┃ ⛥│ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃ ⛥│  
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷\n` + '```'
            str += `╭━━━━━━━━━━━────⊷\n`
            str += `┃ ⛥ ╭─────────────\n`
            for (let i = 0; i < commands.length; i++) {
             if(commands[i].pattern==undefined) continue
                str += `┃ ⛥ │ ➛ ${i+1}. ` + commands[i].pattern + '\n'
            }
            str += `┃ ⛥ ╰─────────────\n`
            str += `╰━━━━━━━━━━━───⊷\n`
            return Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To check ping",
        category: "general",
        react: "🤵",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)


Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo any user can edit that.",
    category: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return await citel.reply(arr.join('\n'));


})
