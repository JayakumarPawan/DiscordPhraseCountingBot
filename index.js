const express = require("express");
require("dotenv").config();
const { Client, GatewayIntentBits, Events } = require("discord.js");
const Leaderboard = require("./leaderboard.js");

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

// Define keywords to track
const keywords = new Set([
  "shes real",
  "I miss her",
  "shes not real",
  "her"
]);

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
    if(leaderboard.size === 0){
      message.channel.send("No one has interacted with the bot yet.");
    }else{
      message.channel.send(leaderboard.toString());
    }
    
  }
  // wipe leaderboard
  else if (message.content === "!!wipe") {
    if(message.author.globalName !== "Vayuda"){
      message.channel.send("You do not have permission to wipe the leaderboard.");
    }
    else{
      leaderboard.wipe();
      message.channel.send("Leaderboard wiped.");
    }
  }
  // add a phrase to track
  else if (message.content.startsWith("!!add phrase")) {
    if(message.author.globalName !== "Vayuda"){
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
