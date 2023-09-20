const TelegramApi = require("node-telegram-bot-api");
const token = "6158871311:AAGRPEkXEOgoZKKIYoSWpXLwPX-uQ2GajTU";
const WebAppURL = "https://bogdanvladimirov.github.io/TgFilmsHTML/";
const bot = new TelegramApi(token, {polling: true});

bot.on("message", msg =>
{
    const ChatID = msg.chat.id;
    if(msg.text == "/start")
    {
        bot.sendMessage(ChatID, 'Категории фильмов', {
            reply_markup: {
                inline_keyboard:[
                    [{text: 'Открыть окно', web_app: {url: WebAppURL}}]
                ]
            }

        });

    }
})
