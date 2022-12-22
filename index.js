const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.__dirname. command);
}

client.once(Events.ClientReady, () => {
	console.log('Ready!');
});













client.login("MTA1NTMwOTg4NjYzMzgyMDE5MA.GI47Vb.pXu0vbxOatdiWCJYpbV2K84RsPeMXdjfsT9EEc");