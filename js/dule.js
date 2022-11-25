// Import the discord.js module
const Discord = require("discord.js");

// Create an instance of a Discord Client
const Client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
Client.on("ready", () => {
  console.log("I am ready!");
});

Client.on("message", (message) => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith(".dule")) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild

      /**
       * Kick the member
       * Make sure you run this on a member, not a user!
       * There are big differences between a user and a member
       */
      msg.channel
        .send("Optional reason that will display in the audit logs")
        .then(() => {
          // We let the message author know we were able to kick the person
          msg.reply(`Successfully kicked ${user}`);
        });
    }
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
Client.login("NTQ1OTg0NTA1ODUzMzc4NTYx.D0hnYQ.3v4xL3kj-gPOpVzlCf7VohBXUgE");
