//---------------------------------------------------------------------------
const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Secktor = require('../lib')
const Config = require('../config')
const { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, fetchJson,cmd, sck1 } = require("../lib");
let gis = require("g-i-s");
const axios = require('axios')
const speed = require('performance-now')
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)

Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        await citel.reply('*_Pinging Dragon-MD-V3 ❗_*');
        var final = new Date().getTime();
        return await citel.reply('☢️ *ꜱᴘᴇᴇᴅ*\n ' + (final - inital) + ' ms');
    }
);


Secktor.cmd({
            pattern: "system",
            desc: "Help list",
            category: "general",
            react: "🐲",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            var inital = new Date().getTime();
            await citel.reply(`*_Testing System Status of 🐉 Dragon-MD-V3 ❗_*`);
                var final = new Date().getTime();
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const uptime = process.uptime();
                timestampe = speed();
                latensie = speed() - timestampe;
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/COLOMBO')
                    .locale('id')
                const date = moment.tz('Asia/Colombo').format('DD/MM/YYYY')
                let str = `⚕️ Dragon MD System Status ⚕\n\n`
                str += 
                `☢️ *ꜱᴘᴇᴇᴅ :-* ${latensie.toFixed(4)} ms
⏱️ *ᴜᴘᴛɪᴍᴇ :-* ${runtime(process.uptime())} 
📟 *ᴍᴇᴍᴏʀʏ ᴜꜱᴀɢᴇ :-* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
📆 *ᴅᴀᴛᴇ :-* ${date}
⏰ *ᴛɪᴍᴇ :-* ${time}
🧬 *ᴠᴇʀᴛɪᴏɴ :-* 3.0.1

*🐉Powered by ᴅʀᴀɢᴏɴ-ᴍᴅ*`

                let generatebutton = [{
                    buttonId: `${prefix}dev`,
                    buttonText: {
                        displayText: '👨‍💻 ᴅᴇᴠᴇʟᴏᴘᴇʀ 🐉'
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
    )