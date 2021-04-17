def push(botconfig, event, localization, vk, VkKeyboard, VkKeyboardColor, get_random_id):
    keyboard = VkKeyboard(one_time=True)
    keyboard.add_button(localization['Start']['keyboard']['001'], color=VkKeyboardColor.PRIMARY)
    keyboard.add_button(localization['Start']['keyboard']['002'], color=VkKeyboardColor.SECONDARY)

    keyboard.add_line()

    if event.from_chat:
        keyboard.add_button(localization['Start']['keyboard']['003'], color=VkKeyboardColor.SECONDARY)

    keyboard.add_button(localization['Start']['keyboard']['004'], color=VkKeyboardColor.SECONDARY)

    if event.from_user:
        vk.messages.send(
            random_id=0,
            peer_id=event.message.peer_id,
            message=localization['Start']['message'].format(botconfig['name']),
            keyboard=keyboard.get_keyboard()
        )
    elif event.from_chat:
        vk.messages.send(
            peer_id=event.message.peer_id,
            random_id=get_random_id(),
            message=localization['Start']['message'].format(botconfig['name']),
            keyboard=keyboard.get_keyboard()
        )
