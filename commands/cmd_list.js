module.exports = {
    name: 'cmd_list',
    description: 'Список команд для VK-версии бота VisionOne',
    async execute(vk, bot, prefix, lang, config, ctx, Markup){
        ctx.reply(lang.cmds_list_message);
    }
}
