const client = require("../index");
const config = require("../config.json")
const db = require("quick.db")
const Discord = require("discord.js")

client.on("channelDelete", async (channel) => {
  
         let user  = db.get(`tt_${channel.guild.id}_${channel.id}`)
                          
                              db.delete(`tt_${channel.guild.id}_${user}`)
                                db.delete(`tt_${channel.guild.id}_${channel.id}`)
})