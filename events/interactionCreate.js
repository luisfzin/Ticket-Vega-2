const client = require("../index");
const config = require("../config.json")
const db = require("quick.db")
const Discord = require("discord.js")
    let fechar = new Discord.MessageButton().setCustomId("f").setLabel("Feche seu ticket").setStyle("PRIMARY")
client.on("interactionCreate", async (interaction) => {
  console.log(interaction)
    if(interaction.isButton()) {
    if (interaction.customId.startsWith('f')) {

            interaction.reply(`**${interaction.user} Seu ticket será fechado em 5 segundos.**`)

            setTimeout( () => {

                try {
                        let user  = db.get(`tt_${interaction.guild.id}_${interaction.channel.id}`)
                          
                              db.delete(`tt_${interaction.guild.id}_${user}`)
                                db.delete(`tt_${interaction.guild.id}_${interaction.channel.id}`)

                interaction.channel.delete()

                }
                catch (er) 
                {
                    console.log(er)
                }

            }, 5000)

        }
    
}

            if(interaction.isSelectMenu()) {

      








            if (interaction.customId == ("menu")) {
  if (interaction.values == ("1")) {

    let ms =     db.get(`tt_${interaction.guild.id}_${interaction.user.id}`)

          


            if (ms == null) {
        
   let embed = new Discord.MessageEmbed()
   .setTitle("Olá, Bem-vindo(a) ao seu ticket")
      .setColor("#00BFFF")
   let cc = new Discord.MessageActionRow().addComponents( fechar)
                      

                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : interaction.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : interaction.user.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        }
                    ]
                }).then(async (channel) => {
                   db.set(`tt_${interaction.guild.id}_${interaction.user.id}`, channel.id)
                    channel.send({ embeds: [embed], components: [cc] }).then(msg => msg.pin() );
             interaction.reply({content:`Seu ticket foi criado! <#${channel.id}> `, ephemeral: true})
                                db.set(`tt_${interaction.guild.id}_${channel.id}`, interaction.user.id)

                });
                    } else {

            let evs = new Discord.MessageEmbed()
            .setTitle("⚠️ ALERTA")
    
            .addField('Bom creio que você já tem um ticket em andamento', `<#${ms}>`)
        .setColor(config.embed);

            return interaction.reply({embeds: [evs], ephemeral: true});
        }
    
  }
   if (interaction.values == ("2")) {
         let ms =     db.get(`tt_${interaction.guild.id}_${interaction.user.id}`)

          


            if (ms == null) {
        
        
   let embed = new Discord.MessageEmbed()
   .setTitle("Olá, Bem-vindo(a) ao seu ticket")
      .setColor("#00BFFF")
   let cc = new Discord.MessageActionRow().addComponents( fechar)
                      

                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : interaction.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : interaction.user.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        }
                    ]
                }).then(async (channel) => {
                   db.set(`tt_${interaction.guild.id}_${interaction.user.id}`, channel.id)
                    channel.send({ embeds: [embed], components: [cc] }).then(msg => msg.pin() );
             interaction.reply({content:`Seu ticket foi criado! <#${channel.id}> `, ephemeral: true})
                                db.set(`tt_${interaction.guild.id}_${channel.id}`, interaction.user.id)

                });
                        } else {

            let evs = new Discord.MessageEmbed()
            .setTitle("⚠️ ALERTA")
   
            .addField('Bom creio que você já tem um ticket em andamento', `<#${ms}>`)
        .setColor(config.embed);

            return interaction.reply({embeds: [evs], ephemeral: true});
        }
    
  }
   if (interaction.values == ("3")) {
         let ms =     db.get(`tt_${interaction.guild.id}_${interaction.user.id}`)

          


            if (ms == null) {
                
   let embed = new Discord.MessageEmbed()
   .setTitle("Olá, Bem-vindo(a) ao seu ticket")
      .setColor("#00BFFF")
   let cc = new Discord.MessageActionRow().addComponents( fechar)
                      

                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : interaction.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : interaction.user.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        }
                    ]
                }).then(async (channel) => {
                   db.set(`tt_${interaction.guild.id}_${interaction.user.id}`, channel.id)
                    channel.send({ embeds: [embed], components: [cc] }).then(msg => msg.pin() );
             interaction.reply({content:`Seu ticket foi criado! <#${channel.id}> `, ephemeral: true})
                                db.set(`tt_${interaction.guild.id}_${channel.id}`, interaction.user.id)

                });
                                        } else {

            let evs = new Discord.MessageEmbed()
            .setTitle("⚠️ ALERTA")
   
            .addField('Bom creio que você já tem um ticket em andamento', `<#${ms}>`)
        .setColor(config.embed);

            return interaction.reply({embeds: [evs], ephemeral: true});
        }
    
  }
   if (interaction.values == ("4")) {
         let ms =     db.get(`tt_${interaction.guild.id}_${interaction.user.id}`)

          


            if (ms == null) {
        
        
   let embed = new Discord.MessageEmbed()
   .setTitle("Olá, Bem-vindo(a) ao seu ticket")
      .setColor("#00BFFF")
   let cc = new Discord.MessageActionRow().addComponents( fechar)
                      

                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : interaction.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : interaction.user.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        }
                    ]
                }).then(async (channel) => {
                   db.set(`tt_${interaction.guild.id}_${interaction.user.id}`, channel.id)
                    channel.send({ embeds: [embed], components: [cc] }).then(msg => msg.pin() );
             interaction.reply({content:`Seu ticket foi criado! <#${channel.id}> `, ephemeral: true})
                                db.set(`tt_${interaction.guild.id}_${channel.id}`, interaction.user.id)

                });
                                        } else {

            let evs = new Discord.MessageEmbed()
            .setTitle("⚠️ ALERTA")
   
            .addField('Bom creio que você já tem um ticket em andamento', `<#${ms}>`)
        .setColor(config.embed);

            return interaction.reply({embeds: [evs], ephemeral: true});
        }
    
  }

            }



 

}
    if (interaction.isCommand()) {

        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
       

        if (!cmd)
            return interaction.followUp({ content: "Ixi, muitos erro poucas soluções" });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options.forEach((x) => {
                    if (x.value) args.push(x.value);
                })
            } else if (option.value) args.push(option.value);
        }
   

        cmd.run(client, interaction, args);
    }


    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
        
    }
});


