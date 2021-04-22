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
    conv_command: 'О беседе',
    cmds_list_command: 'Еще »',
    cmds_list_message: `📄 Список команд\n\n"Статистика бота" - просмотр системной информации, на чем запущен бот\n\nВсе остальные команды на данный момент не реализованы, но будут разрабатываться.`,
    underconstr_message: 'На данный момент эта функция не реализована, поэтому потерпите некоторое время.'
}
