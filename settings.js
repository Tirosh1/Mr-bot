/*####################################
                 F E N I X - V 15
             MADE BY F E N I X ID SERVER
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/Fenix-server
👥 Github: https://github.com/Botdevillozan
🤖 Youtube https://youtube.com/@fenix_programmer
#####################################*/


const fs = require('fs')
const chalk = require('chalk')

global.ownernomer = "94765749332"
global.ownername = "shanu"
global.ytname = "YT: shanu_Programmer "
global.socialm = "GitHub: shanu-server"
global.location = "srilanka, colombo, colombo"

global.ownernumber = '94765749332'  //creator number
global.ownername = 'shanu' //owner name
global.botname = 'SHANU ID V17' //name of the bo
global.packname = 'V17'
global.author = 'ꜰᴇɴɪx ɪᴅ ꜱᴇʀᴠᴇʀ : 🌍'

global.themeemoji = '🪀'
global.wm = "Its Fuck.inc."

global.link = 'https://wa.me/qr/2QCHPPVRZTINP1'


global.prefa = ['','!','.','#','&']

global.autoRecording = true 
global.autoTyping = true 
global.autorecordtype = true
global.autoread = true 
global.autobio = false 
global.anti92 = false 
global.autoswview = true

global.typemenu = 'v2'

global.mess = {
    done: 'ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟ…!',
    prem: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴘʀᴇᴍɪᴜᴍ',
    admin: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴀᴅᴍɪɴ…!',
    botAdmin: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴍʏ ᴏᴡɴᴇʀ…!',
    owner: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴍʏ ᴏᴡɴᴇʀ…!',
    group: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ɢʀᴏᴜᴘ…!',
    private: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴘʀɪᴠᴀᴛᴇ…!',
    wait: 'ᴀᴄᴄᴇꜱꜱ ᴠᴇʀɪꜰʏᴇᴅ ᴡᴀɪᴛ… ',    
    error: 'ʏᴇʜ ɪ ɢᴇᴛ ᴇʀʀᴏʀ',
}

global.thumb = fs.readFileSync('./www-fucking/Fenix9991/dexDump/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
