module.exports = {
    name: 'start',
    description: 'Показывает приветственное сообщение.',
    async execute(vk, bot, prefix, lang, config, ctx, Markup){
        ctx.reply(lang.start_message(config), null, Markup.keyboard([
            [
                Markup.button(lang.start_buttons[0], 'primary'),
                Markup.button(lang.start_buttons[1]),
            ],
            [
                Markup.button(lang.start_buttons[2]),
                Markup.button(lang.start_buttons[3]),
            ]
        ]).inline()
	);
    }
}
