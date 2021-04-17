import os
from dotenv import load_dotenv
dotenv_path = os.path.join('../', '.env')
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)

botconfig = {
    'token': os.environ['VKTOKEN'],
    'name': 'VisionOne',
    'id': 785383439196487720,
    'prefix': '=',
    'accent1': 0xd7832a,
    'accent2': 0xcb3532,
    'accent3': 0x6eda5f,
    'version': '01A1-VK-210417',
    'owner': '741883312108339231',
    'logs_channel': 788723868255649832,
}
