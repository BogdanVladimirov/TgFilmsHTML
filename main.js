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
                keyboard:[
                    [{text: 'Открыть окно', web_app: {url: WebAppURL}}]
                ]
            }

        });
        
    }
    bot.sendMessage(ChatID, msg.web_app_data.data);
})

function filmByName() {
    const resultname = [];
    const name = data.name.toLowerCase();  // name - это название фильма
    for (let key of Object.keys(CINEMA_LIBRARY)) {
        if (key.toLowerCase() == name)  {
            resultname.push(CINEMA_LIBRARY[key]);
        } else if (key.toLowerCase().includes(name)) {
            resultname.push(CINEMA_LIBRARY[key]);
        }
    }
    console.log(resultname);
}
