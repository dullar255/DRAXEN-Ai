import moment from 'moment-timezone'; import axios from 'axios'; import config from '../config.cjs'; import os from 'os'; import pkg from '@whiskeysockets/baileys'; const { generateWAMessageFromContent, proto } = pkg;

const uptime = process.uptime(); const day = Math.floor(uptime / (24 * 3600)); const hours = Math.floor((uptime % (24 * 3600)) / 3600); const minutes = Math.floor((uptime % 3600) / 60); const seconds = Math.floor(uptime % 60);

const time2 = moment().tz("Africa/Dar_es_Salaam").format("HH:mm:ss"); let pushwish = "";

if (time2 < "05:00:00") pushwish = Good Morning 🌄; else if (time2 < "11:00:00") pushwish = Good Morning 🌄; else if (time2 < "15:00:00") pushwish = Good Afternoon 🌅; else if (time2 < "19:00:00") pushwish = Good Evening 🌃; else pushwish = Good Night 🌌;

const menu = async (m, Matrix) => { const prefix = config.PREFIX; const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : ''; const mode = config.MODE === 'public' ? 'public' : 'private';

const validCommands = ['list', 'help', 'menu'];

if (validCommands.includes(cmd)) { const mainMenu = ` ╭━━━〔 ${config.BOT_NAME} 〕━━━┈⊷ ┃★╭────────────── ┃★│ Owner : ${config.OWNER_NAME} ┃★│ User : ${m.pushName} ┃★│ Baileys : Multi Device ┃★│ Type : NodeJs ┃★│ Mode : ${mode} ┃★│ Platform : ${os.platform()} ┃★│ Prefix : [${prefix}] ┃★│ Version : 3.1.0 ┃★╰────────────── ╰━━━━━━━━━━━━━━━┈⊷

> ${pushwish} ${m.pushName}!



╭━━〔 Menu List 〕━━┈⊷ ┃◈╭─────────────·๏ ┃◈┃• 1. Download Menu
┃◈┃• 2. Converter Menu
┃◈┃• 3. AI Menu
┃◈┃• 4. Tools Menu
┃◈┃• 5. Group Menu ┃◈┃• 6. Search Menu
┃◈┃• 7. Main Menu ┃◈┃• 8. Owner Menu ┃◈┃• 9. Stalk Menu
┃◈┃• update ┃◈└───────────┈⊷ ╰──────────────┈⊷

> Reply with the number (1-9)`;



const getMenuImage = async () => {
  try {
    const response = await axios.get('https://files.catbox.moe/n5tgsm.jpg', { responseType: 'arraybuffer' });
    return Buffer.from(response.data, 'binary');
  } catch (error) {
    console.error('Error fetching menu image:', error);
    return null;
  }
};

const menuImage = await getMenuImage();

const sentMessage = await Matrix.sendMessage(m.from, {
  image: menuImage,
  caption: mainMenu,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    externalAdReply: {
      mediaUrl: "https://chat.whatsapp.com/Dg9rNdDl1HBJ12LnOmH0oD",
      mediaType: 2,
      description: "Join Draxen Ai Official WhatsApp Group",
      title: "Draxen Ai",
      body: "Powered by Draxen Ai",
      thumbnail: menuImage
    }
  }
}, {
  quoted: m
});

Matrix.ev.on('messages.upsert', async (event) => {
  const receivedMessage = event.messages[0];
  if (!receivedMessage?.message?.extendedTextMessage) return;

  const receivedText = receivedMessage.message.extendedTextMessage.text.trim();
  if (receivedMessage.message.extendedTextMessage.contextInfo?.stanzaId !== sentMessage.key.id) return;

  let menuTitle = "", menuResponse = "";

  switch (receivedText) {
    case "1":
      menuTitle = "Download Menu";
      menuResponse = `

╭━━〔 Download Menu 〕━━┈⊷ ┃◈┃• apk ┃◈┃• facebook ┃◈┃• mediafire ┃◈┃• pinterestdl ┃◈┃• gitclone ┃◈┃• gdrive ┃◈┃• insta ┃◈┃• ytmp3 ┃◈┃• ytmp4 ┃◈┃• play ┃◈┃• song ┃◈┃• video ┃◈┃• ytmp3doc ┃◈┃• ytmp4doc ┃◈┃• tiktok; break; case "2": menuTitle = "Converter Menu"; menuResponse =  ╭━━〔 Converter Menu 〕━━┈⊷ ┃◈┃• attp ┃◈┃• attp2 ┃◈┃• attp3 ┃◈┃• ebinary ┃◈┃• dbinary ┃◈┃• emojimix ┃◈┃• mp3; break; case "3": menuTitle = "AI Menu"; menuResponse =  ╭━━〔 AI Menu 〕━━┈⊷ ┃◈┃• ai ┃◈┃• bug ┃◈┃• report ┃◈┃• gpt ┃◈┃• dalle ┃◈┃• remini ┃◈┃• gemini; break; case "4": menuTitle = "Tools Menu"; menuResponse =  ╭━━〔 Tools Menu 〕━━┈⊷ ┃◈┃• calculator ┃◈┃• tempmail ┃◈┃• checkmail ┃◈┃• trt ┃◈┃• tts; break; case "5": menuTitle = "Group Menu"; menuResponse =  ╭━━〔 Group Menu 〕━━┈⊷ ┃◈┃• linkgroup ┃◈┃• setppgc ┃◈┃• setname ┃◈┃• setdesc ┃◈┃• group ┃◈┃• gcsetting ┃◈┃• welcome ┃◈┃• add ┃◈┃• kick ┃◈┃• hidetag ┃◈┃• tagall ┃◈┃• antilink ┃◈┃• antitoxic ┃◈┃• promote ┃◈┃• demote ┃◈┃• getbio; break; case "6": menuTitle = "Search Menu"; menuResponse =  ╭━━〔 Search Menu 〕━━┈⊷ ┃◈┃• play ┃◈┃• yts ┃◈┃• imdb ┃◈┃• google ┃◈┃• gimage ┃◈┃• pinterest ┃◈┃• wallpaper ┃◈┃• wikimedia ┃◈┃• ytsearch ┃◈┃• ringtone ┃◈┃• lyrics; break; case "7": menuTitle = "Main Menu"; menuResponse =  ╭━━〔 Main Menu 〕━━┈⊷ ┃◈┃• ping ┃◈┃• alive ┃◈┃• owner ┃◈┃• menu ┃◈┃• infobot; break; case "8": menuTitle = "Owner Menu"; menuResponse =  ╭━━〔 Owner Menu 〕━━┈⊷ ┃◈┃• join ┃◈┃• leave ┃◈┃• block ┃◈┃• unblock ┃◈┃• setppbot ┃◈┃• anticall ┃◈┃• setstatus ┃◈┃• setnamebot ┃◈┃• autotyping ┃◈┃• alwaysonline ┃◈┃• autoread ┃◈┃• autosview; break; case "9": menuTitle = "Stalk Menu"; menuResponse =  ╭━━〔 Stalk Menu 〕━━┈⊷ ┃◈┃• truecaller ┃◈┃• instastalk ┃◈┃• githubstalk`; break; default: menuTitle = "Invalid Choice"; menuResponse = "Invalid Reply Please Reply With A Number Between 1 to 9"; }

const fullResponse = `

╭━━━〔 ${config.BOT_NAME} - ${menuTitle} 〕━━━┈⊷ ┃★ Owner : ${config.OWNER_NAME} ┃★ User : ${m.pushName} ┃★ Prefix : [${prefix}] ┃★ Version : 3.1.0 ╰━━━━━━━━━━━━━━━┈⊷

${menuResponse}`;

await Matrix.sendMessage(m.from, {
    image: menuImage,
    caption: fullResponse,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://chat.whatsapp.com/Dg9rNdDl1HBJ12LnOmH0oD",
        mediaType: 2,
        description: "Join Draxen Ai Official WhatsApp Group",
        title: "Draxen Ai",
        body: "Powered by Draxen Ai",
        thumbnail: menuImage
      }
    }
  }, {
    quoted: receivedMessage
  });
});

} };

export default menu;

