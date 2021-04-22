module.exports = {
    name: 'stats',
    description: 'Показывает служебную информацию о боте.',
    async execute(vk, bot, prefix, lang, config, ctx, Markup, os){
        ctx.reply(lang.stats_message(os, process, config));
    }
}
