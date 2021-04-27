module.exports = {
    name: 'calc',
    description: 'Калькулятор',
    async first_scene(vk, bot, prefix, lang, config, ctx, Markup, Scene, Stage, math){
        ctx.scene.next();
        ctx.reply(lang.calc_message);
    },
    async second_scene(vk, bot, prefix, lang, config, ctx, Markup, Scene, Stage, math) {
        try {
            ctx.session.content = ctx.message.text;
            let result = math.evaluate(ctx.session.content).toString();
            ctx.scene.leave();
            ctx.reply(lang.calc_answer1(result));
        } catch(ex) {
            console.log(ex)
            ctx.scene.leave();
            ctx.reply(lang.calc_answer2);
        }
    }
}
