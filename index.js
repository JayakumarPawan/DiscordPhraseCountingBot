const express = require("express");
require("dotenv").config();
const { Client, GatewayIntentBits, Events } = require("discord.js");
const Leaderboard = require("./leaderboard.js");

// Define keywords to track by changing this to `= new Set(["phrase1", "phrase2", ...])`
const keywords = new Set();
// Enter the server admin's global name here
const admin = "";

// set up local webserver
const app = express()
app.listen(3000, () => {
  console.log("Project is running!")
})
app.get("/", (req, res) => {
  res.send("Hello world!");
})

// Set up discord client event handler
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

// Define leaderboard
const leaderboard = new Leaderboard();

//This is called whenever someone sends a message in the server
client.on(Events.MessageCreate, message => {

  // look for keywords in the message
  if (keywords.has(message.content)) {
    message.channel.send("https://tenor.com/view/mahiru-shiina-mahiru-shiina-%E6%A4%8E%E5%90%8D%E7%9C%9F%E6%98%BC-otonari-no-tenshi-sama-gif-10239075908011260381")
    leaderboard.update(message.author.globalName)
  }
  // show leaderboard
  else if (message.content === "!!leaderboard") {
    message.channel.send(leaderboard.toString());
  }
  // wipe leaderboard
  else if (message.content === "!!wipe") {
    if (message.author.globalName !== admin) {
      message.channel.send(
        "You do not have permission to wipe the leaderboard."
      );
    } else {
      leaderboard.wipe();
      message.channel.send("Leaderboard wiped.");
    }
  }
  // add a phrase to track
  else if (message.content.startsWith("!!add phrase")) {
    if(message.author.globalName !== admin){
      message.channel.send("You do not have permission to wipe the leaderboard.");
    }
    else{
      const phrase = message.content.split(" ").splice(2).join(" ").trim();
      keywords.add(phrase);
      message.channel.send(`Added "${phrase}" to the list of phrases to track.`);
    }
  }
})

const DISCORD_TOKEN = process.env.DISCORD_TOKEN
client.login(DISCORD_TOKEN);
