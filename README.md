# DiscordPhraseCountingBot
This bot reads messages and updates a per-user count of when someone says certain pre-defined phrases

This bot is deployed on a free tier ec2-instance. These are all the commands I ran after running ssh

## create directory:
mkdir discord_bot
cd discord_bot

## install nvm/node (ensure checksum matches):
``curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash``
``. ~/.nvm/nvm.sh``
``nvm install --lts``

## create node project and install dependencies
``npm init -y``
``npm install express``
``npm install discord.js``
``npm install dotenv``

## create source files
run ``vim .env``to create the file which will hold the discord token variable
clone this repo

## starting the app
in package.json, under scripts, add "start": "node ."
``npm run start``
