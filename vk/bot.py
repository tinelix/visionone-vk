import requests
import vk_api
import random
import cpuinfo
import psutil
import os
import platform

import vk.commands.start as start_cmd
import vk.commands.bot_info as bot_info_cmd
import vk.commands.cmd_list as cmd_list_cmd

import vk.languages.ru_RU as ru_RU
localization = ru_RU.localize()

from vk.botconfig import botconfig

vk_session = vk_api.VkApi(token=botconfig['token'])

from vk_api.bot_longpoll import VkBotLongPoll, VkBotEventType
from vk_api.keyboard import VkKeyboard, VkKeyboardColor
from vk_api.utils import get_random_id

longpoll = VkBotLongPoll(vk_session, '202978127')
vk = vk_session.get_api()
print('VK Bot API connected!')

for event in longpoll.listen():
    if event.type == VkBotEventType.MESSAGE_NEW:
        try:

            if event.message.text == localization['Start']['commands']['001'] or event.message.text == localization['Start']['commands']['002']:
                start_cmd.push(botconfig, event, localization, vk, VkKeyboard, VkKeyboardColor, get_random_id)
            if event.message.text == localization['Bot information']['commands']['001'] or event.message.text == localization['Bot information']['commands']['002']:
                bot_info_cmd.push(botconfig, event, localization, vk, VkKeyboard, VkKeyboardColor, cpuinfo, psutil, os, platform, get_random_id)
            if event.message.text == localization['Commands list']['commands']['001'] or event.message.text == localization['Commands list']['commands']['002']:
                cmd_list_cmd.push(botconfig, event, localization, vk, VkKeyboard, VkKeyboardColor, cpuinfo, psutil, os, platform, get_random_id)
        except Exception as e:
            print(e)

