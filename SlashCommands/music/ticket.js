const Discord = require("discord.js");
const { MessageSelectMenu, MessageActionRow } = require("discord.js");

module.exports = {

    name: "setup",
        description: "Setup de ticket",
    type: "CHAT_INPUT",
    options: [
        {
        name: "canal",
        type: "CHANNEL",
        description: "Qual canal vai enviar o setup?",
        required: true
        
        },
        
        ],
        ownerOnly: true,

    run: async(client, interaction, args) => {




        let embed = new Discord.MessageEmbed()
        .setColor("#00BFFF")
        .setDescription(`Crie um ticket`)
let op = new MessageSelectMenu()
        .setCustomId('menu')
        .setPlaceholder('Clique aqui.') 
        .addOptions([
               {
                    label: 'SLA 1',
                    description: 'SLA 1',
                    emoji: '1️⃣',
                    value: '1',
               },
               {
                label: 'SLA 2',
                description: 'SLA 2',
                emoji: '2️⃣',
                value: '2',
               },
               {
                label: 'SLA 3',
                description: 'SLA 3',
                emoji: '3️⃣',
                value: '3',
               },
              {
                label: 'SLA 4',
                description: 'SLA 4',
                emoji: '4️⃣',
                value: '4',
               }
            ])

        



        let cc = new MessageActionRow().addComponents( op)
let canal = interaction.options.getChannel("canal");
        canal.send({ embeds: [embed], components: [cc] })

interaction.followUp("Setup iniciado")
        }
    }