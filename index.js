require("./settings");
const fs = require('fs');
const chalk = require("chalk");
const {
  handleMessages,
  handleGroupParticipantUpdate,
  handleStatus
} = require("./main");
const PhoneNumber = require('awesome-phonenumber');
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./lib/exif");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetch,
  await,
  sleep,
  reSize
} = require("./lib/myfunc");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
  jidNormalizedUser,
  makeCacheableSignalKeyStore,
  delay
} = require('@whiskeysockets/baileys');
const NodeCache = require('node-cache');
const pino = require("pino");
const readline = require("readline");
const {
  rmSync,
  existsSync
} = require('fs');
const createToxxicStore = require("./lib/basestore");
const store = createToxxicStore('./store', {
  'maxMessagesPerChat': 0x64,
  'memoryOnly': false
});
let owner = JSON.parse(fs.readFileSync("./data/owner.json"));
global.botname = "DRAXEN-Ai";
global.themeemoji = '•';
const settings = require("./settings");
const pairingCode = true || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes("--mobile");
const rl = process.stdin.isTTY ? readline.createInterface({
  'input': process.stdin,
  'output': process.stdout
}) : null;
const question = _0x55e5b9 => {
  return rl ? new Promise(_0x33fb4a => rl.question(_0x55e5b9, _0x33fb4a)) : Promise.resolve(settings.ownerNumber || '255756715126');
};
async function startXeonBotInc() {
  let {
    version: _0x734e81,
    isLatest: _0x139b56
  } = await fetchLatestBaileysVersion();
  const {
    state: _0x43f00f,
    saveCreds: _0x2397c3
  } = await useMultiFileAuthState("./session");
  const _0x5bf5f2 = new NodeCache();
  const _0x17c406 = makeWASocket({
    'version': _0x734e81,
    'logger': pino({
      'level': "silent"
    }),
    'printQRInTerminal': !pairingCode,
    'browser': ["Ubuntu", "Chrome", "20.0.04"],
    'auth': {
      'creds': _0x43f00f.creds,
      'keys': makeCacheableSignalKeyStore(_0x43f00f.keys, pino({
        'level': "fatal"
      }).child({
        'level': 'fatal'
      }))
    },
    'markOnlineOnConnect': true,
    'generateHighQualityLinkPreview': true,
    'getMessage': async _0x3ec435 => {
      let _0x3f61f0 = jidNormalizedUser(_0x3ec435.remoteJid);
      let _0x473dd4 = await store.loadMessage(_0x3f61f0, _0x3ec435.id);
      return _0x473dd4?.["message"] || '';
    },
    'msgRetryCounterCache': _0x5bf5f2,
    'defaultQueryTimeoutMs': undefined
  });
  store.bind(_0x17c406.ev);
  _0x17c406.ev.on("messages.upsert", async _0x14e13b => {
    try {
      const _0xbaeeba = _0x14e13b.messages[0x0];
      if (!_0xbaeeba.message) {
        return;
      }
      _0xbaeeba.message = Object.keys(_0xbaeeba.message)[0x0] === "ephemeralMessage" ? _0xbaeeba.message.ephemeralMessage.message : _0xbaeeba.message;
      if (_0xbaeeba.key && _0xbaeeba.key.remoteJid === 'status@broadcast') {
        await handleStatus(_0x17c406, _0x14e13b);
        return;
      }
      if (!_0x17c406["public"] && !_0xbaeeba.key.fromMe && _0x14e13b.type === "notify") {
        return;
      }
      if (_0xbaeeba.key.id.startsWith("BAE5") && _0xbaeeba.key.id.length === 0x10) {
        return;
      }
      try {
        await handleMessages(_0x17c406, _0x14e13b, true);
      } catch (_0x532ee8) {
        console.error("Error in handleMessages:", _0x532ee8);
        if (_0xbaeeba.key && _0xbaeeba.key.remoteJid) {
          await _0x17c406.sendMessage(_0xbaeeba.key.remoteJid, {
            'text': "❌ An error occurred while processing your message.",
            'contextInfo': {
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "https://chat.whatsapp.com/Dg9rNdDl1HBJ12LnOmH0oD",
                'newsletterName': "DRAXEN Ai ",
                'serverMessageId': -0x1
              }
            }
          })["catch"](console.error);
        }
      }
    } catch (_0x23f61d) {
      console.error("Error in messages.upsert:", _0x23f61d);
    }
  });
  _0x17c406.decodeJid = _0x1f241b => {
    if (!_0x1f241b) {
      return _0x1f241b;
    }
    if (/:\d+@/gi.test(_0x1f241b)) {
      let _0x1a610e = jidDecode(_0x1f241b) || {};
      return _0x1a610e.user && _0x1a610e.server && _0x1a610e.user + '@' + _0x1a610e.server || _0x1f241b;
    } else {
      return _0x1f241b;
    }
  };
  _0x17c406.ev.on("contacts.update", _0x31302c => {
    for (let _0x181253 of _0x31302c) {
      let _0x2ccda5 = _0x17c406.decodeJid(_0x181253.id);
      if (store && store.contacts) {
        store.contacts[_0x2ccda5] = {
          'id': _0x2ccda5,
          'name': _0x181253.notify
        };
      }
    }
  });
  _0x17c406.getName = (_0x2068b1, _0x2f134e = false) => {
    id = _0x17c406.decodeJid(_0x2068b1);
    _0x2f134e = _0x17c406.withoutContact || _0x2f134e;
    let _0x99aa49;
    if (id.endsWith("@g.us")) {
      return new Promise(async _0x550643 => {
        _0x99aa49 = store.contacts[id] || {};
        if (!(_0x99aa49.name || _0x99aa49.subject)) {
          _0x99aa49 = _0x17c406.groupMetadata(id) || {};
        }
        _0x550643(_0x99aa49.name || _0x99aa49.subject || PhoneNumber('+' + id.replace("@s.whatsapp.net", '')).getNumber("international"));
      });
    } else {
      _0x99aa49 = id === "0@s.whatsapp.net" ? {
        'id': id,
        'name': "WhatsApp"
      } : id === _0x17c406.decodeJid(_0x17c406.user.id) ? _0x17c406.user : store.contacts[id] || {};
    }
    return (_0x2f134e ? '' : _0x99aa49.name) || _0x99aa49.subject || _0x99aa49.verifiedName || PhoneNumber('+' + _0x2068b1.replace('@s.whatsapp.net', '')).getNumber("international");
  };
  _0x17c406["public"] = true;
  _0x17c406.serializeM = _0x20f26e => smsg(_0x17c406, _0x20f26e, store);
  if (pairingCode && !_0x17c406.authState.creds.registered) {
    if (useMobile) {
      throw new Error("Cannot use pairing code with mobile api");
    }
    let _0x124d14;
    if (!!global.phoneNumber) {
      _0x124d14 = global.phoneNumber;
    } else {
      _0x124d14 = await question(chalk.bgBlack(chalk.greenBright("Please type your WhatsApp number 😍\nFor example: 255756715126 : ")));
    }
    _0x124d14 = _0x124d14.replace(/[^0-9]/g, '');
    setTimeout(async () => {
      let _0x26ce4b = await _0x17c406.requestPairingCode(_0x124d14);
      _0x26ce4b = _0x26ce4b?.["match"](/.{1,4}/g)?.["join"]('-') || _0x26ce4b;
      console.log(chalk.black(chalk.bgGreen("Your Pairing Code : ")), chalk.black(chalk.white(_0x26ce4b)));
    }, 0xbb8);
  }
  _0x17c406.ev.on("connection.update", async _0x5aa350 => {
    const {
      connection: _0xaa2d30,
      lastDisconnect: _0x4fa7fe
    } = _0x5aa350;
    if (_0xaa2d30 == "open") {
      console.log(chalk.magenta(" "));
      console.log(chalk.yellow("🌿Connected to => " + JSON.stringify(_0x17c406.user, null, 0x2)));
      const _0x20546d = _0x17c406.user.id.split(':')[0x0] + "@s.whatsapp.net";
      await _0x17c406.sendMessage(_0x20546d, {
        'text': "🤖 Bot Connected Successfully!\n\n⏰ Time: " + new Date().toLocaleString() + "\n✅ Status: Online and Ready!\n                \n✅Make sure to join below channel",
        'contextInfo': {
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "https://chat.whatsapp.com/Dg9rNdDl1HBJ12LnOmH0oD",
            'newsletterName': "DRAXEN Ai",
            'serverMessageId': -0x1
          }
        }
      });
      await delay(0x7cf);
      console.log(chalk.yellow("\n\n                  " + chalk.bold.blue("[ " + (global.botname || "SNOWBIRD XMD") + " ]") + "\n\n"));
      console.log(chalk.cyan("< ================================================== >"));
      console.log(chalk.magenta("\n" + (global.themeemoji || '•') + " YT CHANNEL: DEV SNOWBIRD"));
      console.log(chalk.magenta((global.themeemoji || '•') + " GITHUB: dullar255"));
      console.log(chalk.magenta((global.themeemoji || '•') + " WA NUMBER: " + owner));
      console.log(chalk.magenta((global.themeemoji || '•') + " CREDIT: MR DRAXEN "));
      console.log(chalk.green((global.themeemoji || '•') + " 🤖 Bot Connected Successfully! ✅"));
    }
    if (_0xaa2d30 === "close" && _0x4fa7fe && _0x4fa7fe.error && _0x4fa7fe.error.output.statusCode != 0x191) {
      startXeonBotInc();
    }
  });
  _0x17c406.ev.on("creds.update", _0x2397c3);
  _0x17c406.ev.on("group-participants.update", async _0x1e49b8 => {
    await handleGroupParticipantUpdate(_0x17c406, _0x1e49b8);
  });
  _0x17c406.ev.on("messages.upsert", async _0x342e24 => {
    if (_0x342e24.messages[0x0].key && _0x342e24.messages[0x0].key.remoteJid === "status@broadcast") {
      await handleStatus(_0x17c406, _0x342e24);
    }
  });
  _0x17c406.ev.on("status.update", async _0x42a932 => {
    await handleStatus(_0x17c406, _0x42a932);
  });
  _0x17c406.ev.on('messages.reaction', async _0x1fbf29 => {
    await handleStatus(_0x17c406, _0x1fbf29);
  });
  return _0x17c406;
}
startXeonBotInc()['catch'](_0x109531 => {
  console.error("Fatal error:", _0x109531);
  process.exit(0x1);
});
process.on("uncaughtException", _0x1b6cbb => {
  console.error("Uncaught Exception:", _0x1b6cbb);
});
process.on("unhandledRejection", _0x266938 => {
  console.error("Unhandled Rejection:", _0x266938);
});
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
