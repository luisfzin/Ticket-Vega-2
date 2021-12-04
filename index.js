

const Discord = require("discord.js");
const Client = require('discord.js')
const client = new Discord.Client({intents: 32767,});
const express = require('express')
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
const config = require("./config.json")
module.exports = client;
client.slashCommands = new Discord.Collection();
client.config = require("./config.json");
require("./handler")(client);
<<<<<<< HEAD
client.login("");
=======
client.login("");
>>>>>>> origin/main


