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
        .setColor("FF005A")
        .setDescription(`<a:832808379952660540:915989867127799889> **Suporte Vega RolePlay** \n \n <:909281049467580426:915987056352698419> **Escolha uma opção abaixo para criar seu ticket** \n \n <a:MS_Engrenagem:915990098531737750> Horário de atendimento - 9h as 21h`)
let op = new MessageSelectMenu()
        .setCustomId('menu')
        .setPlaceholder('Clique aqui.') 
        .addOptions([
               {
                    label: '\n Suporte Geral',
                    description: 'Clique nessa opção para iniciar seu suporte',
                    emoji: '1️<:code:915988050025283594>',
                    value: '1',
               },
               {
                label: 'Denúnciar ',
                description: 'Clique nessa opção para efetuar sua denúncia',
                emoji: '2️<:sino:915988013652258826> ',
                value: '2',
               },
               {
                label: 'Sugestão',
                description: 'Clique nessa opção para enviar sua sugestão',
                emoji: '3️<:email:915988475810041866>',
                value: '3',
               },
              {
                label: 'Compras',
                description: 'Clique nessa opção para realizar sua compra',
                emoji: '4️<:862003525490573342:915988073442062367>',
                value: '4',
               }
            ])

        



        let cc = new MessageActionRow().addComponents( op)
let canal = interaction.options.getChannel("canal");
        canal.send({ embeds: [embed], components: [cc] })

interaction.followUp("Setup iniciado")
        }
    }