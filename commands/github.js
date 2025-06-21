async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 SNOWBIRD XMD*

*📂 GitHub Repository:*
https://github.com/SNOWBIRD0074/SNOWBIRD-XMD-

*📢 Official Channel:*
https://whatsapp.com/channel/0029Vb5nSebFy722d2NEeU3C

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363399707841760@newsletter',
                    newsletterName: 'SNOWBORD XMD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 