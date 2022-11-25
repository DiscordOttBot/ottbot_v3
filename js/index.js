const Discord = require("discord.js");
const TOKEN = "";

const Client = new Discord.Client();

Client.on("message", (msg) => {
  if (msg.content === ".test") {
    msg.channel.send(`Hello ${msg.author}!`);
  }

  if (msg.content === ".asdf") {
    msg.channel.send("asdf");
  }

  if (msg.content === ".help") {
    msg.channel.send(".test .asdf");
  }

  if (msg.content === ".challenge") {
    const embed = new Discord.RichEmbed()
      .setTitle("title")
      .setDescription("description")
      //.addFeild('Feild Name1', 'Feild Value1', true)
      //.setAuthor('NAME', 'Feild1')
      .setColor("f#50057");
    msg.channel.send(embed);
  }
});

Client.on("ready", () => {
  //message when online in console
  console.log("Bot is online");
  //game bot is playing
  Client.user.setActivity("Ottbot");

  //Client.channels.find(x => x.name === 'test').send('Hello! I\'m now connected');
});

Client.login(TOKEN);
