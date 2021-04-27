const vk = require('node-vk-bot-api');
const fs = require('fs');
const os = require('os');
const strftime = require('strftime')
const math = require('mathjs');

const lang = require("./languages/ru.js");
const config = require("./config.js");

const Stage = require('node-vk-bot-api/lib/stage');
const Scene = require('node-vk-bot-api/lib/scene');
const Session = require('node-vk-bot-api/lib/session');
const Markup = require('node-vk-bot-api/lib/markup');

const bot = new vk(config['token']);
let prefix = ""

let commands = new Map()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const session = new Session();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.set(command.name, command);
}


const crystball = new Scene('8ball',
    (ctx) => {
        commands.get('crystball').first_scene(vk, bot, prefix, lang, config, ctx, Markup, Scene, Stage)
    },
    (ctx) => {
        commands.get('crystball').second_scene(vk, bot, prefix, lang, config, ctx, Markup, Scene, Stage)
    }
);

const calc = new Scene('calc',
    (ctx) => {
        commands.get('calc').first_scene(vk, bot, prefix, lang, config, ctx, Markup, Scene, Stage, math)
    },
    (ctx) => {
        commands.get('calc').second_scene(vk, bot, prefix, lang, config, ctx, Markup, Scene, Stage, math)
    }
);

const stage = new Stage(crystball, calc);
bot.use(session.middleware());
bot.use(stage.middleware());


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
            commands.get('user').execute(vk, bot, prefix, lang, config, ctx, Markup, strftime)
        } else if (ctx.message.text == prefix + lang.conv_command) {
            commands.get('conv').execute(vk, bot, prefix, lang, config, ctx, Markup, strftime)
        } else if (ctx.message.text == prefix + lang.crystball_command) {
            ctx.scene.enter('8ball');
        } else if (ctx.message.text == prefix + lang.calc_command) {
            ctx.scene.enter('calc');
        } else if (ctx.message.text == prefix + lang.menu_command) {
            commands.get('menu').execute(vk, bot, prefix, lang, config, ctx, Markup)
        }
    } catch(ex) {
        console.log(ex)
    }
});



bot.startPolling();
