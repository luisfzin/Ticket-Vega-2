const client = require("../index");
const config = require("../config.json")
    const Discord = require("discord.js")

const pa = require("../package.json")
client.on("ready", () => { 
let dono = client.users.cache.get(config.owner)
if(!dono) dono = "Não foi setado!!!"

const cc = new Discord.WebhookClient({id:"916162173561110549", token: "OTE2NzMwMjkwODgwMjgyNjg1.YauZnQ.70Me2BzaexRSyEBY9XqoUgvESwg"})
let embed = new Discord.MessageEmbed()
.setDescription(`\`\`\`
Iniciado em: ${client.user.username}
Id: ${client.user.id}
Servers: ${client.guilds.cache.size}
Users: ${client.users.cache.size}
Bot: ${pa.name}
Meu dono: ${dono.tag} \`\`\``)
.setImage(client.user.avatarURL())
.addField("Convite:", `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)


cc.send({embeds: [embed] })

  
    console.log(`Estou online`);
    client.user.setActivity("TOCANDO MUSICA || BY PANI KAZ")

    



  
});
