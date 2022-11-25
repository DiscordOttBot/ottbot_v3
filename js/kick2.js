const Discord = require("discord.js");

const Client = new Discord.Client();

Client.on("ready", () => {
  console.log("I am ready!");
});

Client.on("message", (message) => {
  if (!message.guild) return;
  if (message.content.startsWith(".hi")) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      msg.channel.send(`Hi @${user}`);
    }
  }
});

Client.login("");
