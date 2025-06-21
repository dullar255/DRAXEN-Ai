const settings = require("./settings");
require('./config.js');
const {
  isBanned
} = require("./lib/isBanned");
const fs = require('fs');
const {
  addWelcome,
  delWelcome,
  isWelcomeOn,
  addGoodbye,
  delGoodBye,
  isGoodByeOn
} = require("./lib/index");
const tagAllCommand = require("./commands/tagall");
const helpCommand = require("./commands/help");
const banCommand = require("./commands/ban");
const {
  promoteCommand
} = require("./commands/promote");
const {
  demoteCommand
} = require('./commands/demote');
const muteCommand = require('./commands/mute');
const unmuteCommand = require("./commands/unmute");
const stickerCommand = require("./commands/sticker");
const isAdmin = require("./lib/isAdmin");
const warnCommand = require("./commands/warn");
const warningsCommand = require('./commands/warnings');
const ttsCommand = require("./commands/tts");
const {
  tictactoeCommand,
  handleTicTacToeMove
} = require("./commands/tictactoe");
const {
  incrementMessageCount,
  topMembers
} = require("./commands/topmembers");
const ownerCommand = require('./commands/owner');
const deleteCommand = require('./commands/delete');
const {
  handleAntilinkCommand,
  handleLinkDetection
} = require('./commands/antilink');
const {
  Antilink
} = require("./lib/antilink");
const memeCommand = require("./commands/meme");
const tagCommand = require("./commands/tag");
const jokeCommand = require("./commands/joke");
const quoteCommand = require("./commands/quote");
const factCommand = require("./commands/fact");
const weatherCommand = require("./commands/weather");
const newsCommand = require("./commands/news");
const kickCommand = require('./commands/kick');
const simageCommand = require("./commands/simage");
const attpCommand = require("./commands/attp");
const {
  startHangman,
  guessLetter
} = require("./commands/hangman");
const {
  startTrivia,
  answerTrivia
} = require("./commands/trivia");
const {
  complimentCommand
} = require("./commands/compliment");
const {
  insultCommand
} = require("./commands/insult");
const {
  eightBallCommand
} = require("./commands/eightball");
const {
  lyricsCommand
} = require("./commands/lyrics");
const {
  dareCommand
} = require('./commands/dare');
const {
  truthCommand
} = require("./commands/truth");
const {
  clearCommand
} = require("./commands/clear");
const pingCommand = require('./commands/ping');
const aliveCommand = require('./commands/alive');
const blurCommand = require("./commands/img-blur");
const welcomeCommand = require("./commands/welcome");
const goodbyeCommand = require("./commands/goodbye");
const githubCommand = require("./commands/github");
const {
  handleAntiBadwordCommand,
  handleBadwordDetection
} = require("./lib/antibadword");
const antibadwordCommand = require("./commands/antibadword");
const {
  handleChatbotCommand,
  handleChatbotResponse
} = require("./commands/chatbot");
const takeCommand = require("./commands/take");
const {
  flirtCommand
} = require("./commands/flirt");
const characterCommand = require("./commands/character");
const wastedCommand = require("./commands/wasted");
const shipCommand = require('./commands/ship');
const groupInfoCommand = require("./commands/groupinfo");
const resetlinkCommand = require("./commands/resetlink");
const staffCommand = require("./commands/staff");
const unbanCommand = require("./commands/unban");
const emojimixCommand = require('./commands/emojimix');
const {
  handlePromotionEvent
} = require("./commands/promote");
const {
  handleDemotionEvent
} = require("./commands/demote");
const viewOnceCommand = require("./commands/viewonce");
const clearSessionCommand = require("./commands/clearsession");
const {
  autoStatusCommand,
  handleStatusUpdate
} = require('./commands/autostatus');
const {
  simpCommand
} = require('./commands/simp');
const {
  stupidCommand
} = require("./commands/stupid");
const pairCommand = require("./commands/pair");
const stickerTelegramCommand = require("./commands/stickertelegram");
const textmakerCommand = require("./commands/textmaker");
const {
  handleAntideleteCommand,
  handleMessageRevocation,
  storeMessage
} = require('./commands/antidelete');
const clearTmpCommand = require("./commands/cleartmp");
const setProfilePicture = require("./commands/setpp");
const instagramCommand = require("./commands/instagram");
const facebookCommand = require("./commands/facebook");
const playCommand = require("./commands/play");
const tiktokCommand = require("./commands/tiktok");
const songCommand = require("./commands/song");
const aiCommand = require("./commands/ai");
global.packname = settings.packname;
global.author = settings.author;
global.channelLink = "https://chat.whatsapp.com/Dg9rNdDl1HBJ12LnOmH0oD";
global.ytch = "⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛DRAXEN Ai ";
const channelInfo = {
  'contextInfo': {
    'forwardingScore': 0x1,
    'isForwarded': true,
    'forwardedNewsletterMessageInfo': {
      'newsletterJid': "https://chat.whatsapp.com/Dg9rNdDl1HBJ12LnOmH0oD",
      'newsletterName': 'DRAXEN Ai',
      'serverMessageId': -0x1
    }
  }
};
async function handleMessages(_0x30efae, _0xd76668, _0x4843e9) {
  try {
    const {
      messages: _0x1f4427,
      type: _0x440c6e
    } = _0xd76668;
    if (_0x440c6e !== 'notify') {
      return;
    }
    const _0x1aa829 = _0x1f4427[0x0];
    if (!_0x1aa829?.["message"]) {
      return;
    }
    if (_0x1aa829.message) {
      storeMessage(_0x1aa829);
    }
    if (_0x1aa829.message?.["protocolMessage"]?.["type"] === 0x0) {
      await handleMessageRevocation(_0x30efae, _0x1aa829);
      return;
    }
    const _0x52619e = _0x1aa829.key.remoteJid;
    const _0x26520b = _0x1aa829.key.participant || _0x1aa829.key.remoteJid;
    const _0x432f69 = _0x52619e.endsWith("@g.us");
    let _0x379f5d = _0x1aa829.message?.["conversation"]?.["trim"]()["toLowerCase"]() || _0x1aa829.message?.["extendedTextMessage"]?.["text"]?.["trim"]()['toLowerCase']() || '';
    _0x379f5d = _0x379f5d.replace(/\.\s+/g, '.').trim();
    if (_0x379f5d.startsWith('.')) {
      console.log("📝 Command used in " + (_0x432f69 ? 'group' : "private") + ": " + _0x379f5d);
    }
    if (isBanned(_0x26520b) && !_0x379f5d.startsWith(".unban")) {
      if (Math.random() < 0.1) {
        await _0x30efae.sendMessage(_0x52619e, {
          'text': "❌ You are banned from using the bot. Contact an admin to get unbanned.",
          ...channelInfo
        });
      }
      return;
    }
    if (/^[1-9]$/.test(_0x379f5d) || _0x379f5d.toLowerCase() === "surrender") {
      await handleTicTacToeMove(_0x30efae, _0x52619e, _0x26520b, _0x379f5d);
      return;
    }
    if (!_0x1aa829.key.fromMe) {
      incrementMessageCount(_0x52619e, _0x26520b);
    }
    if (_0x432f69 && _0x379f5d) {
      await handleBadwordDetection(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, _0x26520b);
    }
    if (!_0x379f5d.startsWith('.')) {
      if (_0x432f69) {
        await handleChatbotResponse(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, _0x26520b);
        await Antilink(_0x1aa829, _0x30efae);
        await handleBadwordDetection(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, _0x26520b);
      }
      return;
    }
    const _0x30441d = [".mute", '.unmute', ".ban", ".unban", ".promote", ".demote", '.kick', ".tagall", ".antilink"];
    const _0x4f1451 = _0x30441d.some(_0x6b26d3 => _0x379f5d.startsWith(_0x6b26d3));
    const _0x5d5fe4 = [".mode", '.autostatus', '.antidelete', '.cleartmp', ".setpp", ".clearsession"];
    const _0x4204c8 = _0x5d5fe4.some(_0x22bfe3 => _0x379f5d.startsWith(_0x22bfe3));
    let _0x377289 = false;
    let _0x326af3 = false;
    if (_0x432f69 && _0x4f1451) {
      const _0x260042 = await isAdmin(_0x30efae, _0x52619e, _0x26520b);
      _0x377289 = _0x260042.isSenderAdmin;
      _0x326af3 = _0x260042.isBotAdmin;
      if (!_0x326af3) {
        await _0x30efae.sendMessage(_0x52619e, {
          'text': "Please make the bot an admin to use admin commands.",
          ...channelInfo
        });
        return;
      }
      if (_0x379f5d.startsWith('.mute') || _0x379f5d === ".unmute" || _0x379f5d.startsWith('.ban') || _0x379f5d.startsWith('.unban') || _0x379f5d.startsWith(".promote") || _0x379f5d.startsWith(".demote")) {
        if (!_0x377289 && !_0x1aa829.key.fromMe) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "Sorry, only group admins can use this command.",
            ...channelInfo
          });
          return;
        }
      }
    }
    if (_0x4204c8) {
      if (!_0x1aa829.key.fromMe) {
        await _0x30efae.sendMessage(_0x52619e, {
          'text': "❌ This command is only available for the owner!",
          ...channelInfo
        });
        return;
      }
    }
    try {
      const _0x5032e2 = JSON.parse(fs.readFileSync('./data/messageCount.json'));
      if (!_0x5032e2.isPublic && !_0x1aa829.key.fromMe) {
        return;
      }
    } catch (_0x147dd1) {
      console.error("Error checking access mode:", _0x147dd1);
    }
    switch (true) {
      case _0x379f5d === ".simage":
        {
          const _0x2400cd = _0x1aa829.message?.["extendedTextMessage"]?.['contextInfo']?.["quotedMessage"];
          if (_0x2400cd?.["stickerMessage"]) {
            await simageCommand(_0x30efae, _0x2400cd, _0x52619e);
          } else {
            await _0x30efae.sendMessage(_0x52619e, {
              'text': "Please reply to a sticker with the .simage command to convert it.",
              ...channelInfo
            });
          }
          break;
        }
      case _0x379f5d.startsWith('.kick'):
        const _0x30167c = _0x1aa829.message.extendedTextMessage?.["contextInfo"]?.['mentionedJid'] || [];
        await kickCommand(_0x30efae, _0x52619e, _0x26520b, _0x30167c, _0x1aa829);
        break;
      case _0x379f5d.startsWith('.mute'):
        const _0x55fd8e = parseInt(_0x379f5d.split(" ")[0x1]);
        if (isNaN(_0x55fd8e)) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "Please provide a valid number of minutes.\neg to mute 10 minutes\n.mute 10",
            ...channelInfo
          });
        } else {
          await muteCommand(_0x30efae, _0x52619e, _0x26520b, _0x55fd8e);
        }
        break;
      case _0x379f5d === ".unmute":
        await unmuteCommand(_0x30efae, _0x52619e, _0x26520b);
        break;
      case _0x379f5d.startsWith(".ban"):
        await banCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".unban"):
        await unbanCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d === ".help" || _0x379f5d === ".menu" || _0x379f5d === ".bot" || _0x379f5d === ".list":
        await helpCommand(_0x30efae, _0x52619e, global.channelLink);
        break;
      case _0x379f5d === ".sticker" || _0x379f5d === '.s':
        await stickerCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith('.warnings'):
        const _0x3db420 = _0x1aa829.message.extendedTextMessage?.["contextInfo"]?.['mentionedJid'] || [];
        await warningsCommand(_0x30efae, _0x52619e, _0x3db420);
        break;
      case _0x379f5d.startsWith('.warn'):
        const _0x4b05c6 = _0x1aa829.message.extendedTextMessage?.['contextInfo']?.["mentionedJid"] || [];
        await warnCommand(_0x30efae, _0x52619e, _0x26520b, _0x4b05c6, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".tts"):
        const _0x569ab8 = _0x379f5d.slice(0x4).trim();
        await ttsCommand(_0x30efae, _0x52619e, _0x569ab8);
        break;
      case _0x379f5d === ".delete" || _0x379f5d === '.del':
        await deleteCommand(_0x30efae, _0x52619e, _0x1aa829, _0x26520b);
        break;
      case _0x379f5d.startsWith('.attp'):
        await attpCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".mode"):
        if (!_0x1aa829.key.fromMe) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "Only bot owner can use this command!",
            ...channelInfo
          });
          return;
        }
        let _0x36fbc5;
        try {
          _0x36fbc5 = JSON.parse(fs.readFileSync("./data/messageCount.json"));
        } catch (_0x1798d5) {
          console.error("Error reading access mode:", _0x1798d5);
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "Failed to read bot mode status",
            ...channelInfo
          });
          return;
        }
        const _0x5ac011 = _0x379f5d.split(" ")[0x1]?.["toLowerCase"]();
        if (!_0x5ac011) {
          const _0x12809a = _0x36fbc5.isPublic ? 'public' : "private";
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "Current bot mode: *" + _0x12809a + "*\n\nUsage: .mode public/private\n\nExample:\n.mode public - Allow everyone to use bot\n.mode private - Restrict to owner only",
            ...channelInfo
          });
          return;
        }
        if (_0x5ac011 !== "public" && _0x5ac011 !== "private") {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "Usage: .mode public/private\n\nExample:\n.mode public - Allow everyone to use bot\n.mode private - Restrict to owner only",
            ...channelInfo
          });
          return;
        }
        try {
          _0x36fbc5.isPublic = _0x5ac011 === "public";
          fs.writeFileSync("./data/messageCount.json", JSON.stringify(_0x36fbc5, null, 0x2));
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "Bot is now in *" + _0x5ac011 + "* mode",
            ...channelInfo
          });
        } catch (_0x4cc60c) {
          console.error("Error updating access mode:", _0x4cc60c);
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "Failed to update bot access mode",
            ...channelInfo
          });
        }
        break;
      case _0x379f5d === ".owner":
        await ownerCommand(_0x30efae, _0x52619e);
        break;
      case _0x379f5d === ".tagall":
        if (_0x377289 || _0x1aa829.key.fromMe) {
          await tagAllCommand(_0x30efae, _0x52619e, _0x26520b);
        } else {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "Sorry, only group admins can use the .tagall command.",
            ...channelInfo
          });
        }
        break;
      case _0x379f5d.startsWith(".tag"):
        const _0x59745e = _0x379f5d.slice(0x4).trim();
        const _0x2b68e0 = _0x1aa829.message?.["extendedTextMessage"]?.["contextInfo"]?.["quotedMessage"] || null;
        await tagCommand(_0x30efae, _0x52619e, _0x26520b, _0x59745e, _0x2b68e0);
        break;
      case _0x379f5d.startsWith(".antilink"):
        if (!_0x432f69) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "This command can only be used in groups.",
            ...channelInfo
          });
          return;
        }
        if (!_0x326af3) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "Please make the bot an admin first.",
            ...channelInfo
          });
          return;
        }
        await handleAntilinkCommand(_0x30efae, _0x52619e, _0x379f5d, _0x26520b, _0x377289);
        break;
      case _0x379f5d === ".meme":
        await memeCommand(_0x30efae, _0x52619e);
        break;
      case _0x379f5d === ".joke":
        await jokeCommand(_0x30efae, _0x52619e);
        break;
      case _0x379f5d === '.quote':
        await quoteCommand(_0x30efae, _0x52619e);
        break;
      case _0x379f5d === ".fact":
        await factCommand(_0x30efae, _0x52619e);
        break;
      case _0x379f5d.startsWith('.weather'):
        const _0xa10342 = _0x379f5d.slice(0x9).trim();
        if (_0xa10342) {
          await weatherCommand(_0x30efae, _0x52619e, _0xa10342);
        } else {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "Please specify a city, e.g., .weather London",
            ...channelInfo
          });
        }
        break;
      case _0x379f5d === ".news":
        await newsCommand(_0x30efae, _0x52619e);
        break;
      case _0x379f5d.startsWith('.ttt') || _0x379f5d.startsWith(".tictactoe"):
        const _0x378ecb = _0x379f5d.split(" ").slice(0x1).join(" ");
        await tictactoeCommand(_0x30efae, _0x52619e, _0x26520b, _0x378ecb);
        break;
      case _0x379f5d.startsWith(".move"):
        const _0x4a309e = parseInt(_0x379f5d.split(" ")[0x1]);
        if (isNaN(_0x4a309e)) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "Please provide a valid position number for Tic-Tac-Toe move.",
            ...channelInfo
          });
        } else {
          tictactoeMove(_0x30efae, _0x52619e, _0x26520b, _0x4a309e);
        }
        break;
      case _0x379f5d === ".topmembers":
        topMembers(_0x30efae, _0x52619e, _0x432f69);
        break;
      case _0x379f5d.startsWith(".hangman"):
        startHangman(_0x30efae, _0x52619e);
        break;
      case _0x379f5d.startsWith(".guess"):
        const _0x5d8197 = _0x379f5d.split(" ")[0x1];
        if (_0x5d8197) {
          guessLetter(_0x30efae, _0x52619e, _0x5d8197);
        } else {
          _0x30efae.sendMessage(_0x52619e, {
            'text': "Please guess a letter using .guess <letter>",
            ...channelInfo
          });
        }
        break;
      case _0x379f5d.startsWith(".trivia"):
        startTrivia(_0x30efae, _0x52619e);
        break;
      case _0x379f5d.startsWith('.answer'):
        const _0x4a118c = _0x379f5d.split(" ").slice(0x1).join(" ");
        if (_0x4a118c) {
          answerTrivia(_0x30efae, _0x52619e, _0x4a118c);
        } else {
          _0x30efae.sendMessage(_0x52619e, {
            'text': "Please provide an answer using .answer <answer>",
            ...channelInfo
          });
        }
        break;
      case _0x379f5d.startsWith(".compliment"):
        await complimentCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".insult"):
        await insultCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".8ball"):
        const _0x274645 = _0x379f5d.split(" ").slice(0x1).join(" ");
        await eightBallCommand(_0x30efae, _0x52619e, _0x274645);
        break;
      case _0x379f5d.startsWith(".lyrics"):
        const _0x497ecf = _0x379f5d.split(" ").slice(0x1).join(" ");
        await lyricsCommand(_0x30efae, _0x52619e, _0x497ecf);
        break;
      case _0x379f5d.startsWith(".simp"):
        const _0x26a37b = _0x1aa829.message?.["extendedTextMessage"]?.["contextInfo"]?.['quotedMessage'];
        const _0xfc1db7 = _0x1aa829.message?.["extendedTextMessage"]?.["contextInfo"]?.["mentionedJid"] || [];
        await simpCommand(_0x30efae, _0x52619e, _0x26a37b, _0xfc1db7, _0x26520b);
        break;
      case _0x379f5d.startsWith(".stupid") || _0x379f5d.startsWith(".itssostupid") || _0x379f5d.startsWith(".iss"):
        const _0x3d877d = _0x1aa829.message?.['extendedTextMessage']?.["contextInfo"]?.["quotedMessage"];
        const _0x4bbefd = _0x1aa829.message?.["extendedTextMessage"]?.['contextInfo']?.["mentionedJid"] || [];
        const _0x32e0bb = _0x379f5d.split(" ").slice(0x1);
        await stupidCommand(_0x30efae, _0x52619e, _0x3d877d, _0x4bbefd, _0x26520b, _0x32e0bb);
        break;
      case _0x379f5d === '.dare':
        await dareCommand(_0x30efae, _0x52619e);
        break;
      case _0x379f5d === ".truth":
        await truthCommand(_0x30efae, _0x52619e);
        break;
      case _0x379f5d === ".clear":
        if (_0x432f69) {
          await clearCommand(_0x30efae, _0x52619e);
        }
        break;
      case _0x379f5d.startsWith(".promote"):
        const _0x50e990 = _0x1aa829.message.extendedTextMessage?.["contextInfo"]?.["mentionedJid"] || [];
        await promoteCommand(_0x30efae, _0x52619e, _0x50e990, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".demote"):
        const _0x318c86 = _0x1aa829.message.extendedTextMessage?.["contextInfo"]?.["mentionedJid"] || [];
        await demoteCommand(_0x30efae, _0x52619e, _0x318c86, _0x1aa829);
        break;
      case _0x379f5d === ".ping":
        await pingCommand(_0x30efae, _0x52619e);
        break;
      case _0x379f5d === ".alive":
        await aliveCommand(_0x30efae, _0x52619e);
        break;
      case _0x379f5d.startsWith(".blur"):
        const _0x2b979d = _0x1aa829.message?.['extendedTextMessage']?.["contextInfo"]?.["quotedMessage"];
        await blurCommand(_0x30efae, _0x52619e, _0x1aa829, _0x2b979d);
        break;
      case _0x379f5d.startsWith(".welcome"):
        if (_0x432f69) {
          if (!_0x377289) {
            const _0x3ee34b = await isAdmin(_0x30efae, _0x52619e, _0x26520b);
            _0x377289 = _0x3ee34b.isSenderAdmin;
          }
          if (_0x377289 || _0x1aa829.key.fromMe) {
            await welcomeCommand(_0x30efae, _0x52619e, _0x1aa829);
          } else {
            await _0x30efae.sendMessage(_0x52619e, {
              'text': "Sorry, only group admins can use this command.",
              ...channelInfo
            });
          }
        } else {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "This command can only be used in groups.",
            ...channelInfo
          });
        }
        break;
      case _0x379f5d.startsWith('.goodbye'):
        if (_0x432f69) {
          if (!_0x377289) {
            const _0x57fb17 = await isAdmin(_0x30efae, _0x52619e, _0x26520b);
            _0x377289 = _0x57fb17.isSenderAdmin;
          }
          if (_0x377289 || _0x1aa829.key.fromMe) {
            await goodbyeCommand(_0x30efae, _0x52619e, _0x1aa829);
          } else {
            await _0x30efae.sendMessage(_0x52619e, {
              'text': "Sorry, only group admins can use this command.",
              ...channelInfo
            });
          }
        } else {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "This command can only be used in groups.",
            ...channelInfo
          });
        }
        break;
      case _0x379f5d === ".git":
      case _0x379f5d === '.github':
      case _0x379f5d === ".sc":
      case _0x379f5d === ".script":
      case _0x379f5d === ".repo":
        await githubCommand(_0x30efae, _0x52619e);
        break;
      case _0x379f5d.startsWith('.antibadword'):
        if (!_0x432f69) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "This command can only be used in groups.",
            ...channelInfo
          });
          return;
        }
        const _0x471d07 = await isAdmin(_0x30efae, _0x52619e, _0x26520b);
        _0x377289 = _0x471d07.isSenderAdmin;
        _0x326af3 = _0x471d07.isBotAdmin;
        if (!_0x326af3) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "*Bot must be admin to use this feature*",
            ...channelInfo
          });
          return;
        }
        await antibadwordCommand(_0x30efae, _0x52619e, _0x1aa829, _0x26520b, _0x377289);
        break;
      case _0x379f5d.startsWith('.chatbot'):
        if (!_0x432f69) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "This command can only be used in groups.",
            ...channelInfo
          });
          return;
        }
        const _0x3cc5a2 = await isAdmin(_0x30efae, _0x52619e, _0x26520b);
        if (!_0x3cc5a2.isSenderAdmin) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "*Only admins can use this command*",
            ...channelInfo
          });
          return;
        }
        const _0x4e60f4 = _0x379f5d.slice(0x8).trim();
        await handleChatbotCommand(_0x30efae, _0x52619e, _0x1aa829, _0x4e60f4);
        break;
      case _0x379f5d.startsWith('.take'):
        const _0x1eaa43 = _0x379f5d.slice(0x5).trim().split(" ");
        await takeCommand(_0x30efae, _0x52619e, _0x1aa829, _0x1eaa43);
        break;
      case _0x379f5d === ".flirt":
        await flirtCommand(_0x30efae, _0x52619e);
        break;
      case _0x379f5d.startsWith('.character'):
        await characterCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".waste"):
        await wastedCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d === ".ship":
        if (!_0x432f69) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "This command can only be used in groups!",
            ...channelInfo
          });
          return;
        }
        await shipCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d === ".groupinfo" || _0x379f5d === ".infogp" || _0x379f5d === '.infogrupo':
        if (!_0x432f69) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "This command can only be used in groups!",
            ...channelInfo
          });
          return;
        }
        await groupInfoCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d === ".resetlink" || _0x379f5d === '.revoke' || _0x379f5d === ".anularlink":
        if (!_0x432f69) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "This command can only be used in groups!",
            ...channelInfo
          });
          return;
        }
        await resetlinkCommand(_0x30efae, _0x52619e, _0x26520b);
        break;
      case _0x379f5d === ".staff" || _0x379f5d === ".admins" || _0x379f5d === ".listadmin":
        if (!_0x432f69) {
          await _0x30efae.sendMessage(_0x52619e, {
            'text': "This command can only be used in groups!",
            ...channelInfo
          });
          return;
        }
        await staffCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".emojimix") || _0x379f5d.startsWith('.emix'):
        await emojimixCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".tg") || _0x379f5d.startsWith('.stickertelegram') || _0x379f5d.startsWith('.tgsticker') || _0x379f5d.startsWith(".telesticker"):
        await stickerTelegramCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d === ".vv":
        await viewOnceCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d === ".clearsession" || _0x379f5d === ".clearsesi":
        await clearSessionCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".autostatus"):
        const _0x1d5800 = _0x379f5d.split(" ").slice(0x1);
        await autoStatusCommand(_0x30efae, _0x52619e, _0x1aa829, _0x1d5800);
        break;
      case _0x379f5d.startsWith(".simp"):
        await simpCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".pair") || _0x379f5d.startsWith('.rent'):
        {
          const _0x57069b = _0x379f5d.split(" ").slice(0x1).join(" ");
          await pairCommand(_0x30efae, _0x52619e, _0x1aa829, _0x57069b);
          break;
        }
      case _0x379f5d.startsWith(".metallic"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, "metallic");
        break;
      case _0x379f5d.startsWith(".ice"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, "ice");
        break;
      case _0x379f5d.startsWith(".snow"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, "snow");
        break;
      case _0x379f5d.startsWith(".impressive"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, 'impressive');
        break;
      case _0x379f5d.startsWith(".matrix"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, "matrix");
        break;
      case _0x379f5d.startsWith(".light"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, "light");
        break;
      case _0x379f5d.startsWith(".neon"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, 'neon');
        break;
      case _0x379f5d.startsWith(".devil"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, 'devil');
        break;
      case _0x379f5d.startsWith(".purple"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, 'purple');
        break;
      case _0x379f5d.startsWith(".thunder"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, "thunder");
        break;
      case _0x379f5d.startsWith('.leaves'):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, 'leaves');
        break;
      case _0x379f5d.startsWith(".1917"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, "1917");
        break;
      case _0x379f5d.startsWith('.arena'):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, "arena");
        break;
      case _0x379f5d.startsWith(".hacker"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, "hacker");
        break;
      case _0x379f5d.startsWith(".sand"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, "sand");
        break;
      case _0x379f5d.startsWith(".blackpink"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, "blackpink");
        break;
      case _0x379f5d.startsWith(".glitch"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, "glitch");
        break;
      case _0x379f5d.startsWith(".fire"):
        await textmakerCommand(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, "fire");
        break;
      case _0x379f5d.startsWith(".antidelete"):
        const _0x4cc303 = _0x379f5d.slice(0xb).trim();
        await handleAntideleteCommand(_0x30efae, _0x52619e, _0x1aa829, _0x4cc303);
        break;
      case _0x379f5d === ".surrender":
        await handleTicTacToeMove(_0x30efae, _0x52619e, _0x26520b, 'surrender');
        break;
      case _0x379f5d === ".cleartmp":
        await clearTmpCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d === ".setpp":
        await setProfilePicture(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith('.instagram') || _0x379f5d.startsWith(".igdl") || _0x379f5d.startsWith(".ig"):
        await instagramCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".fb") || _0x379f5d.startsWith(".facebook"):
        await facebookCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".song") || _0x379f5d.startsWith(".music"):
        await playCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".play") || _0x379f5d.startsWith(".mp3") || _0x379f5d.startsWith(".ytmp3") || _0x379f5d.startsWith('.yts'):
        await songCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".tiktok") || _0x379f5d.startsWith(".tt"):
        await tiktokCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      case _0x379f5d.startsWith(".gpt") || _0x379f5d.startsWith(".gemini"):
        await aiCommand(_0x30efae, _0x52619e, _0x1aa829);
        break;
      default:
        if (_0x432f69) {
          if (_0x379f5d) {
            await handleChatbotResponse(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, _0x26520b);
          }
          await Antilink(_0x1aa829, _0x30efae);
          await handleBadwordDetection(_0x30efae, _0x52619e, _0x1aa829, _0x379f5d, _0x26520b);
        }
        break;
    }
  } catch (_0x492152) {
    console.error("❌ Error in message handler:", _0x492152.message);
    if (chatId) {
      await _0x30efae.sendMessage(chatId, {
        'text': "❌ Failed to process command!",
        ...channelInfo
      });
    }
  }
}
async function handleGroupParticipantUpdate(_0x2ce704, _0x5e27a0) {
  try {
    const {
      id: _0x1c9bed,
      participants: _0x4706d3,
      action: _0x10e4f3,
      author: _0x565a87
    } = _0x5e27a0;
    if (!_0x1c9bed.endsWith('@g.us')) {
      return;
    }
    if (_0x10e4f3 === "promote") {
      await handlePromotionEvent(_0x2ce704, _0x1c9bed, _0x4706d3, _0x565a87);
      return;
    }
    if (_0x10e4f3 === "demote") {
      await handleDemotionEvent(_0x2ce704, _0x1c9bed, _0x4706d3, _0x565a87);
      return;
    }
    if (_0x10e4f3 === "add") {
      const _0x3d342f = await isWelcomeOn(_0x1c9bed);
      if (!_0x3d342f) {
        return;
      }
      const _0x36b513 = JSON.parse(fs.readFileSync("./data/userGroupData.json"));
      const _0x3c7d98 = _0x36b513.welcome[_0x1c9bed];
      const _0x349263 = _0x3c7d98?.['message'] || "Welcome {user} to the group! 🎉";
      for (const _0x787495 of _0x4706d3) {
        const _0xfacbe = _0x787495.split('@')[0x0];
        const _0x54bda5 = _0x349263.replace('{user}', '@' + _0xfacbe);
        await _0x2ce704.sendMessage(_0x1c9bed, {
          'text': _0x54bda5,
          'mentions': [_0x787495]
        });
      }
    }
    if (_0x10e4f3 === "remove") {
      const _0x4aaccc = await isGoodByeOn(_0x1c9bed);
      if (!_0x4aaccc) {
        return;
      }
      const _0x22d108 = JSON.parse(fs.readFileSync("./data/userGroupData.json"));
      const _0x4713ef = _0x22d108.goodbye[_0x1c9bed];
      const _0x21bfd8 = _0x4713ef?.["message"] || "Goodbye {user} 👋";
      for (const _0x4cfa9b of _0x4706d3) {
        const _0x1fba0f = _0x4cfa9b.split('@')[0x0];
        const _0x1cfbe9 = _0x21bfd8.replace("{user}", '@' + _0x1fba0f);
        await _0x2ce704.sendMessage(_0x1c9bed, {
          'text': _0x1cfbe9,
          'mentions': [_0x4cfa9b]
        });
      }
    }
  } catch (_0x48e0d7) {
    console.error("Error in handleGroupParticipantUpdate:", _0x48e0d7);
  }
}
module.exports = {
  'handleMessages': handleMessages,
  'handleGroupParticipantUpdate': handleGroupParticipantUpdate,
  'handleStatus': async (_0x33a420, _0x18b6ab) => {
    await handleStatusUpdate(_0x33a420, _0x18b6ab);
  }
};
