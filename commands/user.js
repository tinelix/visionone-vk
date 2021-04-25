module.exports = {
    name: 'user',
    description: 'Информация о пользователе',
    async execute(vk, bot, prefix, lang, config, ctx, Markup, strftime){
        const response = bot.execute('users.get', {user_ids: ctx.message.from_id, fields: 'online, nickname, city, last_seen, screen_name, bdate, counters', name_case: "gen"}).then(rns => {
            ctx.reply(lang.user_message(bot, strftime, ctx, rns));
        });
    }
}
