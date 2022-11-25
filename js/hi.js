const Discord = require("discord.js");

const Client = new Discord.Client();

Client.on("ready", () => {
  console.log("bot online");
});

Client.on("message", (message) => {
  if (!message.guild) return;
  if (message.content.startsWith("!hi")) {
    const user = message.mentions.members.first();
    if (user) {
      message.channel.send(`Hi ${user}`);
    }
  }
});

Client.login("");
