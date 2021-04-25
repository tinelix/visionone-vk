module.exports = {
    name: 'conv',
    description: 'Информация о беседе',
    async execute(vk, bot, prefix, lang, config, ctx, Markup, strftime){
        try {
            let conv_name = "";
            let owner_id = "";
            let firstmsg = "";
            const response = bot.execute('messages.getConversationsById', {peer_ids: ctx.message.peer_id, extended: 1, fields: "name", group_id: config['group_id']}).then(rns => {
                try {
                    const responce2 = bot.execute('users.get', {user_ids: rns.items[0].chat_settings.owner_id, fields: 'online, nickname, city, last_seen, screen_name, bdate, counters', name_case: "nom"}).then(rns2 => {
                        if(!rns.items[0].chat_settings.title) {
                            conv_name = " "
                        } else {
                            conv_name = " \"" + rns.items[0].chat_settings.title + "\""
                        }
                        ctx.reply(lang.conv_message(bot, strftime, ctx, rns, conv_name, owner_id, rns2));
                    });
                } catch(ex) {
                    ctx.reply(lang.conv_command_err(ex));
                }
            });
            let i = 0
            process.on('warning', (warning) => {
                if(i < 1) {
                    const response = bot.execute('messages.getConversationsById', {peer_ids: ctx.message.peer_id, extended: 1, fields: "name", group_id: config['group_id']}).then(rns => {
                        if(!rns.items[0].chat_settings.title) {
                            conv_name = " "
                        } else {
                            conv_name = " \"" + rns.items[0].chat_settings.title + "\""
                        }
                        ctx.reply(lang.conv_message_2(bot, strftime, ctx, rns, conv_name, owner_id));
                    });
                    i = i + 1
                }
            })
        } catch(ex) {
            ctx.reply(lang.conv_command_err(ex));
        }
    }
}
