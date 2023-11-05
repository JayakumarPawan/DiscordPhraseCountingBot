const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("showLeaderboard")
    .setDescription("shows leaderboard"),
  async execute(interaction) {
    
  },
};
