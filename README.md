# DiscordPhraseCountingBot
This bot reads messages and updates a per-user count of when someone says certain pre-defined phrases

This bot is deployed on a free tier micro ec2-instance. These are all the commands I ran after connecting to terminal via the online console

### install git and clone repo:
sudo yum update
sudo yum install git
git clone https://github.com/JayakumarPawan/DiscordPhraseCountingBot


### install nvm/node (ensure checksum matches):
``curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash``
``. ~/.nvm/nvm.sh``
``nvm install --lts``

### Install dependencies
``npm init -i``

### configure token
run ``vim .env``to create the file which will hold the discord token variable
i to insert then type DISCORD_TOKEN=<your bots token var>
type escape then :w then :q

## starting the app
``npm run start``
if successfull, the console should display "Project is running!" with no errors
