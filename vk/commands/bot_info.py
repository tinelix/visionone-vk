def push(botconfig, event, localization, vk, VkKeyboard, VkKeyboardColor, cpuinfo, psutil, os, platform, get_random_id):
    keyboard = VkKeyboard(one_time=True)
    keyboard.add_button(localization['Bot information']['keyboard']['001'], color=VkKeyboardColor.PRIMARY)

    if cpuinfo.get_cpu_info()['count'] < 2:
        cores_amount = str(cpuinfo.get_cpu_info()['count']) + localization['Bot information']['core_units']['001']
    elif cpuinfo.get_cpu_info()['count'] < 5:
        cores_amount = str(cpuinfo.get_cpu_info()['count']) + localization['Bot information']['core_units']['002']
    else:
        cores_amount = str(cpuinfo.get_cpu_info()['count']) + localization['Bot information']['core_units']['003']

    if event.from_user:
        vk.messages.send(
            random_id=0,
            peer_id=event.message.peer_id,
            message=localization['Bot information']['message'].format(platform.uname()[0] + " " + platform.uname()[2], platform.uname()[3], str(cpuinfo.get_cpu_info()['brand_raw']), cores_amount, str(round(cpuinfo.get_cpu_info()['hz_advertised'][0] / 1000000, 2)), platform.python_version(), platform.python_build()[1], botconfig['version'], '(в разработке)'),
            keyboard=keyboard.get_keyboard()
        )
    elif event.from_chat:
        vk.messages.send(
            peer_id=event.message.peer_id,
            random_id=get_random_id(),
            message=localization['Bot information']['message'].format(botconfig['name']),
            keyboard=keyboard.get_keyboard()
        )
