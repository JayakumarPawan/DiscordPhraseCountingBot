# DiscordPhraseCountingBot
This bot reads messages and updates a per-user count of when someone says certain phrases\
This bot is deployed on a aws free tier t.2 micro ec2-instance
## Setup:
#### Install git and clone repo:
```
$sudo yum update
$sudo yum install git
$git clone https://github.com/JayakumarPawan/DiscordPhraseCountingBot
```
#### Install nvm/node:
```
$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
$. ~/.nvm/nvm.sh
$nvm install --lts
```
#### Install dependencies
``$npm -i``
#### Configure token
Create a file called .env\
Write ``DISCORD_TOKEN=<your bots token var>`` in the file\
In ``index.js`` change admin to the username of the admin in your server\
Also in ``index.js`` you can add phrases to track by changing ``const keywords = new Set();`` 
#### Starting the app
``$npm run start``\
If successfull, the console should display "Project is running!" with no errors
## Commands (these are run in the discord server the bot is in)
#### Show leaderboard
``!!leaderboard``
#### Wipe leaderboard
``!!wipe``
#### Add phrase to track
``!!add phrase <phrase>``
