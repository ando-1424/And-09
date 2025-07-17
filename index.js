const express = require('express');


const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

app.post("/uptime_devtools", (req, res) => {
 console.log("uptime is run by __Thailand Codes & MimoDev__")
  res.send({
    msg: "done uptime",
    access: "by_devtools",
  })
})
const { Intents, Client, Collection, MessageEmbed, WebhookClient, MessageButton, MessageActionRow, MessageSelectMenu , MessageAttachment,  TextInputComponent , Modal} = require(`discord.js`)
const {createTranscript} = require('discord-html-transcripts');
const ms = require("ms")
const db = require(`pro.db`)
const { token } = require("./config.json")
const fs = require(`node:fs`)
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES
  ],
  partials: ["REACTION", "MESSAGE", "CHANNEL"]
}).setMaxListeners(0)
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const prefix = "+"
const line = "" //Link Line Here 
const Discord = require("discord.js")
module.exports = client

 process.on("unhandledRejection", error => {
  return console.log(error)
}); 
 


process.on('unhandledRejection', (reason, p) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] unhandled Rejection:'.toUpperCase());
    console.log(reason.stack ? String(reason.stack) : String(reason));
    console.log('=== unhandled Rejection ===\n\n\n\n\n'.toUpperCase());
  });
  process.on("uncaughtException", (err, origin) => {
    console.log('\n\n\n\n\n\n[🚩 Anti-Crash] uncaught Exception'.toUpperCase());
    console.log(err.stack ? err.stack : err)
    console.log('=== uncaught Exception ===\n\n\n\n\n'.toUpperCase());
  })
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('[🚩 Anti-Crash] uncaught Exception Monitor'.toUpperCase());
  });
  process.on('beforeExit', (code) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] before Exit'.toUpperCase());
  //  console.log(code.yellow.dim);
    console.log('=== before Exit ===\n\n\n\n\n'.toUpperCase());
  });
  process.on('exit', (code) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] exit'.toUpperCase());
    //console.log(code.yellow.dim);
    console.log('=== exit ===\n\n\n\n\n'.toUpperCase());
  });
  process.on('multipleResolves', (type, promise, reason) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] multiple Resolves'.toUpperCase());
    console.log(type, promise, reason);
    console.log('=== multiple Resolves ===\n\n\n\n\n'.toUpperCase());
  });
client.on('ready' , async() => {
  console.log(`================`)
  console.log(``)
  console.log(`Bot Name : ${client.user.username}`)
  console.log(`Bot Tag : ${client.user.tag}`)
  console.log(`Bot Id : ${client.user.id}`)
  console.log(`Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
.reduce((a, b) => a + b.memberCount, 0)
.toLocaleString()}`)
  console.log(``)
  console.log(`================`)
  var statuses = [`Thailand Codes & Mimo𝐎𝐍 𝐓𝐎𝐏` , `𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐩𝐞𝐝 𝐁𝐲 : Thailand Codes & Mimo𝐎𝐰𝐧𝐞𝐫𝐬`];
var timers = 2;
  var timeing = Math.floor(timers * 1000);
  setInterval(function() {
    var lengthesof = statuses.length;
    var amounter = Math.floor(Math.random() * lengthesof);
    client.user.setActivity(statuses[amounter], { type: 'STREAMING', url: 'https://www.twitch.tv/5fr3' }); //Streaming Stats
  }, timeing);

})

const welcomerooom = "" //ايدي روم الترحيب

const link = "" //لينك السيرفر

const feedback = "" //ايدي روم الفيدباك

const autolinerooms = [ "","","","",""] //ايدي رومات الاوتو لاين

const ordercategory = "" //ايدي كاتجوري الاوردر

const applycategory = "" //ايدي كاتجوري التقديم

const testerrole = "" //ايدي رول الي بتعمل تست في التقديم 

const taxchannel = "" //ايدي روم الضريبة

const welcomesellerroom = "" //ايدي روم ترحيب السيلر

const upgraderoom = "" //ايدي روم ترقية التيم

const sellernumber = "" //ايدي روم نمبر التيم

let team = "" //ايدي رول التيم

let offerroom = "" //ايدي روم الاوفرات

let support = "" //ايدي رول تكت سبورت

let supportt = "" //ايدي روم السبورت تكت 

let supportcategory = "" //ايدي كاتجوري السابورت

let color = "#FF2400" //لون الايمباد

let order = "" //ايدي روم الاوردر

let applyteam =  "" //ايدي روم تقديم التيم

let giveaway =  "" //ايدي روم الهداية

let rulest = "" //ايدي روم قوانين التيم 

let newst = "" //ايدي روم نيوز التيم

let adsprice = "" //ايدي روم اسعار الاعلانات

let pricet = "" //ايدي روم اسعار التيم

client.on("messageCreate", message => {
  if (message.content === prefix + "help") {
    const embed = new MessageEmbed()
      .setTitle("**Help Menu **")
      .setColor(color)
      .setImage(line)
      .setThumbnail(message.guild.iconURL())
      .setDescription(`> **Hi , I Am __Thailand Codes & Mimo__   **

> **I Work For __Thailand Codes & Mimo__   **

> **My Developper Is __Thailand Codes & Mimo𝐎𝐰𝐧𝐞𝐫𝐬__ **`);

    let row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId('commands')
        .setPlaceholder('⚘・𝐒𝐞𝐥𝐞𝐜𝐭 𝐀 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲')
        .addOptions([
          {
            label: '𝐎𝐰𝐧𝐞𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Owners',
            description: 'Commands for Owners',
            emoji: '<:sqxg:1247131844852453406>',
          },
          {
            label: '𝐏𝐮𝐛𝐥𝐢𝐜 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Public',
            description: 'Commands for Public',
            emoji: '<:cxhw:1247132727073837150>',
          },
          {
            label: '𝐀𝐝𝐦𝐢𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Admins',
            description: 'Commands for Admins',
            emoji: '<:xQNSQ:1247133023133241427>',
          },
          {
            label: '𝐒𝐭𝐨𝐫𝐞 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Store',
            description: 'Commands for Store',
            emoji: '<:hsgsb:1247132409191858259>',
          },
          {
            label: '𝐏𝐨𝐢𝐧𝐭𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Points',
            description: 'Commands for Points',
            emoji: '<:ksja:1234619400527548526>',
          },
        ]),
    );

    const devButton = new MessageButton()
      .setStyle('LINK') 
      .setLabel('𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫')
      .setEmoji('')
      .setURL('');

    const supportServerButton = new MessageButton()
      .setStyle('LINK')
      .setEmoji('')
      .setLabel('𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐒𝐞𝐫𝐯𝐞𝐫')
      .setURL('');

    const rowWithButtons = new MessageActionRow().addComponents(devButton, supportServerButton);
    message.channel.send({ embeds: [embed], components: [row, rowWithButtons] });
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isSelectMenu()) return;

  const category = interaction.values[0];

  if (category === 'Owners') {
    const first = new MessageEmbed()
      .setTitle("**Owners Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}setavatar \` To Change Avatar Bot \`

> ${prefix}team \` To Mention All Members In Team \`

> ${prefix}tbc \` To Send Broadcast For Team \`**`);

    interaction.update({ embeds: [first], components: interaction.message.components });
  } else if (category === 'Public') {
    const publicCmds = new MessageEmbed()
      .setTitle("**Public Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`** 
> ${prefix}uptime \` To Show Uptime Bot \`

> ${prefix}link \` To Show Link Server \`

> ${prefix}inrole \` To Show Role Member \`

> ${prefix}inrole \` To Show Avatar Member \`

> ${prefix}dev \` To Find Out Who Made The Bot\`**`);

    interaction.update({ embeds: [publicCmds], components: interaction.message.components });
  } else if (category === 'Admins') {
    const adminCmds = new MessageEmbed()
      .setTitle("**Admin Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}embed \` To Make Embed Message \`

> ${prefix}say \` To Make Say Message \`

> ${prefix}unbanall \` To UnBan All Member \`

> ${prefix}name \` To SetName A Member \`

> ${prefix}lock \` To Lock Channel \`

> ${prefix}unlock \` To UnLock Channel \`

> ${prefix}show \` To Show Channel \`

> ${prefix}hide \` To Hide Channel \`

> ${prefix}ban \` To Ban Member \`

> ${prefix}unban \` To UnBan Member \`

> ${prefix}mute \` To Mute Member \`

> ${prefix}unmute \` To UnMute Member \`

> ${prefix}g-role \` To Give Role To Member \`

> ${prefix}r-role \` To Remove Role To Member \`

> مقبول \` To Accept Someone For Team \`
 
> مرفوض \` To Reject Someone For Team \`
 
> دليل \` To Get The Pro Bot Website Where You Can Find The Guide \`
 
> ${prefix}bot \`To obtain a form if you are requesting a bot \`
 
> ${prefix}design \` To obtain a form if you are requesting a design \`
 
> ${prefix}rep \` To obtain a form if you want to inform someone \`

> ${prefix}num \` To register the seller number \`**`);

    interaction.update({ embeds: [adminCmds], components: interaction.message.components });
  } else if (category === 'Store') {
    const storeCmds = new MessageEmbed()
      .setTitle("**Store Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}send \` To Send Msg DM To Member \`
      
> ${prefix}come \` To Come DM To Member \`

> ${prefix}tax \` To Show Tax A Number \`

> ${prefix}welcome-seller \` To Welcome Seller \`

> ${prefix}upgrade \` To Upgrade Seller \`

> ${prefix}remove \` To Remove Seller \`

> ${prefix}font \` To Change Word For 𝐖𝐨𝐫𝐝 \`
        
> ${prefix}tag \` To Change Seller Name \`

> For Tickets :

> \`  ${prefix}Ws \`

> \`  ${prefix}Come \`

> \`  Fb \`

> \`  خمول \`

> \` تفضل \`

> \` حول \` **`);

    interaction.update({ embeds: [storeCmds], components: interaction.message.components });
  } else if (category === 'Points') {
    const PointsCmds = new MessageEmbed()
      .setTitle("**Points Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
 Sooon

> ${prefix}top (❌️)
      
> ${prefix}rank (❌️)

> ${prefix}addpoint (❌️)

> ${prefix}removepoint (❌️)

> ${prefix}point (❌️)

> ${prefix}Add Points (❌️)

> ${prefix}topd (❌️)
 
> ${prefix}points (❌️)
         
> ${prefix}apoints (❌️)

> Points Target :** \` Re - $Close - $Delete - $Rename - +Come - +Ws - Fb - io - تفضل \` `);
 
    interaction.update({ embeds: [PointsCmds], components: interaction.message.components });
  }
});
client.on('messageCreate', message => {
  if (message.content === prefix + 'dev') {
    const embed = {
      title: `__Thailand Codes & Mimo__ 𝖣𝖾𝗏𝗅𝗈𝗉𝗆𝖾𝗇𝗍 𝖡𝗈𝗍`,
      thumbnail: {
        url: '',
        height: 100,
        width: 100,
        proxy_url: ''},
      description: `**・~ 𝖨𝖿 𝖸𝗈𝗎 𝖶𝖺𝗇𝗍 𝖲𝗎𝖼𝗁 𝖠 𝖡𝗈𝗍 , 𝖢𝗈𝗇𝗍𝖺𝖼𝗍 : Thailand Codes & Mimo𝐎𝐰𝐧𝐞𝐫𝐬 

・~ __Thailand Codes & Mimo𝐎𝐰𝐧𝐞𝐫𝐬__ : 𝖳𝗁𝗂𝗌 𝖡𝗈𝗍 𝖯𝗋𝗈𝗀𝗋𝖺𝗆𝗆𝖾𝗋 𝖢𝖺𝗇 𝖣𝗈 𝖤𝗑𝖺𝖼𝗍𝗅𝗒 𝖳𝗁𝖾 𝖲𝖺𝗆𝖾 𝖥𝗈𝗋 𝖸𝗈𝗎 

・~ Thailand Codes & Mimo: 𝖳𝗁𝗂𝗌 𝖲𝖾𝗋𝗏𝖾𝗋 𝖨𝗌 𝖳𝗁𝖾 𝖲𝗎𝗉𝗉𝗈𝗋𝗍 𝖲𝖾𝗋𝗏𝖾𝗋 𝖥𝗈𝗋 __Thailand Codes & Mimo𝐎𝐰𝐧𝐞𝐫𝐬__ 𝖡𝗈𝗍𝗌, 𝖶𝗁𝗂𝖼𝗁 𝖳𝗁𝖾 𝖮𝗐𝗇𝖾𝗋 𝖲𝗁𝗂𝗉 𝖲𝖾𝗋𝗏𝖾𝗋. 𝖨𝖿 𝖸𝗈𝗎 𝖶𝖺𝗇𝗍 𝖨𝗍, 𝖦𝗈 𝖳𝗁𝖾𝗋𝖾 **`,
      thumbnail: {
        url: ''
      },
      color: (color),
    };

    const button = new MessageButton()
      .setLabel('Thailand Codes & Mimo𝐎𝐰𝐧𝐞𝐫𝐬')
      .setURL('')
      .setEmoji('')
     .setStyle('LINK');
    const button2 = new MessageButton()
      .setLabel('Thailand Codes & Mimo')
      .setURL('https://discord.gg/UwEKTCkJ')
      .setEmoji('')
    .setStyle('LINK'); 

    const row = new MessageActionRow().addComponents(button, button2);

    message.channel.send({ embeds: [embed], components: [row]  });
    message.delete()
  }
});
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {

    setInterval( async () => {
    client.channels.fetch("1345702104228167711") 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 


/**Welcome In __Thailand Codes & Mimo__
link The Server :   
Enjoy Bro  * */
client.on('guildMemberAdd' , async(member) => {
  let welcomefukenembed = new MessageEmbed()
  .setAuthor({name: member.user.username , iconURL : member.user.displayAvatarURL({dynamic: true})})
  .setFooter({ text : member.user.username , iconURL: member.user.displayAvatarURL({dynamic: true})})
.setImage("")
.setThumbnail(member.user.displayAvatarURL({dynamic: true}))
  .setTimestamp()
  .setDescription(`**𝐇𝐢 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 __Thailand Codes & Mimo __𝐎𝐧𝐞 𝐎𝐟 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐀𝐧𝐝 𝐁𝐢𝐠𝐠𝐞𝐬𝐭 𝐒𝐡𝐨𝐩𝐬 𝐈𝐧 𝐓𝐡𝐞 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲__.

> 𝐓𝐡𝐢𝐬 __𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐇𝐞𝐥𝐩𝐢𝐧𝐠__ 𝐘𝐨𝐮 𝐓𝐨 𝐍𝐨𝐰 𝐇𝐨𝐰 𝐓𝐨 𝐔𝐬𝐞 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬. 

 𝐅𝐨𝐫 __𝐎𝐫𝐝𝐞𝐫__ :⁠
<#${order}>

 𝐘𝐨𝐮 𝐀𝐫𝐞 __𝐌𝐞𝐦𝐛𝐞𝐫 𝐍𝐮𝐦𝐛𝐞𝐫__ :  \`${member.guild.memberCount}\` <:vote_black:1267753866477305950>


» 𝐄𝐧𝐣𝐨𝐲 <𝟑   **`) 
   .setColor(color)

 member.guild.channels.cache.get(welcomerooom).send({ content: `**Hey** <@!${member.user.id}> **Welcome To ** __${member.guild.name}__ ` , embeds: [welcomefukenembed]});

      member.send(`

> **Welcome To** __Thailand Codes & Mimo__ <<a:pr3:1270714393595740211> 

- **مرحبا بك نورت أحسن و أضمن ستور في الشرق الاوسط :** __Thailand Codes & Mimo__

- **__تعريف صغير__ : **Thailand Codes & Mimoسيرفر عربي و يتوفر فيه جميع المنتوجات و الخدمات التي تحتاجها ,..

 **For Order :** <#1345741979279163453${order}>

> \`###\` 𝗘𝗻𝗷𝗼𝘆 𝗕𝗿𝗼  `)

})    


client.on('messageCreate', async(message) => {
  if(message.author.bot) return;

  if(message.content === "مقبول") {
 message.delete()
message.channel.send(`**تم قبولك في تيم 𝐓𝐫𝐚𝐩  **

**__برجاء التفاعل بشكل لائق ف السيرفر لكي لا يتم تصفيتك__** 

**برجاء قرائة __قوانين__ و __نيوز التيم__ و جيداً لعدم أخد ورنات**  
> <#${rulest}> , <#${newst}>

**اجباري وضع اللينك ف البايو الخاص بك بهذه الطريقه :**
**Thailand Codes & Mimo:** ${link}

**و أهلا بيك في <@&1340762004608258125>  **`)
  }
    if(message.content === "دليل") {
      message.delete()
message.channel.send(`> ** يرجي اجباريأ لمساعدتك بالكامل ، ارسال صوره للتحويلات عن طريق موقع التحويلات :**   



> **About https://probot.io/transactions **`)
    }

if(message.content === "شفر") {
      message.delete()
message.channel.send(`**من فضلك قم بتشفير الجمله التي ترسلها
وعدم السب وعدم ذكر خوادم اخرى**`)
    }

  if(message.content === "مرفوض") {
   message.delete()
message.channel.send(`**__تم رفضك في فريق 𝖥𝖺𝗌𝗍𝖾𝗋 𝖳𝖾𝖺𝗆__   

__قم بتطوير مستواك و العمل على توفير الشروط الازمة و التقديم مره اخري__**`)
  }
   if(message.content === "Map") {
     message.delete()
  message.channel.send(`- __𝐇𝐢 𝐂𝐥𝐢𝐞𝐧𝐭 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐈𝐧 Thailand Codes & Mimo__ 

- __ماب السيرفر__ / **Server Map** 


 __𝖳𝗈 𝖮𝗋𝖽𝖾𝗋 | لطلب منتج__ :

 <#${order}>


 __𝖳𝗈 𝖲𝗎𝗉𝗉𝗈𝗋𝗍 | لو عندك اي مشكله__ :

 <#${supportt}>


  __𝖠𝖣?? 𝖯𝗋𝗂𝖼𝖾𝗌 | اسعار الاعلانات__ :

 <#${adsprice}> 


 __𝖳𝗈 𝖠𝗉𝗉𝗅𝗒 | للتقديم علي التيم__ :

 ⁠<#${applyteam}>
   

 __𝖳𝗈 𝖦𝗂𝗏𝖾𝖠𝗐𝖺𝗒𝗌 | للهداية__ :

 <#${giveaway}>


 __𝖳𝗈 𝖥𝖾𝖾𝖽𝖻𝖺𝖼𝗄 | للتقييمات__ :

 <#${feedback}>
  


> 𝖶𝖾𝗅𝖼𝗈𝗆𝖾 𝖨𝖭 __ Trap Store__  

  > [𝗦𝗲𝗿𝘃𝗲𝗿 𝗟𝗶𝗻𝗸 :]

  ${link}
    
  
> 𝗘𝗻𝗷𝗼𝘆 𝗕𝗿𝗼  `)
      }
  if(message.content === "Sp ip") {
    message.reply(` ** > إختار Domaine لل IP تاعك**
- __مثال__ : fast-shop.publicvm.com:7777

<a:arrow_left_glow:1270511689107767368> ** و قم بتحويل المبلغ المطلوب و هوا : ** __368422__

<a:arrow_left_glow:1270511689107767368> **روم التحويل :** https://discord.com/channels/1291668633340350515/1345738752252710964

https://cdn.discordapp.com/attachments/1329872438611410985/1345716829351444500/standard-1.gif?ex=67c58ff6&is=67c43e76&hm=d8fc4254ae3f925b83663fa165600fc5f787d27e6704734bbfab4e253cdeb61d&`)
  }
  if(message.content === "sp ip") {
    message.reply(`https://cdn.discordap`)
  }
if(message.content === "$close") {
    message.reply(`$delete`)
  }
   if(message.content === prefix+"bot") {
    message.reply(`** > اهلا بك برجائ ملئ  القائمه لمساعده المبرمج 

 1- قم بكتابة اسم البوت :

 2- قم بإرسال صوره / بنر / خط البوت :

 3- قم بتحديد Prefix البوت : + / - / = / $ / . / ؟ / !

برجاء الصبر حتي ينتهي المبرمج من البوت الخاص بك  **`)
  }

  //
  if(message.content === prefix+"design") {
    message.reply(`** > برجاء ملء الاستماره __لمساعده المصمم__ 

 1- ・ ما هو __اسم سيرفرك__ و __اختصاره__

 2- ・ ما هو __لون التصميم__ الذي تريده

 3- ・ ما هو __نوع التصميم__ ( جيمنج , ستور , سامب , الخ..)

 4- <>・ما هو __شكل التصميم__ الذي تريده ( Logo , Banner , Line , Welcome ,... ) 

 5- ・ هل لديك مثال علي __التصميم__ الذي تريده (اختياري)

 6- ・ كم __عدد الساعات__ التي تريد ان يتم انهاء التصميم فيها**`)
  }
  if(message.content === "Ws") {
    message.channel.send(`**> الـرجـاء إنـتـظـار  بـائـ؏ أخـر __لـتـوفـيـر__ طـلـبـڪ 
 <@&1340762004608258125>

- فـي ﺣـالـﺔ عـدم الـرد خـلال 30__ دقـيـقـة__ سـيـتـم إغـلاق الـتـذڪرة مـبـاشـرة وشـڪـرا  **`);
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
  if(message.content === "تفضل") {
    message.channel.send(`**>  | السلام عليڪم
>  | هـنـا طـاقـم عمـل يونيفرس ستور    
>  | معـڪ الـبـائـ؏ ${message.author} ڪيف يمكـنـني خدمتك  **`);
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
  if(message.content === "Tfadhel") {
    message.channel.send(`**>  | السلام عليڪم 
>  | هـنـا طـاقـم عمـل يونيفرس ستور    
>  | معـڪ الـبـائـ؏ ${message.author} ڪيف يمكـنـني خدمتك  **`);
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
  if(message.content === "Offers") {
    message.delete()
    message.channel.send(`**> الـرجـاء قـومـوا بـتـنـزيـل عـروض
> لا تـنـسـوا كـل 5 دقـائـق قـومـوا بـتـنـزيـل عـروض
> او سـوف يـتـم الـتـنـزيـل مـن رتـبـتـك
- <@&1177660748063842375> <:emoji_103:1266807218729386025>  **`);
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
  if(message.content === "حول") {
    message.delete()
    message.channel.send(`**> الـرجـاء قـم بـتـحـويـل الـمـبـلـغ الـمـطـلـوب هـنـا :
> https://discord.com/channels/1291668633340350515/1345738752252710964 <a:donator:1279863076329623653>**`);
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
  if(message.content === "Host") {
    message.channel.send(`** > إملأ البيانات و إنتضر __حتى يتم تجهيز خادمك__ <a:emoji_3:1265113410794819656>
#- __Host Name__ :

#- __Username__ :

#- __Password__ :

#- __Emile__ :**`);
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
 if(message.content === "Tag") {
   message.channel.send(` 𝐓𝐫𝐚𝐩丶`);
  }
   if(message.content === prefix+"rep") {
     message.delete()
     message.channel.send({embeds: [
       new MessageEmbed()
       .setTitle(`${message.guild.name} Team Requirements`)
       .setDescription(`\`-\` للتبليغ علي سيلر قم باملاء **الاستماره** حتي نستطيع **تعويضك** <a:emoji_12:1175105109718478898>

- صاحب **البلاغ** :
- إسم **السيلر** :
- ايدي **السيلر** :
- فسر ماذا **حدث** :
- قم بإرسال **الدلائل** مع دليل **التحويل** :
`)
       .setFooter({text: `${message.guild.name} Requirements` , iconUrl: message.guild.iconURL()})
       .setTimestamp()
       .setColor(color)
       .setThumbnail(message.guild.iconURL())
     ]})
   }

  if(message.content === prefix+"med") {
     message.delete()
     message.channel.send({embeds: [
       new MessageEmbed()
       .setTitle(`${message.guild.name} Team Requirements`)
       .setDescription(`\`-\`  للحصول على __وسيط__ قم باملاء الاستماره حتي نستطيع اكمال عمليه الوسطه <a:2449verifywhite:1279862867587235850>

- **ايدي البائع للوسيط** :
- **نوع السلعة** :
- **سعر السلعة** :
- **الضرائب على من** :
`)
       .setFooter({text: `${message.guild.name} Requirements` , iconUrl: message.guild.iconURL()})
       .setTimestamp()
       .setColor(color)
       .setThumbnail(message.guild.iconURL())
     ]})
   }
    if(message.content.toLowerCase() === "link") {
    message.channel.send(`**Welcome In __Thailand Codes & Mimo__ 
> link __The Server__ : ${link}
- Enjoy Bro **`)
  }
    if(message.content === "لينك") {
    message.channel.send(`**Welcome In __Thailand Codes & Mimo__ 
> link __The Server__ : ${link}
- Enjoy Bro **`)
  }
  if(message.content === "لاين") {
    message.delete();
    message.channel.send({embeds: [new MessageSend().setImage(line)]})
  }
    if(message.content.toLowerCase() === "line") {
    message.delete();
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
    if(message.content === "خط") {
    message.delete();
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
    if(message.content.toLowerCase() === "fb") {
      message.reply(`**Thanks For Choosing** __Thailand Codes & Mimo__   

> **Your Opinion Matters , Please Give** __Feedback__ **And** __Mention__ **The Name Of** __The Seller__ : ${message.author}
  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

- __Here__ **:**

 <#${feedback}>`)
        
    }
    
  });

    client.on("ready", async () => {
        client.guilds.cache.forEach(async(guild) => {
          let channelID = ''; 
          let channel = guild.channels.cache.get(channelID);

          setInterval(() => {
     let azkar = [`أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ
اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. `,`قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ`,`بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ. 
`,`اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.ح 
`,`اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ. `,`سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه.`,`أَمْسَيْنَا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ. `,`اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ. `,`بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم.`,`حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم. `,`اللّهُـمَّ ما أَمسى بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر. `,`اللّهُـمَّ إِنِّـي أَمسيتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك.`,`رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً. `,`اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ .`,`أَمْسَيْـنا وَأَمْسـى المـلكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذهِ اللَّـيْلَةِ وَخَـيرَ ما بَعْـدَهـا ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذهِ اللَّـيْلةِ وَشَرِّ ما بَعْـدَهـا ، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر. `,`بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ. `,`أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ
آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ`,`اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي. `,`يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْ`,`أَمْسَيْنا وَأَمْسَى الْمُلْكُ للهِ رَبِّ الْعَالَمَيْنِ، اللَّهُمَّ إِنَّي أسْأَلُكَ خَيْرَ هَذَه اللَّيْلَةِ فَتْحَهَا ونَصْرَهَا، ونُوْرَهَا وبَرَكَتهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فيهِا وَشَرَّ مَا بَعْدَهَا. `,`اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم. `,`أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق. `,`اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. `,`اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.`,`اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ. `,`أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ. `,`يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ. `,`لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ. `,`اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ. `,`سُبْحـانَ اللهِ وَبِحَمْـدِهِ. `,`
بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿1﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿2﴾ الرَّحْمَنِ
الرَّحِيمِ ﴿3﴾ مَالِكِ يَوْمِ الدِّينِ ﴿4﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ
نَسْتَعِينُ ﴿5﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿6﴾ صِرَاطَ الَّذِينَ
أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿7﴾.`,`اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِي.`,`سُبْحانَ رَبِّيَ الْعَظِيمِ. ثلاث مرَّاتٍ.
`,`سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلاَئِكةُ مِنْ خِيفَتِهِ.`,`لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.`,`
اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي.`,`
سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ ثلاثاً وثلاثين لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.`,`جَزَاكَ اللَّهُ خَيْراً.`,`الباقيات الصالحات : سبحان الله والحمد لله ، ولا إله إلا الله ،والله أكبر ،و لا حول ولا قوة إلا بالله`,`لاَ إِلَهَ إِلاَّ اللَّهُ الْوَاحِدُ الْقَهّارُ، رَبُّ السَّمَوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الْعَزيزُ الْغَفَّارُ.`,`بِسْمِ اللَّهِ ثَلَاثًا، أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ سَبْعَ مَرَّاتٍ.`,`وَقَالَ صلى الله عليه وسلم: أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ فَأَكثِرُوا الدُّعَاءَ.`,`اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.`,`الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلاَكَ بِهِ، وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلاً.`,`رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً.`,`
اللَّهُمَّ لَكَ الْحَمْدُ، أَنْتَ نُورُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، [وَلَكَ الْحَمْدُ أَنْتَ رَبُّ السَّمَواتِ وَالأَرْضِ وَمَنْ فِيهِنَّ] [وَلَكَ الْحَمْدُ لَكَ مُلْكُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ] [وَلَكَ الْحَمْدُ أَنْتَ مَلِكُ السَّمَوَاتِ وَالأَرْضِ] [وَلَكَ الْحَمْدُ] [أَنْت الحق، ووعدك الحق، وقولك الحق، ولقاؤك الحق، والجنة حق، والنار حق، والنبيون حق، ومحمد صلى الله عليه وسلم حق، والساعة حق] [اللهم لك أسلمت، وعليك توكلت، وبك آمنت، وإليك أنبت، وبك خاصمت، وإليك حاكمت. فاغفر لي ما قدمت، وما أخرت، وما أسررت، وما أعلنت] [وما أنت أعلم به مني] [أنت المقدم، وأنت المؤخر لا إله إلا أنت] [أنت إلهي لا إله إلا أنت] [ولا حول ولا قوة إلا بالله].`,`سُبْحـانَ اللهِ وَبِحَمْـدِهِ.`,`أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ، وَأَكَلَ طَعَامَكُمُ الْأَبْرَارُ، وَصَلَّتْ عَلَيْكُمُ الْمَلاَئِكَةُ.`,`اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ.`,`
اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ، أَوْ أُضَلَّ، أَوْ أَزِلَّ، أَوْ أُزَلَّ، أَوْ أَظْلِمَ، أَوْ أُظْلَمَ، أَوْ أَجْهَلَ، أَوْ يُجْهَلَ عَلَيَّ.`,`
أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ، وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّياطِينِ وَأَنْ يَحْضُرُونِ.`,`زَوَّدَكَ اللَّهُ التَّقْوَى، وَغَفَرَ ذَنْبَكَ، وَيَسَّرَ لَكَ الخَيْرَ حَيْثُ ما كُنْتَ.`,`اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسي ، ومن شر كل دابة أنت آخذ بناصيتها ، إن ربي على صراط مستقيم.
`,` الرَّحْمَنِ الرَّحِيمِ ﴿1﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿2﴾ الرَّحْمَنِ
الرَّحِيمِ ﴿3﴾ مَالِكِ يَوْمِ الدِّينِ ﴿4﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ
نَسْتَعِينُ ﴿5﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿6﴾ صِرَاطَ الَّذِينَ
أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿7﴾.`,`
يَقُولُ: وَأَنَا أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ، رَضِيتُ بِاللَّهِ رَبَّاً، وَبِمُحَمَّدٍ رَسُولاً، وَبِالْإِسْلاَمِ دِينَاً يَقُولُ ذَلِكَ عَقِبَ تَشَهُّدِ الْمُؤَذِّنِ.`,`رَبَّنَا وَلَكَ الْحَمْدُ، حَمْداً كَثيراً طَيِّباً مُبارَكاً فِيهِ.
`,`
أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّةِ مِنْ غَضَبِهِ وَعِقَابِهِ ، وَشَرِّ عِبَادِهِ ، وَمَنْ هَمَزَاتِ الشَّيَاطِينِ ، وَأَنْ يَحْضُرُونِ.`,`سُبْحانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلاَ إِلَهَ غَيْرُكَ.
`,`تُبْلِي وَيُخْلِفُ اللَّهُ تَعَالَى`,`
سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه`,`
وَقَالَ صلى الله عليه وسلم: يَا عَبْدَ اللَّهِ بْنَ قَيْسٍ أَلاَ أَدُلُّكَ عَلَى كَنْزٍ مِنْ كُنُوزِ الْجَنَّةِ؟ فَقُلْتُ: بَلَى يَا رَسُولَ اللَّهِ، قَالَ: قُلْ لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.
`,`
سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ ثلاثاً وثلاثين لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.`]
  let randomAzkar = azkar[Math.floor(Math.random() * azkar.length)];

      const embed = new MessageEmbed()
        .setColor(color) 
        .setTitle('Azkar')
        .setDescription(`**${randomAzkar}**`)
        .setImage(line) 
        .setTimestamp();

      channel.send({ embeds: [embed] })
        .then(() => console.log('تم إرسال الرسالة بنجاح'))
        .catch(error => console.error(`خطأ أثناء إرسال الرسالة: ${error.message}`));
    }, 600000); 
});
});

//welcome sellers
client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "welcome-seller")) {  
    const owner = ["","","","","",""] 
     
    if (!owner.includes(message.author.id)) return message.reply(`** | This Command __Only Hight Rank__**`);
    
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** | Your Dont't Have __Perm__ In Role**`);
    let user = message.mentions.users.first()
    let args = message.content.split(" ").slice(2).join(" ")
    if (!user) return message.reply("** > Pls __Mention__ Seller**")
    if (!args) return message.reply("** | Pls __Mention__ Roles seller**")
    client.channels.cache.get(welcomesellerroom).send(` || @everyone ||

> **Welcome To Team Of __Thailand Codes & Mimo__ **

 **Seller : ${user}** 
 **Seller Role : ${args}** 
 **Read The __Rules__ To Avoid Take __Warns__ <#${rulest}> **
 **Thank You To Apply To __Fast𝖾𝗋 Team__ **

 **𝖤𝗇𝗃𝗈𝗒 <3   **`)
    client.channels.cache.get(welcomesellerroom).send({
      embeds: [
        new MessageEmbed()
          .setImage(line)
          .setColor(color)
      ]
    })
    message.reply("> **𝖣𝗈𝗇𝖾** : __Adding The Welcome Of The Seller__  ")
  }
})

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "num")) {
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** | Your Don't Have Perm In Role**`);
    let user = message.mentions.users.first();
    let number = message.content.split(" ").slice(2).join(" ");
    if (!user) return message.reply("** | 𝖯𝗅𝖾𝖺𝗌𝖾 __𝖬𝖾𝗇𝗍𝗂𝗈𝗇__ 𝖲𝖾𝗅𝗅𝖾𝗋**");
    if (!number) return message.reply("** | 𝖯𝗅𝖾𝖺𝗌𝖾 __𝖶𝗋𝗂𝗍𝖾__ 𝖭𝗎𝗆𝖻𝖾𝗋 𝖲𝖾𝗅𝗅𝖾𝗋**");
    
    const embed = new MessageEmbed()
      .setTitle('**𝐍𝐮𝐦𝐛𝐞𝐫 𝐒𝐞𝐥𝐥𝐞𝐫**')
      .setDescription(`**𝖭𝖺𝗆𝖾 : ${user} 
                    𝖨𝖣 : ${user.id} 
                    𝖭𝗎𝗆𝖻𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 : ${number} 
 
 
 
 
 
 
 
 
 
 

                    𝖠𝖽𝗆𝗂𝗇 𝖨𝗇𝖿𝗈:
                    𝖭𝖺𝗆𝖾 : ${message.author.username} <a:emoji_41:1266514060174823517>
                    𝖴𝗌𝖾𝗋 : <@${message.author.id}> <a:emoji_41:1266514060174823517>
                    𝖨𝖣 : ${message.author.id} <a:F16_23G:1266515038630576208>**`)
      .setColor(color)
      .setThumbnail(message.guild.iconURL())
      .setImage(line);

    client.channels.cache.get(sellernumber).send({ embeds: [embed] });
    message.reply("**> 𝖲𝖾𝗅𝗅𝖾𝗋 𝖭𝗎𝗆𝖻𝖾𝗋 __𝖱𝖾𝗀𝗂𝗌𝗍𝖾𝗋𝖾𝖽 𝖲𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒__  **");
  }
});

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "remove")) {
    const owner = [" 1190084949857030264","1243231184511565934","1112161353696804874","889060824969265153","",""]
    
    if (!owner.includes(message.author.id)) return message.reply(`**<a:1M_48:1267753499681226795> | This Command Only __Hight Rank__**`);
      
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** | You Don't Have __Perm__ In Role**`);
    let user = message.mentions.members.first()
    let args = message.mentions.roles.first()
    if (!user) return message.reply("** | Pls __Mention__ Seller**") 
    if (!args) return message.reply("** | Pls __Mention__ Role __The Reason__ Of Remove**")
    user.roles.add(args)
    client.channels.cache.get(upgraderoom).send(` || @everyone ||

${user} 𝖧𝖺𝗌 𝖡𝖾𝖾𝗇 __𝖱𝖾𝗆𝗈𝗏𝖾𝖽__ 𝖥𝗋𝗈𝗆 𝖳𝗁𝖾 :
<@&1208450602288554085> <a:384:1186627064774807562>

 __𝖳𝗁𝖾 𝖱𝖾𝖺𝗌𝗈𝗇__ : ${args} <a:swxo:1267753181064990821>
`)
      client.channels.cache.get(upgraderoom).send({
      embeds: [
        new MessageEmbed()          .setColor(color)
      ]
    })
    const upgradedmembed = new MessageEmbed()
      .setColor(color) 
      .setTimestamp()
      .setDescription(
        `** 
 ${user} , 𝖸𝗈𝗎 𝖧𝖺𝗏𝖾 __𝖱𝖾𝗆𝗈𝗏𝖾𝖽__ 𝖥𝗋𝗈𝗆 𝖳𝗁𝖾 𝐓𝐫𝐚𝐩丶𝐓𝐞𝐚𝐦 <a:384:1186627064774807562>

 __𝖱𝖾𝗆𝗈𝗏𝖾𝖽 𝖡𝗒__ : ${user}
**`)
      .setFooter(`> 𝖱𝖾𝗆𝗈𝗏𝖾𝖽 𝖥𝗈𝗋 ${message.author.tag}`);
    user.send({ embeds: [upgradedmembed] });
    message.reply("> **𝖣𝗈𝗇𝖾** : __Removed The Seller__  ")
  }
})
client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let auto = autolinerooms
  if(auto == null) return;
  if(auto.includes(message.channel.id)) {
    message.reply({embeds:[
      new MessageEmbed()
      .setColor(color)
    ]})
  }
})

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "upgrade")) {
    const owner = [" 1190084949857030264","1243231184511565934","1112161353696804874","889060824969265153","",""]
    
    if (!owner.includes(message.author.id)) return message.reply(`** | This Command Only __Hight Rank__**`);

    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** | You Don't Have __Perm__ In Role**`);
    let user = message.mentions.members.first()
    let args = message.mentions.roles.first()
    if (!user) return message.reply("** | Pls __Mention__ Seller**") 
    if (!args) return message.reply("** | Pls __Mention__ Roles seller**")
    user.roles.add(args)
    client.channels.cache.get(upgraderoom).send(` || @everyone ||
                         __𝐔𝐩𝐝𝐫𝐚𝐝𝐞 𝐓𝐞𝐚𝐦 𝐎𝐟 Thailand Codes & Mimo__ 

 **𝖲𝖾𝗅𝗅𝖾𝗋 : ${user}** 
 **𝖴𝗉𝗀𝗋𝖺𝖽𝖾𝖽 𝖳𝗈 : ${args}**  
 **𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗍 𝖠𝗇𝖽 𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎 𝖥𝗈𝗋 𝖠𝖼𝗍𝗂𝗏𝖺𝗂𝗍𝗂𝗇𝗀 𝖨𝗇 __Trap-𝖲__** <a:F16_23G:1266515038630576208>

 __𝖢𝗈𝗇𝗀𝗋𝖺𝗍𝗎𝗅𝖺𝗍𝗂𝗈𝗇__ `)
    client.channels.cache.get(upgraderoom).send({
      embeds: [
        new MessageEmbed()
          .setImage(line)          .setColor(color)
      ]
    })
    const upgradedmembed = new MessageEmbed()
      .setColor(color) 
      .setTimestamp()
      .setDescription(
        `** 
> 𝖧𝖾𝗅𝗅𝗈 ${user} , 𝖸𝗈𝗎 𝖧𝖺𝗏𝖾 𝖡𝖾𝖾𝗇 𝖯𝗋𝗈𝗆𝗈𝗍𝖾𝖽 𝖳𝗈 𝖭𝖾𝗑𝗍 𝖱𝗈𝗅𝖾 

  __𝖳𝗁𝖾 𝖠𝖽𝗆𝗂𝗇__ : ${user} 

  𝖳𝗁𝗑 𝖥𝗈𝗋 𝖠𝖼𝗍𝗂𝗏𝖺𝗍𝗂𝗇𝗀 𝖨𝗇 __Thailand Codes & Mimo__   

 __𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀__ 
**`)
      .setFooter(`𝖴𝗉𝗀𝗋𝖺𝖽𝖾 𝖥𝗈𝗋 ${message.author.tag}`);
    user.send({ embeds: [upgradedmembed] });
    message.reply("> **𝖣𝗈𝗇𝖾** : __Promoted The Seller__  ")
  }
})
client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let auto = autolinerooms
  if(auto == null) return;
  if(auto.includes(message.channel.id)) {
    message.reply({embeds:[
      new MessageEmbed()
      .setColor(color)
      .setImage(line)
    ]})
  }
})

  client.on('messageCreate', async (message) => {
      if (message.author.id === "557628352828014614" && message.channel.parentId === ordercategory) {
          let member = message.mentions.members.first();
          if (!member || member.bot) return;

          let roleId = "1345561585200009390";
          let role = message.guild.roles.cache.get(roleId);

          if (!role) {
              console.error(`Role with ID ${roleId} not found.`);
              return;
          }

          if (member.roles.cache.has(roleId)) {
              return;
          } else {
              member.roles.add(role.id).then(() => {
                  return message.channel.send({
                      content: `**Done Added __𝐅𝐚𝐬𝐭丶𝐂𝐥𝐢𝐞𝐧𝐭                      __
To Client : ${member.user.username}**`
                  });
              }).catch(error => {
                  console.error("Error adding role:", error);
              });
          }
      }
  });

      client.on("messageCreate", message => {
        if (message.content.startsWith(prefix + "inrole")) {
            let args = message.content.split(" ").slice(1).join(" ");
            if(message.author.bot) return;
            let trole = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.id === args)
             if (!trole) {
                 return message.reply(`** | Please __mention role__ id**`)
             } else {
                 const roleMember = trole.members.map((user) => `${user.id} ${user.user.tag}`).join('\n')
          message.reply({embeds: [
           new MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))

      .setThumbnail(message.author.avatarURL({dynamic:true}))
            .addFields([
          {
          name: `List of users in ${trole.name} role : (${trole.members.size})`,
          value: `**${roleMember}**`
      },
      ])  
      .setColor(color)
      .setImage(line)
      .setFooter(`Members in this role ${trole.members.size}`)]})
        }
        }
       }) 

  client.on("messageCreate", message => {
      if (message.content.toLowerCase().startsWith (prefix+"setavatar")) {
          if (!owner.includes(message.author.id)) return;
          let avLink = message.content.substr(`${prefix}setavatar `.length);
          if (!avLink) return message.channel.send("** | Incorrect Link, __Please Put Avatar__ Link!**");

          // تسجيل تغيير الصورة في الكونسول
          console.log(`Changing __bot avatar__ to: ${avLink}`);

          client.user.setAvatar(avLink).then(() => {
              message.delete()
              message.channel.send('**Bot Avatar __Has Been Changed__  **')
          }).catch(() => {
              message.channel.send('**Error, Try Again Later! <a:384:1186627064774807562>: Incorrect Link __Or Ratelimit__**')
          });
      }
  });


client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.channel.id != feedback) return;
    message.reply({embeds:[
      new MessageEmbed()
      .setColor(color)
      .setDescription(`

**𝖳𝗁𝖺𝗇𝗄𝗌** 𝖥𝗈𝗋 **𝖦𝗂𝗏𝗂𝗇𝗀** 𝖴𝗌 **𝖥𝖾𝖾𝖽𝖻𝖺𝖼𝗄** <a:purple_black_heart:1280841930984656928>

**𝖶𝖾** 𝖧𝗈𝗉𝖾 𝖸𝗈𝗎 **𝖵𝗂𝗌𝗂𝗍** __ Thailand Codes & Mimo__ 𝖠𝗀𝖺𝗂𝗇 <a:pr3:1270714393595740211>
`)
      .setImage(line)
    ]})
  });

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;

    if (message.content.startsWith(prefix + 'send')) {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply(`**<a:1M_48:1267753499681226795> | You don't have __permissions__**`);
        }

        let id = message.content.split(' ')[1];
        let user = message.mentions.members.first() || message.guild.members.cache.get(id);
        let argss = message.content.split(' ').slice(2).join(' ');

        if (!user) {
            return message.channel.send(`**<a:1M_48:1267753499681226795> | Please mention a __member or provide__ their ID**`);
        }

        if (!argss) {
            return message.channel.send(`**<a:1M_48:1267753499681226795> | Please send __a message__**`);
        }

        if (user.user.bot || user.id === message.author.id) {
            return message.channel.send(`**<a:1M_48:1267753499681226795> | You cannot __send a message__ to a bot or yourself**`);
        }

        let attach = message.attachments.first();
        if (attach) {
            user.send({ content: argss, files: [attach] }).then(m => {
                message.channel.send(`**  | Done, __message__ sent**`);
            }).catch(err => {
                return message.channel.send(`**<a:1M_48:1267753499681226795> | Can't __send a message__ to this user**`);
            });
        } else {
            user.send(argss).then(m => {
                message.channel.send(`**  | Done, __message__ sent**`);
            }).catch(err => {
                return message.channel.send(`**<a:1M_48:1267753499681226795> | Can't __send a message__ to this user**`);
            });
        }
    }
});




client.on('messageCreate', async message => {
        if(message.content.startsWith(prefix + 'unbanall')) {
                let b = await message.guild.bans.fetch()
                if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("<a:1M_48:1267753499681226795> | You don't Have __permissions__")
                b.forEach(ban => message.guild.members.unban(ban.user))
                        message.reply(`**  ${b.size} members __has been__ unbanned.🛬**`)
        }
});



client.on('messageCreate', async message => {
    if(message.content.toLowerCase().startsWith(prefix + 'name') || message.content.startsWith(prefix + 'اسم')){

      const member = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]);
      const name = message.content.split(" ").slice(2).join(" ")

      if(!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply('لا تمتلك الصلاحيات اللازمة لاستخدام هذا الامر !')
      if(!message.guild.me.permissions.has('MANAGE_NICKNAMES')) return message.reply('لا امتلك الصلاحيات اللازمة للقيام هذا الامر !')

      if(!member) return message.reply('رجاء قم بمنشن العضو الذي تريد تغيير لقبه !')
      if(!name) return message.reply("رجاء قم بكتابة اللقب اللذي تريد وضعه للعضو !")

      member.setNickname(name).catch(() => {message.reply('لا يمكنني تغيير اسم هذا العضو !')})
    }
})


client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'lock')) {
    // قفل القناة
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return;

    const lockRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('unlock')
          .setLabel('Unlock')
          .setStyle('SUCCESS'),
        new MessageButton()
          .setCustomId('lock')
          .setLabel('Lock')
          .setStyle('DANGER'),
      );

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('**Manage Channel**')
      .setDescription(`**Channel ${message.channel} has __been locked__  **`)
      .setImage(line);

    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { SEND_MESSAGES: false }
    );

    const sentMessage = await message.channel.send({
      embeds: [embed],
      components: [lockRow],
    });

    const collector = sentMessage.createMessageComponentCollector({
      componentType: 'BUTTON',
      max: 100,
      time: null,
    });

    collector.on('collect', async (interaction) => {
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return;

      if (interaction.customId === 'unlock') {
        // فتح القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: true }
        );
        embed.setDescription(`**Channel ${message.channel} has __been unlocked__  **`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }

      if (interaction.customId === 'lock') {
        // قفل القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: false }
        );
        embed.setDescription(`**Channel ${message.channel} has __been locked__  **`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
    });
  }
});


client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'unlock')) {
    // فتح القناة
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return;

    const unlockRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('lock')
          .setLabel('Lock')
          .setStyle('SUCCESS'),
        new MessageButton()
          .setCustomId('unlock')
          .setLabel('Unlock')
          .setStyle('DANGER'),
      );

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('**Manage Channel**')
      .setDescription(`**Channel ${message.channel} has __been unlocked__  **`)
      .setImage(line);

    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { SEND_MESSAGES: true }
    );

    const sentMessage = await message.channel.send({
      embeds: [embed],
      components: [unlockRow],
    });
    const collector = sentMessage.createMessageComponentCollector({
      componentType: 'BUTTON',
      max: 100,
      time: null,
    });

    collector.on('collect', async (interaction) => {
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return;

      if (interaction.customId === 'lock') {
        // قفل القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: false }
        );
        embed.setDescription(`**Channel ${message.channel} has __been locked__ <:emoji_110:1269050422014902375>**`);
        await interaction.update({ embeds: [embed], components: [unlockRow] });
      }

      if (interaction.customId === 'unlock') {
        // فتح القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: true }
        );
        embed.setDescription(`**Channel ${message.channel} has __been unlocked__  **`);
        await interaction.update({ embeds: [embed], components: [unlockRow] });
      }
    });
  }
});


client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'hide')) {
    // إخفاء القناة
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return;

    const hideRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('show')
          .setLabel('Show')
          .setStyle('SUCCESS'),
        new MessageButton()
          .setCustomId('hide')
          .setLabel('Hide')
          .setStyle('DANGER'),
      );

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('**Manage Channel**')
      .setDescription(`**Channel ${message.channel} has __been hidden__  **`)
      .setImage(line);

    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { VIEW_CHANNEL: false }
    );

    const sentMessage = await message.channel.send({
      embeds: [embed],
      components: [hideRow],
    });

    const collector = sentMessage.createMessageComponentCollector({
      componentType: 'BUTTON',
      max: 100,
      time: null,
    });

    collector.on('collect', async (interaction) => {
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return;

      if (interaction.customId === 'show') {
        // إظهار القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: true }
        );
        embed.setDescription(`**Channel ${message.channel} has __been shown__  **`);
        await interaction.update({ embeds: [embed], components: [hideRow] });
      }

      if (interaction.customId === 'hide') {
        // إخفاء القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: false }
        );
        embed.setDescription(`**Channel ${message.channel} has __been hidden__  **`);
        await interaction.update({ embeds: [embed], components: [hideRow] });
      }
    });
  }
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'show')) {
    // إظهار القناة
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return;

    const showRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('hide')
          .setLabel('Hide')
          .setStyle('SUCCESS'),
        new MessageButton()
          .setCustomId('show')
          .setLabel('Show')
          .setStyle('DANGER'),
      );

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('**Manage Channel**')
      .setDescription(`**Channel ${message.channel} has __been shown__  **`)
      .setImage(line);

    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { VIEW_CHANNEL: true }
    );

    const sentMessage = await message.channel.send({
      embeds: [embed],
      components: [showRow],
    });

    const collector = sentMessage.createMessageComponentCollector({
      componentType: 'BUTTON',
      max: 100,
      time: null,
    });

    collector.on('collect', async (interaction) => {
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return;

      if (interaction.customId === 'hide') {
        // إخفاء القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: false }
        );
        embed.setDescription(`**Channel ${message.channel} has __been hidden__ **`);
        await interaction.update({ embeds: [embed], components: [showRow] });
      }
     if (interaction.customId === 'show') {
        // إظهار القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: true }
        );
        embed.setDescription(`**Channel ${message.channel} has __been shown__ **`);
        await interaction.update({ embeds: [embed], components: [showRow] });
      }
    });
  }
});


client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + 'unban')) {
if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have __permissions__ **`);
if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;
    let args = message.content.split(' ')
    let id = args[1];
    if(!id)  return message.reply(`** 😕 Please __mention__ member or id **`);
    if(isNaN(id)) {
       return message.reply(`** 😕 Please __mention__ member or id **`);
    } else {
message.guild.members.unban(id).then(mmm => {
        message.reply(`** ${mmm.tag} unbanned!**`)
      }).catch(err => message.reply(`**I can't find __this member__ in bans list**`));
      }
    }
}) 


client.on("messageCreate", async message => {
    if (message.author.bot) return;
    let c = message.content.split(' ')
    if (c[0] == prefix + 'ban') {
        if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have __permissions__ **`);
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;

    let argss = message.content.split(' ')
    let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
    if(!user) return message.reply(`** 😕 Please __mention__ member or id **`);
 if(user.roles.highest.position > message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`**  | You can't ban __this user__**`);

    if(!user.bannable) return message.reply(`**  | You can't ban __this user__**`);
    await user.ban().catch(err => {console.log(err)});
     await message.reply(`**${user.user.tag} banned __from__ the server!**✈️`);
    }
}) 


client.on("messageCreate", async (message) => {
  if (message.content === prefix + "uptime") {
    if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have permissions**`)
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let s = Math.floor(client.uptime / 1000) % 60;
    ip = `${days} days,  ${hours} hours,  ${minutes} minutes,  ${s} seconds,`
    let embed = new Discord.MessageEmbed()
      .setColor(color)
      .setImage(line)
      .setTitle(`uptime:`)
      .setDescription(`**${ip}**`)
      .setThumbnail(client.user.avatarURL())
      .setTimestamp()
    message.reply({ embeds: [embed] })
  }
})


client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith(prefix + "g-role")) {
    const owner = ["1310122909200547851","1248323052760993933","","","",""] 
      
    if
(!message.member.permissions.has(`MANAGE_ROLES`)) return message.reply(` | **You Don't Have __Perm In Role__**`)

    const theRole = message.mentions.roles.first();
    const theUser = message.mentions.members.first();

    if (!theUser) return message.reply('** | Please __Mention__ A User !**')
    if (!theRole) return message.reply('** | Please __Mention__ A Role !**')

    theUser.roles.add(theRole)
      .then(() => {
        message.reply("> **Done** : __Adding The Role__ ")
      })
      .catch((t) => {
        message.reply("Error  : " + t.message)
      })
  }
})


client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith(prefix + "r-role")) {
    const owner = ["1310122909200547851","1248323052760993933","","","",""] 
   
    if (!message.member.permissions.has(`MANAGE_ROLES`)) return message.reply(` | **You Don't have __Perm In Role__**`)
    const theRole = message.mentions.roles.first();
    const theUser = message.mentions.members.first();

    if (!theUser) return message.reply(' | **Please __Mention__ A User !**')
    if (!theRole) return message.reply(' | **Please __Mention__ A Role !**')

    theUser.roles.remove(theRole)
      .then(() => {
        message.reply("> **Done** : __Removed The Role__ ")
      })
      .catch((t) => {
        message.reply("Error  : " + t.message)
      })
  }
})




client.on('channelCreate', message => {
  if (message.parentId !== ordercategory) return;
  setTimeout(() => {
      message.send(`**السلام عليكم ورحمه الله وبركاته .. **  
**معك طاقم العمل لدي يونيفرس ستور في تذكره __الطلب__ 

__ يرجي توضيح طلبك بالكامل بكل توضيح لكي يمكنني مساعدتك بأكمل وجهه وتأكيد طلب المنتج الخاص بك ، سوف امنشن فريق السلعه الخاص بك بطلبك ويرجي التحلي بالصبر وانتظار بائع من فريق العمل ، يرجي العلم أن في حاله عدم توافر المنتج في الوقت الحالي سيتم غلق التذكره والعمل علي توفير المنتج قريبا__ ..   **
https://cdn.discordapp.com/attachments/1329872438611410985/1345716829351444500/standard-1.gif?ex=67c58ff6&is=67c43e76&hm=d8fc4254ae3f925b83663fa165600fc5f787d27e6704734bbfab4e253cdeb61d&`)
  }, 3000);
             })


             client.on('channelCreate', async (channel) => {
              if (channel.parentId !== applycategory) return;
              setTimeout(async () => {
                channel.send({
                  content: `**\`-\` السلام عليكم ورحمة الله وبركاته 
                        \`-\` معك طاقم العمل لدي __يونيفرس ستور__ في تذكرة التقديم    
                        \`-\` برجاء تحديد جنسيتك من خلال الضغط على __القائمة الآتية__   
                        **`,
                  components: [
                    {
                      type: 1,
                      components: [
                        {
                          type: 3,
                          custom_id: 'select_language',
                          placeholder: 'إضغط هنا و قم بتحديد جنسيتك و قدم لطاقم العمل',
                          options: [
                            {
                              label: 'Arabic  👈',
                              value: 'arabic'
                            },
                            {
                              label: 'English  (soon)',
                              value: 'ENGLISH'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                });
            
                channel.send({
                  content: `> __قم بالضغط على ملحوظات مهمة و إقرأها جيدا__ `,
                  components: [
                    {
                      type: 1,
                      components: [
                        {
                          type: 2,
                          style: 'PRIMARY',
                          custom_id: 'notes',
                          label: 'ملحوظات مهمة',
                          emoji: ''
                        }
                      ]
                    }
                  ]
                });
              }, 2000);
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isButton()) return;
            
              if (interaction.customId === 'notes') {
                await interaction.reply({
                  content: `**\`ملحوظات مهمة للغاية\`

 - أهم حاجة الاحترام المتبادل بينك وبين طاقم العمل داخل السيرفر.

 - يجب أن تكون الفيدباكات من سيرفرات مشهورة وموثوق بها.

 - إذا كنت تجلب ورنات أكثر من 3 مرات، سيتم تصفيتك.

 - في حال قمت بنزع إسم أو رابط السيرفر فسيتم تصفيتك.

 - في حال غبت فجأة على العمل و التفاعل فسيتم تصفيتك.

 - في حال كان أسلوبك و معاملتك للزبائن غير لائقة فسيتم تصفيتك.

 - في حال لم تكن متفاعل في الرد التكاتت فسيتم تصفيتك.**`,
                  ephemeral: true
                });
              }
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isSelectMenu()) return;
            
              const language = interaction.values[0];
            
              if (language === 'Tunisien') {
                const modalTunisien = new Modal()
                  .setCustomId('myModalTunisien')
                  .setTitle('Apply Team Submit (Tunisien)');
                const rname = new TextInputComponent()
                  .setCustomId('rname')
                  .setLabel('اسمك')
                  .setStyle('SHORT');
            
                const age = new TextInputComponent()
                  .setCustomId('age')
                  .setLabel('عمرك')
                  .setStyle('SHORT');
            
                const svcount = new TextInputComponent()
                  .setCustomId('svcount')
                  .setLabel('رقم الكاش')
                  .setStyle('SHORT');
            
                const fbcount = new TextInputComponent()
                  .setCustomId('fb')
                  .setLabel('معاك 15 فيد باك من ستورات ولا لا ؟')
                  .setStyle('SHORT');
            
                const roles = new TextInputComponent()
                  .setCustomId('roles')
                  .setLabel('مالذي ستبيعه')
                  .setStyle('SHORT');
            
                const name = new MessageActionRow().addComponents(rname);
                 
                const svvcount = new MessageActionRow().addComponents(svcount);
                const agge = new MessageActionRow().addComponents(age);
                  
                const fbvcount = new MessageActionRow().addComponents(fbcount);
                const rovles = new MessageActionRow().addComponents(roles);
            
                modalEgyptian.addComponents(name, agge, svvcount, fbvcount, rovles);
            
                await interaction.showModal(modalEgyptian);
              } else if (language === 'arabic') {
                const modalArabic = new Modal()
                  .setCustomId('myModalArabic')
                  .setTitle('Apply Team Submit (Arabic)');
                const rname = new TextInputComponent()
                  .setCustomId('rname')
                  .setLabel('كم عمرك')
                  .setStyle('SHORT');
                   
                const age = new TextInputComponent()                                       .setCustomId('age')
                  .setLabel('حدد كم مدة خبرتك في البيع و الشراء')
                  .setStyle('SHORT'); 
                  
                const svcount = new TextInputComponent()
                  .setCustomId('svcount')
                  .setLabel('هل معك 300 ألف ضمانة ( اي , لا )')
                
                  .setStyle('SHORT');
                  
                const fbcount = new TextInputComponent()
                  .setCustomId('fb')
                  .setLabel('هلا عندك فيدباكات ؟ و كم عددها')
                  .setStyle('SHORT');
            
                const roles = new TextInputComponent()
                  .setCustomId('roles')
                  .setLabel('ماذا سوف تبيع')
                  .setStyle('SHORT');
            
                const name = new MessageActionRow().addComponents(rname);

                const svvcount = new MessageActionRow().addComponents(svcount);
                const agge = new MessageActionRow().addComponents(age);
                  
                const fbvcount = new MessageActionRow().addComponents(fbcount);
                const rovles = new MessageActionRow().addComponents(roles);
            
                modalArabic.addComponents(name, agge, svvcount, fbvcount, rovles);
            
                await interaction.showModal(modalArabic);
              } else if (language === 'ENGLISH') {
                const modalEnglish = new Modal()
                  .setCustomId('myModalEnglish')
                  .setTitle('Apply Team Submit (English)');
                const rname = new TextInputComponent()
                  .setCustomId('rname')
                  .setLabel('Your Age')
                  .setStyle('SHORT');
            
                const age = new TextInputComponent()
                  .setCustomId('age')
                  .setLabel('How Long Do You Have Experience In Buying And Selling')
                  .setStyle('SHORT');
            
                const svcount = new TextInputComponent()
                  .setCustomId('svcount')
                  .setLabel('You Have 300k Guarantee')
                  .setStyle('SHORT');
              
                const fbcount = new TextInputComponent()
                  .setCustomId('fb')
                  .setLabel('How Much Feedback Do You Have ( Private Transactions Or Shop )')
                  .setStyle('SHORT');
            
                const roles = new TextInputComponent()
                  .setCustomId('roles')
                  .setLabel('What Will You Sell')
                  .setStyle('SHORT');
            
                const name = new MessageActionRow().addComponents(rname);
                  
                const svvcount = new MessageActionRow().addComponents(svcount);
                const agge = new MessageActionRow().addComponents(age);
                  
                const fbvcount = new MessageActionRow().addComponents(fbcount);
                const rovles = new MessageActionRow().addComponents(roles);
            
                modalEnglish.addComponents(name, agge, svvcount, fbvcount, rovles);
            
                await interaction.showModal(modalEnglish);
              }
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isButton()) return;
            
              if (interaction.customId === 'notes') {
                await interaction.reply({
                  content: `**'Very Important Notes'
            
   - The Most Important Thing Is Mutual Respect Between You And The Staff Inside The Server.

              - Feedback Should Be From Popular And Trusted Servers.

              - If You Bring More Than 3 Rings, You Will Be Eliminated. 

              - If You Remove The Server Name Or Link, You Will Be Eliminated.
              - If You Suddenly Miss Work And Interaction, You Will Be Eliminated. 


   - If Your Behavior And Treatment Of Customers Is Inappropriate, You Will Be Liquidated.


   - If You Are Not Interactive In Responding To The Messages, You Will Be Eliminated.**`,
                  ephemeral: true
                });
              } else if (interaction.customId === 'mention') {
                await interaction.reply(`<@&${testerrole}>`, { ephemeral: false });
              }
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isModalSubmit()) return;
            
              const modalId = interaction.customId;
            
              if (modalId === 'myModalEgyptian') {
                const name = interaction.fields.getTextInputValue('rname');
                const rrname = interaction.fields.getTextInputValue('svcount');
                const rname = interaction.fields.getTextInputValue('age');
                const rrrname = interaction.fields.getTextInputValue('fb');
                const rrrrname = interaction.fields.getTextInputValue('roles');
            
                const embed = new MessageEmbed()
                  .setDescription(`**\`\`\` New Apply Team Submition \`\`\`  
> الاسم : __ ${name} __

> العمر : __ ${rname} __
            
> رقم الكاش : __ ${rrname} __
            
> قداش عندك فيدباك : __ ${rrrname} __
            
> اسماء الرولات التى تقدم عليها : __ ${rrrrname} __**`)
                  .setImage(line)
                  .setColor(color) 
                  .setThumbnail(interaction.guild.iconURL({ size: 128 }));
            
                const row = new MessageActionRow()
                  .addComponents(
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'notes',
                      label: 'ملحوظات مهمة قبل التقديم',
                      emoji: '',
                      ephemeral: true
                    },
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'mention',
                      label: 'منشن الإدارة',
                      emoji: ''
                    }
                  );
            
                await interaction.reply({
                  content: `> ** تم اكمال التقديم. يرجى الانتظار الادارة لحين الرد عليك**`,
                  embeds: [embed],
                  components: [row]
                });
              } else if (modalId === 'myModalArabic') {
                const name = interaction.fields.getTextInputValue('rname');
                const rname = interaction.fields.getTextInputValue('svcount');
                const rrname = interaction.fields.getTextInputValue('age');
                const rrrname = interaction.fields.getTextInputValue('fb');
                const rrrrname = interaction.fields.getTextInputValue('roles');
            
                const embed = new MessageEmbed()
                  .setDescription(`**\`\`\` New Apply Team Submition \`\`\`         
> العمر :  __ ${name} __
            
> مدة الخبرة :  __ ${rname} __
 
> 300 ألف ضمانة :  __ ${rrname} __

> الفيدباكات :  __ ${rrrname} __
            
> الأغراض الذي يبيعها :  __ ${rrrrname} __**`)         .setImage("")
                  .setColor(color)
                  .setThumbnail(interaction.guild.iconURL({ size: 128 }));
                
                const row = new MessageActionRow()
                  .addComponents(
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'notes',
                      label: 'ملحوظات مهمة قبل التقديم',
                      emoji: '',
                      ephemeral: true
                    },
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'mention',
                      label: 'منشن الإدارة',
                      emoji: ''
                    }
                  );
            
                await interaction.reply({
                  content: `> ** تم اكمال التقديم. يرجى إنتظار الادارة لتقوم بــ الرد عليك**`,
                  embeds: [embed],
                  components: [row]
                });
              } else if (modalId === 'myModalEnglish') {
                const name = interaction.fields.getTextInputValue('rname');
                const rname = interaction.fields.getTextInputValue('Guarantee');
                const rrname = interaction.fields.getTextInputValue('age');
                const rrrname = interaction.fields.getTextInputValue('fb');
                const rrrrname = interaction.fields.getTextInputValue('roles');
            
                const embed = new MessageEmbed()
                  .setDescription(`**\`\`\` New Apply Team Submition \`\`\`
> Age :  __ ${name} __
            
> Duration Of Experience :  __ ${rname} __
            
> 300k Guarantee :  __ ${rrname} __
            
> Feedbacks :  __ ${rrrname} __
            
> The Things He Sells :  __ ${rrrrname} __**`)
                  .setImage(line)
                  .setColor(color)
                  .setThumbnail(interaction.guild.iconURL({ size: 128 }));
                
                const row = new MessageActionRow()
                  .addComponents(
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'notes',
                      label: 'Important Notes Before Applying',
                      emoji: '',
                      ephemeral: true
                    },
                    {
                    type: 2,
                    style: 'PRIMARY',
                    custom_id: 'mention',
                    label: 'Management Mention',
                    emoji: ''
                  }
                );
            
                await interaction.reply({
                  content: `> **Application completed. Please wait for the administration to respond.**`,
                  embeds: [embed],
                  components: [row]
                });
              }
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isButton()) return;
            
              if (interaction.customId === 'notes') {
                await interaction.reply({
                  content: `**'Very Important Notes'
            
   - The Most Important Thing Is Mutual Respect Between You And The Staff Inside The Server.

              - Feedback Should Be From Popular And Trusted Servers.

              - If You Bring More Than 3 Rings, You Will Be Eliminated. 

              - If You Remove The Server Name Or Link, You Will Be Eliminated.

              - If You Suddenly Miss Work And Interaction, You Will Be Eliminated. 


   - If Your Behavior And Treatment Of Customers Is Inappropriate, You Will Be Liquidated.


   - If You Are Not Interactive In Responding To The Messages, You Will Be Eliminated.**`,
                  ephemeral: true
                });
              } else if (interaction.customId === 'mention') {
                await interaction.reply(`<@&${testerrole}>`, { ephemeral: false });
              }
            });

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;

  if (message.content.startsWith(prefix + 'embed')) {
    if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`**| You don't have __permissions__ **`);

    let args = message.content.split(' ').slice(1).join(' ');

    if (!args) return message.reply('** | Please select __a message__ **');

    message.delete();

    let embed = new MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setDescription(`${args}`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor(color) 
      .setTimestamp()
      .setImage(line);

    message.channel.send({ embeds: [embed] });
  }
});



client.on('message', message => {
  if (message.content.includes('has transferred')) {

    const TransformEmbed = new MessageEmbed()
      .setImage(line)
      .setColor(color)
    message.channel.send({ embeds: [TransformEmbed] })
  }
})

client.on('message', message => {
  if (message.content.includes('قام بتحويل')) {

    const TransformEmbed = new MessageEmbed()
      .setImage(line)
      .setColor(color)
    message.channel.send({ embeds: [TransformEmbed] })
  }
})

client.on('message', message => {
  if (message.content.includes('Your Tax Is')) {

    const TransformEmbed = new MessageEmbed()
      .setImage(line)
      .setColor(color)
    message.channel.send({ embeds: [TransformEmbed] })
  }
})
client.on("messageCreate", async(message) => {
    let args = message.content
      .split(" ")
      .slice(0)
      .join(" "); if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
    if (!message.guild) return;
    if (message.channel.id != taxchannel) return;  
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> **Error It Must Be A __Number__  **`);
      if (isNaN(args2)) return message.reply(`
> **Error It Must Be A __Number__  **`);
      if (args2 < 1) return message.reply(`
> **Error It Must Be __Larger Than__ 1  **`);

        let m = await message.reply({ content: `
- **Your Tax Is : __${tax}__**  ` });
})

client.on("messageCreate" , async(message) => {
  if(message.author.bot) return;
  if(!message.channel.name.startsWith("ticket")) return;
  if(!message.member.roles.cache.has(team)) return;

  let mss = ["اتفضل" , "Tfadhel" ,"تفضل" ]

  if(!mss.includes(message.content)) return;
  db.add(`respond_${message.guild.id}_${message.author.id}` , 1)

        let levelll = db.get(`level_${message.author.id}`)
    if(levelll == null) {
      db.set(`level_${message.author.id}` , {
        xp : 0,
        nid : message.author.id
      })
    }
      let levell = db.get(`level_${message.author.id}`)
      let level = levell.xp;

  await db.set(`level_${message.author.id}` , {
        xp : Math.floor(level + 1),
        nid : message.author.id
      })
})

//closeticket support point done
client.on("messageCreate" , async(message) => {
  if(message.author.bot) return;
  if(!message.member.roles.cache.has(support)) return;
  let mss = [ "$close" ]
  if(!mss.includes(message.content)) return;
  db.add(`closedtickets_${message.guild.id}_${message.author.id}` , 1)

        let levelll = db.get(`support_${message.author.id}`)
    if(levelll == null) {
      db.set(`support_${message.author.id}` , {
        poi : 0,
        id : message.author.id
      })
    }
      let levell = db.get(`support_${message.author.id}`)
      let level = levell.poi;

  await db.set(`support_${message.author.id}` , {
        poi : Math.floor(level + 1),
        id : message.author.id
      })
})
//rename ticket support point done
client.on("messageCreate" , async(message) => {
  if(message.author.bot) return;
  if(!message.member.roles.cache.has(support)) return;
  let mss = [ "$rename" ]
  mss.forEach(ms => {
    if(!message.content.includes(ms)) return;
  })
  if(!message.channel.name.startsWith("ticket")) return;
  db.add(`renamedtickets_${message.guild.id}_${message.author.id}` , 1)

        let levelll = db.get(`support_${message.author.id}`)
    if(levelll == null) {
      db.set(`support_${message.author.id}` , {
        poi : 0,
        id : message.author.id
      })
    }
      let levell = db.get(`support_${message.author.id}`)
      let level = levell.poi;

  await db.set(`support_${message.author.id}` , {
        poi : Math.floor(level + 1),
        id : message.author.id
      })
})

client.on('channelCreate', async (message) => {
  if (message.parentId != supportcategory) return;
  setTimeout(() => {
    message.send({
      content: `** السلام عليكم ورحمة الله وبركات 
معك طاقم العمل 2060 __𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐞-S__ في تذكرة __الدعم الفني __     
**__ كل ما عليك هو كتابة مشكلتك أو استفسارك وانتظار ألرد __   

 **لأستلام التكت اضغط علي  __ Claim__ **`,      components: [
        new MessageActionRow()
          .addComponents(
            new MessageButton()
              .setLabel("𝗖𝗹𝗮𝗶𝗺")
              .setStyle("PRIMARY")
              .setCustomId("claim")
          )
  ]})
     }, 2000); 
})

client.on('interactionCreate' , async(interaction) => {
    if(interaction.customId == "claim") {
  if(!interaction.member.roles.cache.has(support)) return;
  if(!interaction.channel.name.startsWith("ticket")) return;
        db.add(`supportticketclaims_${interaction.guild.id}_${interaction.user.id}` , 1)

        let levelll = db.get(`support_${interaction.user.id}`)
    if(levelll == null) {
      db.set(`support_${interaction.user.id}` , {
        poi : 0,
        id : interaction.user.id
      })
    }
      let levell = db.get(`support_${interaction.user.id}`)
      let level = levell.poi;

  await db.set(`support_${interaction.user.id}` , {
        poi : Math.floor(level + 3),
        id : interaction.user.id
      })
       interaction.channel.setName(`${interaction.member.nickname}`)
     await interaction.reply({ embeds: [
        new MessageEmbed()
        .setDescription(`> \`-\`**${interaction.member.nickname} | Done Claimed Ticket ✅️**`)
      ]})
    }
})


client.on("messageCreate" , async(message) => {
  if(message.author.bot) return;
  if(!message.member.roles.cache.has(support)) return;
  if(message.channel.id !== "1264913107025657878") return;
 if (message.attachments.size == 0) return;

  db.add(`warngived_${message.guild.id}_${message.author.id}` , 1)

        let levelll = db.get(`support_${message.author.id}`)
    if(levelll == null) {
      db.set(`support_${message.author.id}` , {
        poi : 0,
        id : message.author.id
      })
    }
      let levell = db.get(`support_${message.author.id}`)
      let level = levell.poi;

  await db.set(`support_${message.author.id}` , {
        poi : Math.floor(level + 3),
        id : message.author.id
      })
})




  client.on("messageCreate" , async(message) => {
    if(message.author.bot) return;
    if(message.channel.id !== offerroom) return;
    if(!message.member.roles.cache.has(team)) return;
    db.add(`offer_${message.guild.id}_${message.author.id}` , 1)

            let levelll = db.get(`level_${message.author.id}`)
      if(levelll == null) {
        db.set(`level_${message.author.id}` , {
          xp : 0,
          nid : message.author.id
        })
      }
        let levell = db.get(`level_${message.author.id}`)
        let level = levell.xp;

    await db.set(`level_${message.author.id}` , {
          xp : Math.floor(level + 2),
          nid : message.author.id
        })
  })


  client.on("messageCreate" , async(message) => {
    if(message.author.bot) return;
     let feedbackroom = feedback
    if(message.channel.id !== feedbackroom) return;
    let user = message.mentions.members.first()
    if(!user.roles.cache.has(team)) return;
    if(message.author.id === user.id) return;

    db.add(`feeed_${message.guild.id}_${user.id}` , 1)

            let levelll = db.get(`level_${user.id}`)
      if(levelll == null) {
        db.set(`level_${user.id}` , {
          xp : 0,
          nid : user.id
        })
      }
        let levell = db.get(`level_${user.id}`)
        let level = levell.xp;

    await db.set(`level_${user.id}` , {
          xp : Math.floor(level + 3),
          nid : user.id
        })

  })



  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === prefix + "safagag") {
      if (!message.member.roles.cache.has(team)) return;
      let data = db.fetchAll();
      let users = [];
      for (let key in data) {
        if (data[key].xp) {
          users.push(data[key]);
        }
      }
      let new_data = users.sort((a, b) => parseFloat(b.xp) - parseFloat(a.xp));
      let num = new_data.length;
      let top = '';
      if (num > 15) num = 15;
      for (let i = 0; i < num; i++) {
        let user = message.guild.members.cache.get(new_data[i].nid);
        let username = user ? user.nickname : 'Unknown User';
        top += `**#${i + 1} | ${username} | ${new_data[i].xp}**\n`;
      }

      let embed = new MessageEmbed()
        .setDescription(`${top}`)
        .setColor(color)
        .setImage(line)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setAuthor("Points Leadboard", client.user.displayAvatarURL());

      await message.reply({ embeds: [embed] });
    }
  });
  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === prefix + "Pnt") {
      if (!message.member.roles.cache.has(support)) return;
      let data = db.fetchAll();
      let users = [];
      for (let key in data) {
        if (data[key].poi) {
          users.push(data[key]);
        }
      }
      let new_data = users.sort((a, b) => parseFloat(b.poi) - parseFloat(a.poi));
      let num = new_data.length;
      let top = '';
      if (num > 15) num = 15;
      for (let i = 0; i < num; i++) {
        let user = message.guild.members.cache.get(new_data[i].id);
        let username = user ? user.nickname : 'Unknown User';
        top += `**#${i + 1} | ${username} | ${new_data[i].poi}**\n`;
      }

      let embed = new MessageEmbed()
        .setDescription(`${top}`)
        .setColor(color)
        .setImage(line)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setAuthor("Support Points Leadboard", client.user.displayAvatarURL());

      await message.reply({ embeds: [embed] });
    }
  });

  client.on("messageCreate", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
   const args = message.content.slice(prefix.length).trim().split(/ +/);
   const command = args.shift().toLowerCase();
   if(command === "tax") {
    let args1 = message.content
    .split(" ")
    .slice(1)
    .join(" "); 
  if (message.author.bot) return;
    if (args1.endsWith("m")) args1 =  args1.replace(/m/gi, "") * 1000000;
  else if (args1.endsWith("k")) args1 = args1.replace(/k/gi, "") * 1000;
  else if (args1.endsWith("M")) args1 = args1.replace(/M/gi, "") * 1000000;
  else if (args1.endsWith("K")) args1 = args1.replace(/K/gi, "") * 1000;
  else if (args1.endsWith("b")) args1 = args1.replace(/b/gi, "") * 1000000000;
  else if (args1.endsWith("B")) args1 = args1.replace(/B/gi, "") * 1000000000;
    let args2 = parseInt(args1)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
    if (!args2) return message.reply(`
  > **Error It Must Be A __Number__  **`);
    if (isNaN(args2)) return message.reply(`
  > **Error It Must Be A __Number__  **`);
    if (args2 < 1) return message.reply(`
  > **Error It Must Be __Larger__ Than 1  **`);
      let row = new MessageActionRow()
    .addComponents(
              new MessageButton()
      .setCustomId(`first_embed`)
      .setLabel("Mediator")
      .setEmoji("")
      .setStyle('SUCCESS')
    );
    let row2 = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId(`2_embed`)
      .setLabel("Back")
      .setEmoji("")
      .setStyle('DANGER')
  );
      let m = await message.reply({ content: `> **Your Tax Is :** ``${tax}``  ` , components: [row]});
      let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
      collector.on('collect', async i => {
        if (i.customId === 'first_embed') {
                m.edit({ content: `
  > **Your Tax Is : __${tax4}__**`, components: [row2]})
                row
                i.deferUpdate()
        }
        if (i.customId === '2_embed') {
        m.edit({ content: `> **Your Tax Is :** ``${tax}``  `, components: [row] })

                i.deferUpdate()
        } else {
          return;
        }
     });

   }
  if (command === "point") {
    let user = message.mentions.members.first() || message.member;
    if (!user.roles.cache.has(team)) return message.reply(`> **You Are Not In Our Team**`);
    let oferpint = db.get(`offer_${message.guild.id}_${user.id}`);
    if (oferpint == null) oferpint = 0;

    let fedpint = db.get(`feeed_${message.guild.id}_${user.id}`);
    if (fedpint == null) fedpint = 0;

    let respint = db.get(`respond_${message.guild.id}_${user.id}`);
    if (respint == null) respint = 0;

    let levelll = db.get(`level_${user.id}`);
    if (levelll == null) {
      db.set(`level_${user.id}`, {
        xp: 0,
        nid: user.id,
      });
    }

    let levell = db.get(`level_${user.id}`);
    let level = levell.xp;

    message.reply(`
  > **Hey ${user} ** 

  > **Feedbacks : \`${fedpint}\`  **

  > **Offers : \`${oferpint}\` ** 

  > **Respond Tickets : \`${respint}\` ** 

  > **Total Points : \`${level}\` ** 

  ====================

  **__للمعلومه يتم احتساب النقاط عن طريق ان الفيدباك الواحد عليه 3 نقاط و الاوفر الواحد عليه نقطتين و رد التيكت الواحد عليه نقطه واحده فقط. __**`);
  }
 if (message.content === prefix + "sepnts") {
  let user = message.mentions.members.first() || message.member;
  if (!user.roles.cache.has(support)) return message.reply(`** | You Haven't Ticket __Support Role__**`);

  let clpint = db.get(`closedtickets_${message.guild.id}_${user.id}`) || 0;
  let repint = db.get(`renamedtickets_${message.guild.id}_${user.id}`) || 0;
  let warpint = db.get(`warngived_${message.guild.id}_${user.id}`) || 0;
  let claimedsupporttic = db.get(`supportticketclaims_${message.guild.id}_${user.id}`) || 0;

  let levell = db.get(`support_${user.id}`);
  if (!levell) {
    db.set(`support_${user.id}`, {
      poi: 0,
      id: user.id,
    });
    levell = { poi: 0 };
  }

  let level = levell.poi || 0;

  message.reply(`
  > **Hey ${user} ** 

  > **Close Tickets : \`${clpint}\` **

  > **Renamed Order Tickets : \`${repint}\` ** 

  > **Claimed Technical Support Tickets \`${claimedsupporttic}\` ** 

  > **Warn Gived \`${warpint}\` ** 

  > **Total Points : \`${level}\` ** 

  ====================`);
}

 if(command === "come") {
     
  const user = message.mentions.members.first()
  
  if (!user) return message.reply(`** | I Can't Find This User!**`)
     
    if (user.id == message.author.id) return message.reply(`** | You Can't __Send To__ Yourself!**`)
     
    if (user.user.bot) return message.reply(`** | You Can't __Send To__ Bot!**`)
          let inv = await message.channel.createInvite(message.channel)
    user.send(` > 𝖲𝗈𝗋𝗋𝗒 𝖥𝗈𝗋 𝖣𝗂𝗌𝗍𝗎𝗋𝖻𝖺𝗇𝖼𝖾 __𝖸𝗈𝗎 𝖧𝖺𝗏𝖾 𝖱𝖾𝗊𝗎𝖾𝗌𝗍𝖾𝖽__ 

#- 𝐓𝐡𝐞 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 : ${message.channel} 

#- 𝐘𝐨𝐮 𝐑𝐞𝐪𝐮𝐞𝐬𝐭 𝐁𝐲 : ${message.guild.members.cache.get(message.author.id).displayName || message.author.tag} 

> __𝐒𝐞𝐫𝐯𝐞𝐫 𝐋𝐢𝐧𝐤__ : [ ${link} ] ❤️ `).then(() => {
   message.reply({
    embeds : [
      new MessageEmbed()
      .setDescription(`** | Please Wait ....**`)
      .setImage(line)
      .setAuthor(message.author.username, message.author.avatarURL()) 
      .setColor(color)
    ]
  }).then((t) => {
    setTimeout(() => t.edit({
      embeds : [
        new MessageEmbed()
      .setDescription(`** | Done Message __Has Been Send__ To ${user}**

** | __Please__ Wait**`)
        .setImage(line)
       .setAuthor(message.author.username, message.author.avatarURL()) 
        .setColor(color)
      ]
    }),1800)
})   
}).catch((y) => {
               message.reply({
    embeds : [
      new MessageEmbed()
      .setDescription(`> ** | Please Wait ....**`)
      .setImage(line)

     .setAuthor(message.author.username, message.author.avatarURL()) 
      .setColor(color)
    ]
  }).then((t) => {
    setTimeout(() => t.edit({
      embeds : [
        new MessageEmbed()
      .setDescription(`** | Error __${y.message}__**`)
      .setImage(line)
      .setAuthor(message.author.username, message.author.avatarURL()) 
      .setColor(color)
      ]
    }),1800)
          })
})
 }
})
client.on('messageCreate', async message => {
    if (message.content.toLowerCase().startsWith(".تشفير") && !message.author.bot) {
        let args = message.content.slice(".تشفير".length).trim();

        if (args.length === 0) {
            return message.reply("** | من فضلك اكتب __الرسالة__ التي تريد تشفيرها..**");
        }

        let content = args.replaceAll("نيترو", "نيتـ رو").replaceAll("فيزا", "فيـ ـزا").replaceAll("كريدت", "كريـ ـدت").replaceAll("كرديت", "كريـ ـدت").replaceAll("كاش", "كـ ـاش").replaceAll("ستيم", "ستـ ـيم").replaceAll("سيرفر", "سيرفـ ـر").replaceAll("ديسكورد", "ديسـ ـكورد").replaceAll("حسابات", "حسابـ ـات").replaceAll("اكونتات", "اكـ ـونتات").replaceAll("بوستات", "بوستـ ـات").replaceAll("تفعيل", "تفـ ـعيل").replaceAll("نيتفليكس", "نيتفلـ ـيكس").replaceAll("سبوتيفاي", "سبوتـ ـيفاي").replaceAll("تيكتوك", "تيكـ ـتوك").replaceAll("فيسبوك", "فيسـ ـبوك").replaceAll("انستا", "انسـ ـتا").replaceAll("توكنات", "توكـ ـنات").replaceAll("فوتات", "فوتـ ـات").replaceAll("بوتات", "بوتـ ـات").replaceAll("كريبتو", "كريبتـ ـو").replaceAll("عملات", "عمـ ـلات").replaceAll("كود", "كـ ـود").replaceAll("بوت", "بـ وت").replaceAll("اكس بوكس", "اكسـ ـبوكس").replaceAll("فيز", "فيـ ـز").replaceAll("موجود", "موجـ ـود").replaceAll("اكونت", "اكـ ونـ ت").replaceAll("متوفر", "مـتـ وفر").replaceAll("سعر", "سـ ـعر").replaceAll("تيكت", "تيـ ـكت").replaceAll("تكت", "تـ كـ ـت").replaceAll("متابع", "مـ ـتـابـع").replaceAll("حساب", "حـ ـسـاب").replaceAll("بيع", "بـ ـيع").replaceAll("اعضاء", "اعـ ـضاء").replaceAll("اوتو", "اوتـ ـو").replaceAll("اوفلاين", "اوفـ ـلاين").replaceAll("اونلاين", "اونـ ـلاين").replaceAll("تيك توك", "تـ ـيك تـ ـوك").replaceAll("وهمي", "وهـ ـمي").replaceAll("استور", "اسـ ـتور").replaceAll("شاهد", "شـ ـاهـ ـد").replaceAll("نوع", "نـ ـوع").replaceAll("ستور", "شـ ـوب").replaceAll("تفاعل", "تفـ ـاعـ ـل").replaceAll("لفل", "لـ ـفـ ـل").replaceAll("ضمان", "ضـ ـمان").replaceAll("محدوده", "محـ ـدوده").replaceAll("فتره", "فـ ـتره").replaceAll("ابدي", "ابـ ـدي").replaceAll("سنه", "سـ ـنه").replaceAll("شهر", "شـ ـهر").replaceAll("شهور", "شـ ـهور").replaceAll("اسبوع", "اسـ ـبوع").replaceAll("انواع", "انـ ـواع").replaceAll("انواع", "انـ ـواع").replaceAll("جميع", "جمـ ـيع").replaceAll("ديس", "ديـ ـس").replaceAll("كوين", "كويـ ـن").replaceAll("والت", "والـ ـت").replaceAll("سويت", "سـ ـويـ ـت").replaceAll("اسعار", "اسعـ ـار").replaceAll("ميمبر", "ميـ ـمبر").replaceAll("ميوزك", "ميـ ـوزك").replaceAll("برودكاست", "برودكـ ـاسـ ـت").replaceAll("سيستم", "سيـ ـستم").replaceAll("ميديا", "ميديـ ـا").replaceAll("خدمات", "خدمـ ـات").replaceAll("سوشيال", "شوشـ ـيال").replaceAll("توكن", "تـ ـوكن").replaceAll("نتفلكس", "نtفلكس");

        const reply = await message.reply("**تم إرسال __الرسالة بالتشفير__ في الخاص  **");
        message.author.send(content).then(() => {
            setTimeout(() => {
                message.delete();
            }, 10000);

            
            setTimeout(() => {
                reply.delete();
            }, 10000);
        });
    }
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    let prefix = "r";
    // تحويل المحتوى إلى أحرف صغيرة ثم التحقق من البادئة
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (!message.member.roles.cache.has(team)) return;

    if (command === 'e') {
        const nickname = message.member.nickname || message.author.username;
        if (
            message.channel.name.startsWith('ticket') || 
            message.channel.name.startsWith('need') || 
            message.channel.name.startsWith('sell') || 
            message.channel.name.startsWith('by')
        ) {
            try {
                const newChannelName = `by-${nickname}`; // استخدام القوالب النصية لتكوين اسم القناة
                await message.channel.setName(newChannelName);
                await message.delete();
                await message.channel.send(``);
            } catch (error) {
                console.error('Error changing channel name:', error);
            }
        }
    }
});


                               
                                        client.on("messageCreate", message => {
  if (message.content.startsWith('.font')) {
    let words = message.content.split(" ").slice(1).join(" ");
let words2 = words.replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replaceAll("1","𝟏").replaceAll("2","𝟐").replaceAll("3","𝟑").replaceAll("4","𝟒").replaceAll("5","𝟓").replaceAll("6","𝟔").replaceAll("7","𝟕").replaceAll("8","𝟖").replaceAll("9","𝟗").replaceAll("0","𝟎")
    if (!words) return message.channel.send('> ** | Please __Write a Word__ !**')
    message.channel.send(`${words2}`)
  }
});

                                        client.on("messageCreate", message => {
  if (message.content.startsWith('.font1')) {
    let words = message.content.split(" ").slice(2).join(" ");
    let words3 = words.replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭")
    if (!words) return message.channel.send(' | ** Please __Write a Word__ !**')
    message.channel.send(`${words3}`)
  }
});

                                              client.on("message", message => {
  if (message.content == ("io") || message.content === "خمول") {

message.channel.send(`**__يرجي العلم أنه في حاله الخمول في التذكره لمده 60 دقايق سوف يتم غلق __ التذكره تلقائيا من طاقم العمل  **`)
    message.delete()

  }
})

client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'tag') {
    let mentionedUser = await message.mentions.members.first();
    let additionalText = args.slice(1).join(' ');

    if (!mentionedUser) {
      return await message.channel.send('user?');
    }

    let stylizedText = additionalText.replaceAll("a", "𝐚").replaceAll("A", "𝐀").replaceAll("b", "𝐛").replaceAll("B", "𝐁").replaceAll('c', "𝐜").replaceAll("C", "𝐂").replaceAll("d", "𝐝").replaceAll("D", "𝐃").replaceAll("e", "𝐞").replaceAll("E", "𝐄").replaceAll("f", "𝐟").replaceAll("F", "𝐅").replaceAll("g", "𝐠").replaceAll("G", "𝐆").replaceAll("h", "𝐡").replaceAll("H", "𝐇").replaceAll("i", "𝐢").replaceAll("I", "𝐈").replaceAll("j", "𝐣").replaceAll("J", "𝐉").replaceAll("k", "𝐤").replaceAll("K", "𝐊").replaceAll("l", "𝐥").replaceAll("L", "𝐋").replaceAll("m", "𝐦").replaceAll("M", "𝐌").replaceAll("n", "𝐧").replaceAll("N", "𝐍").replaceAll("o", "𝐨").replaceAll("O", "𝐎").replaceAll("p", "𝐩").replaceAll("P", "𝐏").replaceAll("q", "𝐪").replaceAll("Q", "𝐐").replaceAll("r", "𝐫").replaceAll("R", "𝐑").replaceAll("s", "𝐬").replaceAll("S", "𝐒").replaceAll("t", "𝐭").replaceAll("T", "𝐓").replaceAll("u", "𝐮").replaceAll("U", "𝐔").replaceAll("v", "𝐯").replaceAll("V", "𝐕").replaceAll("w", "𝐰").replaceAll("W", "𝐖").replaceAll("x", "𝐱").replaceAll("X", "𝐗").replaceAll("y", "𝐲").replaceAll("Y", "𝐘").replaceAll("z", "𝐳").replaceAll("Z", "𝐙").replaceAll("1","𝟏").replaceAll("2","𝟐").replaceAll("3","𝟑").replaceAll("4","𝟒").replaceAll("5","𝟓").replaceAll("6","𝟔").replaceAll("7","𝟕").replaceAll("8","𝟖").replaceAll("9","𝟗").replaceAll("0","𝟎");

    let newNickname = `${stylizedText}`;

    await mentionedUser.setNickname(newNickname).then(async () => {
      await message.channel.send(`**__  | Done Adding __Server Tag__ To ${mentionedUser}__**`);
    }).catch(err => message.channel.send(`** | I don't have __Permission__ to do that**`));
}
});

const owner = ["1310122909200547851"]

const vip = ["1310122909200547851"]

const wait = require("node:timers/promises").setTimeout;
client.on('messageCreate', async message => {
  let msg = message, m = message
  if (m.author.bot) return;
  if (message.content !== prefix + "team") return
  if (m.member.permissions.has("ADMINISTRATOR")) {
    if (message.channel.id !== "1340762005321158737") {
      let rep = await message.reply("استخدم الامر في روم التيم")
      await wait(2000);
      rep.delete();
      message.delete();
      return;
    }
    let team = m.guild.roles.cache.get("1208450602288554085")
    let count = 0;
    team.members.forEach((member) => {
      message.channel.send(`<@${member.id}>`)
      message.channel.send(line)
      count++;
    })
    message.channel.send("Done , Team count is : " + count)
  }
})

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'tbc')) {
    if (!owner.includes(message.author.id)) return message.reply(`** | This Command Only __Hight Rank__ Can Use**`);

      const args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
      const role = message.mentions.roles.first();

    if (!role) {
      return message.reply('** | Please __Mention__ a Role**');
    }
    if (!args) {
      return message.reply('** | Please __Enter__ Your Message**');
    }

    let sentCount = 0;

    let members = message.guild.members.cache.filter(member => !member.user.bot && member.roles.cache.has(role.id));

    members.forEach((member, index) => {
      setTimeout(() => {
        member.send(`${args}\n ${member}`)
          .then(() => {
            console.log(`> **Done Sent to** ${member.user.username}`);
            message.channel.send(`> **Done Sent to** <@${member.user.id}>  `);
          })
          .catch(err => {
            console.error(`** | Couldn't __send to__ ${member.user.tag} **`);
            message.channel.send(`** | Couldn't __send to__ <@${member.user.id}> **`);
          })
          .finally(() => {
            sentCount++;
            if (index === members.size - 1) {
            
              message.channel.send(`**  | Done sending __your message__ to ${sentCount} members**`);
            }
          });
      }, index * 5000); 
    });
  }
});


 client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id == "1155201710634041526"){
    const anchannel = client.channels.cache.get("1153992975605563432")
    let args = message.content.split(' ').slice(0).join(' ')

let test = args.replaceAll("نيترو","نيتـ رو").replaceAll("فيزا","فيـ ـزا").replaceAll("كريدت","كريـ ـدت").replaceAll("كرديت","كريـ ـدت").replaceAll("كاش","كـ ـاش").replaceAll("ستيم","ستـ ـيم").replaceAll("سيرفر","سيرفـ ـر").replaceAll("ديسكورد","ديسـ ـكورد").replaceAll("حسابات","حسابـ ـات").replaceAll("اكونتات","اكـ ـونتات").replaceAll("بوستات","بوستـ ـات").replaceAll("تفعيل","تفـ ـعيل").replaceAll("نيتفليكس","نيتفلـ ـيكس").replaceAll("سبوتيفاي","سبوتـ ـيفاي").replaceAll("تيكتوك","تيكـ ـتوك").replaceAll("فيسبوك","فيسـ ـبوك").replaceAll("انستا","انسـ ـتا").replaceAll("توكنات","توكـ ـنات").replaceAll("فوتات","فوتـ ـات").replaceAll("بوتات","بوتـ ـات").replaceAll("كريبتو","كريبتـ ـو").replaceAll("عملات","عمـ ـلات").replaceAll("كود","كـ ـود").replaceAll("بوت","بـ وت").replaceAll("اكس بوكس","اكسـ ـبوكس").replaceAll("فيز","فيـ ـز").replaceAll("موجود","موجـ ـود").replaceAll("اكونت","اكـ ونـ ت").replaceAll("متوفر","مـتـ وفر").replaceAll("سعر","سـ ـعر").replaceAll("تيكت","تيـ ـكت").replaceAll("تكت","تـ كـ ـت").replaceAll("متابع","مـ ـتـابـع").replaceAll("حساب","حـ ـسـاب").replaceAll("بيع","بـ ـيع").replaceAll("اعضاء","اعـ ـضاء").replaceAll("اوتو","اوتـ ـو").replaceAll("اوفلاين","اوفـ ـلاين").replaceAll("اونلاين","اونـ ـلاين").replaceAll("تيك توك","تـ ـيك تـ ـوك") .replaceAll("وهمي","وهـ ـمي").replaceAll("استور","اسـ ـتور").replaceAll("شاهد","شـ ـاهـ ـد").replaceAll("نوع","نـ ـوع").replaceAll("ستور","شـ ـوب").replaceAll("تفاعل","تفـ ـاعـ ـل").replaceAll("لفل","لـ ـفـ ـل").replaceAll("ضمان","ضـ ـمان").replaceAll("محدوده","محـ ـدوده").replaceAll("فتره","فـ ـتره").replaceAll("ابدي","ابـ ـدي").replaceAll("سنه","سـ ـنه").replaceAll("شهر","شـ ـهر").replaceAll("شهور","شـ ـهور").replaceAll("اسبوع","اسـ ـبوع").replaceAll("انواع","انـ ـواع").replaceAll("انواع","انـ ـواع").replaceAll("جميع","جمـ ـيع").replaceAll("ديس","ديـ ـس").replaceAll("كوين","كويـ ـن").replaceAll("والت","والـ ـت") .replaceAll("سويت","سـ ـويـ ـت").replaceAll("اسعار","اسعـ ـار").replaceAll("ميمبر","ميـ ـمبر").replaceAll("ميوزك","ميـ ـوزك").replaceAll("برودكاست","برودكـ ـاسـ ـت").replaceAll("سيستم","سيـ ـستم").replaceAll("ميديا","ميديـ ـا") .replaceAll("خدمات","خدمـ ـات") .replaceAll("سوشيال","شوشـ ـيال").replaceAll("توكن","تـ ـوكن")

    let embed = new MessageEmbed()
    .setColor(color) 

    let attach = message.attachments.first();

if (attach) {
   +dgsagee.setImage(attach.proxyURL)     
} 
   anchannel.send(`**~~__ ${test} __~~**
  
 
 
 
 
 
 
 
 
 
 

> •  __𝐎𝐰𝐧𝐞𝐫 𝐎𝐟𝐟𝐞𝐫__ : <@${message.author.id}>    

> •   __𝐎𝐫𝐝𝐞𝐫 𝐓𝐢𝐜𝐤𝐞𝐭__ :   <#1340762005081948312>    

> •  __𝐎𝐟𝐟𝐞𝐫 𝐌𝐞𝐧𝐭𝐢𝐨𝐧__  : <@&1343677425749594152>  **`).then(mes => setTimeout(() => {
        mes.delete()
      }, 43200000))

    message.reply(" | 𝐃𝐨𝐧𝐞 𝐒𝐞𝐧𝐝 𝐘𝐨𝐮𝐫 𝐎𝐟𝐟𝐞𝐫 ")
     anchannel.send({embeds: [embed]}).then(pho => setTimeout(() => {
        pho.delete()
      }, 43200000))  
    anchannel.send(line).then(lin => setTimeout(() => {
        lin.delete()
      }, 43200000)) 

  }
})


client.login("")