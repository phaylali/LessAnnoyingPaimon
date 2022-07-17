# LessAnnoyingPaimon
A discord bot for genshin communities 

## Steps to recreate this bot in case I died
- Get a bot token from Discord Developer Portal after setting it up (you can find dozens of youtbe videos explaining this step)
- Get a Tenor gifs token from their website
- Turn on developer mode in discord to get channels IDs
- Rename example.env to .env and fill the field with the following
  * TOKEN=type here the discord bot token
  * ROLES=type here the ID of the roles channel
  * RULES=type here the Id of the rules channel
  * TENOR=type here the Tenor gifs token
  * WELCOME=type here the ID of the channel where the bot will welcome new members
  * ONLINE=type here the ID of the channel where the bot will notify you when it comes online
- clone the repo to your pc and then:
  * install nodejs
  * npm install : type that in the terminal to install the dependencies
  * node . : type that in the terminal to run the bot from your local pc
  * find a reliable hosting for the bot or a rasberry pi if you have one or a local old pc that you don't use

## How To Use The Bot
- the bot will automatically detect names of genshin impact characters and some member of Genshin Impact - Morocco community and reply with something relevant to them or mocking them
- !gif [character] : the bot will search in Tenor for a gif related to the character mentioned in the command
- !tip : this command will give you a random loading screen tip from genshin
- !tip -t [topic] : this command does the same as the one above but it is specified to some topics, the list of topics is as follows:
  * General: use !tip -t general
  * Mondstadt: use !tip -t mondstadt or monstade or mondstad
  * Golden Apple Archipelago: use !tip -t golden or apple or archipelago
  * Spiral Abyss: use !tip -t spiral or abyss
  * Domains: use !tip -t domains or domain
  * Serenitea Pot: use !tip -t pot or teapot or serenitea
  * Enkanomiya: use !tip -t enkanomiya or enkonomiya or enkanomia or enkonomia or eukonomiya