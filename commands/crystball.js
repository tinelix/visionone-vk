module.exports = {
    name: 'crystball',
    description: 'Игра \"Магический шар\" подбирает случайные ответы.',
    async first_scene(vk, bot, prefix, lang, config, ctx, Markup, Scene, Stage){
        ctx.scene.next();
        ctx.reply(lang.crystball_message);
    },
    async second_scene(vk, bot, prefix, lang, config, ctx, Markup, Scene, Stage) {
        let answers = lang.crystball_answers;
        ctx.session.content = ctx.message.text;
        let rand = Math.floor(Math.random() * answers.length);
        ctx.scene.leave();
        ctx.reply(`${answers[rand]}`);
    }
}
