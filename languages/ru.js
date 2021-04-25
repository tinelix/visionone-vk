module.exports = {
    name: 'Russian',
    localized_name: 'Русский',
    region: 'russia',
    start_command: 'Начать',
    start_message: (config) => `Здравствуйте. Портированная, но уже переписанная версия бота ${config.bot_name} для ВКонтакте находится в стадии разработки.\n\nНо не переживайте, открытие бота запланировано на ${config.release_date} А пока воспользуйтесь готовыми фишками, нажав на соответствущую кнопку.`,
    start_buttons: ['Статистика бота', 'О пользователе', 'О беседе', 'Еще >>'],
    stats_command: 'Статистика бота',
    stats_message: (os, process, config) => {
        if (os.platform() == 'win32')
            {platform = 'Windows'}
        else if (os.platform() == 'android')
            {platform = 'Android с Termux'}
        else if (os.platform() == 'linux')
            {platform = 'Linux'}
        else {platform = 'Неизвестно'}
        if (os.cpus().length == 1)
            {core_unit = 'ядро'}
        else if (os.cpus().length <= 4)
            {core_unit = 'ядра'}
        else {core_unit = 'ядер'};

        return `ℹ Статистика бота\n\nПод управлением: ${platform} (${os.release()})\nЦП: ${os.cpus()[0].model} (${os.cpus().length} ${core_unit}, ${os.cpus()[0].speed} МГц)\nВерсия Node.js: ${process.version.slice(1)}\nВерсия бота: ${config['version']}\nАналитика: 💬 (в разработке)`
    },
    user_command: 'О пользователе',
    user_message: (bot, strftime, ctx, rns) => {
        let online_friends = "";
        let platform_client = "";
        let isClosed = "";

        var ru_RU = {
            days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            shortDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            months: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
            shortMonths: ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'],
            AM: 'ДП',
            PM: 'ПП',
            am: 'дп',
            pm: 'пп',
            formats: {
                c: '%a %d %b %Y %X',
                D: '%d.%m.%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        }
        var strftimeRU = strftime.localize(ru_RU)

        if(rns[0].last_seen.platform < 6) {
            platform_client = " 📱"
        } else {
            platform_client = " 🖥️"
        };
        if(rns[0].counters.online_friends === 0) {
            online_friends = ""
        } else {
            online_friends = " (" + rns[0].counters.online_friends + " онлайн)"
        };
        if(rns[0].is_closed === true) {
            isClosed = "Да"
        } else { isClosed = "Нет" }
        return '👤 О пользователе ' + rns[0].first_name + ' ' + rns[0].last_name + '\n\nДата рождения: ' + (rns[0].bdate || 'cкрыто') + '\nАдрес профиля: ' + rns[0].screen_name + "\nДрузей: " + rns[0].counters.friends + online_friends + "\nПоследнее посещение: " + (strftimeRU("%d %B %Y г. в %H:%M МСК", new Date((rns[0].last_seen.time * 1000) + 10800000)) || "неизвестно") + platform_client + "\nЗакрытый профиль: " + isClosed;
    },
    conv_command: 'О беседе',
    conv_message: (bot, strftime, ctx, rns, conv_name, owner_id, rns2) => {
        return 'О беседе' + conv_name + '\n\nВладелец: ' + (rns2[0].first_name + " " + rns2[0].last_name || "неизвестно") + '\nКол-во участников: ' + rns.items[0].chat_settings.members_count + " (" + rns.items[0].chat_settings.active_ids.length + " онлайн)\nАдминистраторов: " + rns.items[0].chat_settings.admin_ids.length
    },
    conv_message_2: (bot, strftime, ctx, rns, conv_name, owner_id) => {
        return 'О беседе' + conv_name + '\n\nКол-во участников: ' + rns.items[0].chat_settings.members_count + " (" + rns.items[0].chat_settings.active_ids.length + " онлайн)\nАдминистраторов: " + rns.items[0].chat_settings.admin_ids.length
    },
    conv_command_err: (ex) => {
            if(ex.message === "Cannot read property 'chat_settings' of undefined") {
                return "Сначала дайте боту права администратора, поскольку эта информации берется в настройках беседы."
            } else if(ex.message === "Cannot read property 'owner_id' of undefined" || ex.message === "Cannot read property 'title' of undefined") {
                return "Эта команда недоступна в личных сообщениях."
            } else {
                return "При выполнении команды произошла ошибка. Код ошибки: " + ex.message
            }
    },
    cmds_list_command: 'Еще »',
    cmds_list_message: `📄 Список команд\n\n"Статистика бота" - просмотр системной информации, на чем запущен бот\n\nВсе остальные команды на данный момент не реализованы, но будут разрабатываться.`,
    underconstr_message: 'На данный момент эта функция не реализована, поэтому потерпите некоторое время.'
}
