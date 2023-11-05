const express = require("express");
const app = express()

app.listen(3000, () => {
  console.log("Project is running!")
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const { Client, GatewayIntentBits, Events} = require('discord.js');

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})
const keywords = new Set([
  "shes real",
  "I miss her",
  "shes not real",
  "her"
]);

const leaderboard = new Map();

function updateLeaderboard(item) {
  // Check if the item already exists in the Map
  if (leaderboard.has(item)) {
    // If it exists, increment the frequency count
      leaderboard.set(item, leaderboard.get(item) + 1);
  } else {
    // If it doesn't exist, set the frequency count to 1
      leaderboard.set(item, 1);
  }
}
function printLeaderboard() {
  // Convert the Map entries to an array and sort them in descending order by count
  const sortedEntries = [...leaderboard.entries()].sort((a, b) => b[1] - a[1]);
  let result = '';

  // Iterate through the Map entries and format them
  for (const [item, count] of sortedEntries) {
    result += `${item}: ${count} time${count > 1 ? 's' : ''}\n`;
  }

  return result;
}


client.on(Events.MessageCreate, message => {
  console.log("message create event receieved")
  console.log(message.content)
  console.log(keywords.has(message.content))
  if (keywords.has(message.content)) {
    message.channel.send("https://tenor.com/view/mahiru-shiina-mahiru-shiina-%E6%A4%8E%E5%90%8D%E7%9C%9F%E6%98%BC-otonari-no-tenshi-sama-gif-10239075908011260381")
    updateLeaderboard(message.author.globalName)
  }

  if (message.content === "!leaderboard") {
    if(leaderboard.size === 0){
      message.channel.send("No one has interacted with the bot yet.");
    }else{
      console.log(printLeaderboard())
      message.channel.send(printLeaderboard());
    }
    
  }
})
require('dotenv').config();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN
client.login(DISCORD_TOKEN);
