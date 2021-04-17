def push(botconfig, event, localization, vk, VkKeyboard, VkKeyboardColor, get_random_id):

    if event.from_user:
        vk.messages.send(
            random_id=0,
            peer_id=event.message.peer_id,
            message=localization['Command list']['message']
        )
    elif event.from_chat:
        vk.messages.send(
            peer_id=event.message.peer_id,
            random_id=get_random_id(),
            message=localization['Command list']['message']
        )
