async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 DRAXEN Ai*

*📂 GitHub Repository:*
https://github.com/dullar255/DRAXEN-Ai

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
                    newsletterJid: 'https://chat.whatsapp.com/Dg9rNdDl1HBJ12LnOmH0oD',
                    newsletterName: 'DRAXEN Ai',
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
