const { readEnv } = require("../lib/database");
const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const config = await readEnv();
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `👋 *Hello  ${pushname}*


| *MAIN COMMANDS* |
    ▫️.alive
    ▫️.menu
    ▫️.ai <text>
    ▫️.system
    ▫️.owner
|🛑 𝐏𝐎𝐖𝐄𝐑 𝐟𝐮𝐥𝐥 𝐁𝐔𝐆🛑
➔𝙱𝚄𝙶 𝚐𝚛𝚘𝚞𝚙
➔𝙱𝚄𝙶 𝚐𝚛𝚘𝚞𝚙 𝚌𝚊𝚕𝚕
➔𝚋𝚞𝚐 𝚞𝚗𝚕𝚒𝚖𝚒𝚝𝚒𝚍 𝚌𝚛𝚊𝚜𝚑
➔𝚊𝚌𝚘𝚞𝚗𝚝 𝚋𝚛𝚎𝚗𝚍 𝚋𝚞𝚐

 | ®𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐜𝐫𝐚𝐬𝐡 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒® |
➔𝚌𝚛𝚊𝚜𝚑 1
➔𝚌𝚛𝚊𝚜𝚑 2
➔𝚌𝚛𝚊𝚜𝚑 3
➔𝚌𝚛𝚊𝚜𝚑 4
➔𝚌𝚛𝚊𝚜𝚑 5
[匚𝐘𝐁𝐄𝐑 ᗪιℓѕнαη
𝚌𝚘𝚗𝚝𝚊𝚌𝚝 𝚋𝚞𝚐 access 
➔🎁15$
 👍https://wa.me/message/D744JB6URNIZC1
| *OWNER COMMANDS* |
    ▫️.restart
    ▫️.update
| *CONVERT COMMANDS* |
    ▫️.sticker <reply img>
    ▫️.img <reply sticker>
    ▫️.tr <lang><text>
    ▫️.tts <text>
| *SEARCH COMMANDS* |
${menu.search}


🥶𝐌𝐚𝐝𝐞 𝐛𝐲 匚𝐘𝐁𝐄𝐑 ᗪιℓѕнαη🥶

> 匚𝐘𝐁𝐄𝐑 ᗪιℓѕнαη MENU MSG
`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://raw.githubusercontent.com/Sudarshana2002dilshan/bot-helper/refs/heads/main/8cd141fd-204e-487c-b86d-006fa3ddfd1b.jpg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
