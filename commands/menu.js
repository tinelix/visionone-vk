module.exports = {
    name: 'menu',
    description: 'Список команд для VK-версии бота VisionOne',
    async execute(vk, bot, prefix, lang, config, ctx, Markup){
        ctx.reply(lang.menu_message, null, Markup.keyboard([
            [
                Markup.button(lang.menu_buttons[0], 'primary'),
                Markup.button(lang.menu_buttons[1]),
            ],
            [
                Markup.button(lang.menu_buttons[2]),
                Markup.button(lang.menu_buttons[3]),
            ],
            [
                Markup.button(lang.menu_buttons[4])
            ]
        ]).inline())
    }
}
