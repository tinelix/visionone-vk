def localize():
    return {
        'language': 'Russian',
        'Start': {
            'commands': {
                '001': 'Начать',
                '002': 'Старт'
            },
            'message': 'Здравствуйте. Портированная версия бота {0} для ВКонтакте находится в стадии разработки.\n\nНо не переживайте, открытие бота запланировано на 30 апреля 2021 г. А пока воспользуйтесь готовыми фишками, нажав на соответствущую кнопку.',
            'keyboard': {
                '001': 'О боте',
                '002': 'О пользователе',
                '003': 'О беседе',
                '004': 'Еще >>'
            }
        },
        'Bot information': {
            'commands': {
                '001': 'О боте',
                '002': 'Системная инфа'
            },
            'message': 'ℹ Информация о боте\n\nПод управлением: {0} ({1})\nЦП: {2} ({3}, {4} МГц)\nВерсия Python: {5}\nДата сборки Python: {6}\nВерсия бота: {7}\nАналитика: 💬 {8}',
            'core_units': {
                '001': ' ядро',
                '002': ' ядра',
                '003': ' ядер'
            },
            'keyboard': {
                '001': 'Список команд'
            }
        },
        'Commands list': {
            'message': '📄 Список команд\n\n"О боте" - просмотр системной информации, на чем запущен бот\n\nВсе остальные команды на данный момент не реализованы, но будут разрабатываться.'
        },
        'Under construction': {
            'commands': {
                '001': 'Список команд'
            },
            'message': 'Эта функция на данный момент не реализована и в дальнейшем будет разрабатываться.'
        }
    }