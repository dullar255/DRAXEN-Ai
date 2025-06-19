import moment from 'moment-timezone'; import fs from 'fs'; import os from 'os'; import pkg from '@whiskeysockets/baileys'; const { generateWAMessageFromContent, proto } = pkg; import config from '../config.cjs'; import axios from 'axios';

// Get total memory and free memory in bytes const totalMemoryBytes = os.totalmem(); const freeMemoryBytes = os.freemem();

// Define unit conversions const byteToKB = 1 / 1024; const byteToMB = byteToKB / 1024; const byteToGB = byteToMB / 1024;

function formatBytes(bytes) { if (bytes >= Math.pow(1024, 3)) { return (bytes * byteToGB).toFixed(2) + ' GB'; } else if (bytes >= Math.pow(1024, 2)) { return (bytes * byteToMB).toFixed(2) + ' MB'; } else if (bytes >= 1024) { return (bytes * byteToKB).toFixed(2) + ' KB'; } else { return bytes.toFixed(2) + ' bytes'; } }

const uptime = process.uptime(); const day = Math.floor(uptime / (24 * 3600)); const hours = Math.floor((uptime % (24 * 3600)) / 3600); const minutes = Math.floor((uptime % 3600) / 60); const seconds = Math.floor(uptime % 60);

const xtime = moment.tz("Africa/Dar_es_Salaam").format("HH:mm:ss"); const xdate = moment.tz("Africa/Dar_es_Salaam").format("DD/MM/YYYY"); const time2 = moment().tz("Africa/Dar_es_Salaam").format("HH:mm:ss"); let pushwish = "";

if (time2 < "05:00:00") pushwish = Good Morning 🌄; else if (time2 < "11:00:00") pushwish = Good Morning 🌄; else if (time2 < "15:00:00") pushwish = Good Afternoon 🌅; else if (time2 < "19:00:00") pushwish = Good Evening 🌃; else pushwish = Good Night 🌌;

const menu = async (m, Matrix) => { const prefix = config.PREFIX; const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : ''; const mode = config.MODE === 'public' ? 'public' : 'private';

const validCommands = ['fullmenu', 'menu2', 'listcmd']; if (!validCommands.includes(cmd)) return;

const str = ` ╭━━━〔 ${config.BOT_NAME} 〕━━━┈⊷ ┃★╭────────────── ┃★│ Owner : ${config.OWNER_NAME} ┃★│ User : ${m.pushName} ┃★│ Baileys : Multi Device ┃★│ Type : NodeJs ┃★│ Mode : ${mode} ┃★│ Platform : ${os.platform()} ┃★│ Prefix : [${prefix}] ┃★│ Version : 3.1.0 ┃★╰────────────── ╰━━━━━━━━━━━━━━━┈⊷

> ${pushwish} ${m.pushName}!



╭━━〔 Download Menu 〕━━┈⊷ ┃◈┃• apk • facebook • mediafire • pinterestdl • gitclone • gdrive • insta • ytmp3 • ytmp4 • play • song • video • ytmp3doc • ytmp4doc • tiktok ╰──────────────┈⊷ ╭━━〔 Converter Menu 〕━━┈⊷ ┃◈┃• attp • attp2 • attp3 • ebinary • dbinary • emojimix • mp3 ╰──────────────┈⊷ ╭━━〔 AI Menu 〕━━┈⊷ ┃◈┃• ai • bug • report • gpt • dalle • remini • gemini ╰──────────────┈⊷ ╭━━〔 Tools Menu 〕━━┈⊷ ┃◈┃• calculator • tempmail • checkmail • trt • tts ╰──────────────┈⊷ ╭━━〔 Group Menu 〕━━┈⊷ ┃◈┃• linkgroup • setppgc • setname • setdesc • group • gcsetting • welcome • add • kick • hidetag • tagall • antilink • antitoxic • promote • demote • getbio ╰──────────────┈⊷ ╭━━〔 Search Menu 〕━━┈⊷ ┃◈┃• play • yts • imdb • google • gimage • pinterest • wallpaper • wikimedia • ytsearch • ringtone • lyrics ╰──────────────┈⊷ ╭━━〔 Main Menu 〕━━┈⊷ ┃◈┃• ping • alive • owner • menu • infobot ╰──────────────┈⊷ ╭━━〔 Owner Menu 〕━━┈⊷ ┃◈┃• join • leave • block • unblock • setppbot • anticall • setstatus • setnamebot • autotyping • alwaysonline • autoread • autosview ╰──────────────┈⊷ ╭━━〔 Stalk Menu 〕━━┈⊷ ┃◈┃• truecaller • instastalk • githubstalk ╰──────────────┈⊷

> ${config.DESCRIPTION}`;



let menuImage; if (config.MENU_IMAGE && config.MENU_IMAGE.trim() !== '') { try { const response = await axios.get(config.MENU_IMAGE, { responseType: 'arraybuffer' }); menuImage = Buffer.from(response.data, 'binary'); } catch (error) { console.error('Error fetching menu image from URL:', error); menuImage = fs.readFileSync('./media/draxen.jpg'); } } else { menuImage = fs.readFileSync('./media/draxen.jpg'); }

await Matrix.sendMessage(m.from, { image: menuImage, caption: str, contextInfo: { mentionedJid: [m.sender], forwardingScore: 999, isForwarded: true, externalAdReply: { title: "Draxen Ai Official", body: "Join Our WhatsApp Group", mediaUrl: "https://chat.whatsapp.com/Dg9rNdDl1HBJ12LnOmH0oD", mediaType: 2, showAdAttribution: true, sourceUrl: "https://chat.whatsapp.com/Dg9rNdDl1HBJ12LnOmH0oD", thumbnail: menuImage } } }, { quoted: m }); };

export default menu;

