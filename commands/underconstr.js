module.exports = {
    name: 'underconstr',
    description: 'Пока находится в разработке.',
    async execute(vk, bot, prefix, lang, config, ctx, Markup){
        ctx.reply(lang.underconstr_message);
    }
}
