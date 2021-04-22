const vk = require('node-vk-bot-api');
const fs = require('fs');
const os = require('os');
const lang = require("./languages/ru.js");
const config = require("./config.js");

const Markup = require('node-vk-bot-api/lib/markup');

const bot = new vk(config['token']);
let prefix = ""

let commands = new Map()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.set(command.name, command);
}

bot.on((ctx) => {
    try {
        if (ctx.message.peer_id >= 2000000000 && ctx.message.peer_id < 3000000000) {
            prefix = config['prefix']
        } else {
            prefix = ''
        }
        if (ctx.message.text == prefix + lang.start_command) {
            commands.get('start').execute(vk, bot, prefix, lang, config, ctx, Markup)
        } else if (ctx.message.text == prefix + lang.user_command) {
            commands.get('underconstr').execute(vk, bot, prefix, lang, config, ctx, Markup)
        } else if (ctx.message.text == prefix + lang.conv_command) {
            commands.get('underconstr').execute(vk, bot, prefix, lang, config, ctx, Markup)
        } else if (ctx.message.text == prefix + lang.cmds_list_command) {
            commands.get('cmd_list').execute(vk, bot, prefix, lang, config, ctx, Markup)
        }
    } catch(ex) {
        console.log(ex)
    }
});

bot.startPolling();
