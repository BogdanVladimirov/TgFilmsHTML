from telebot import TeleBot
from telebot.types import Massege, ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

bot = TeleBot(token="")


def Keyboard():
    markup = ReplyKeyboardMarkup
    web = WebAppInfo(url="https://bogdanvladimirov.github.io/TgFilmsHTML/")
    button = KeyboardButton(text="", web_app=web)
    markup.add(button)
    return markup


bot.infinity_polling()
