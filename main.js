const TelegramApi = require("node-telegram-bot-api");
const token = "6158871311:AAGRPEkXEOgoZKKIYoSWpXLwPX-uQ2GajTU";
const bot = new TelegramApi(token, {polling: true});

bot.on("message", msg =>
{
    const ChatID = msg.chat.id;
    if(msg.text == "/start")
    {
        // bot.sendMessage(ChatID, `Здравствуйте,  ${msg.from.first_name}, Это сообщение в боте специально для вас, вы не можете это увидеть, но знайте. Серверная часть этого бота написана БЕЗ ЕДИНОЙ МЫСЛИ О ГАДЮГЕ 3.0. тут используется только ЧИСТЫЙ JS, хоть и с небольшими загруженными модулями. А что бы вы в этом окончательно убедились - примите в дар мой код;`);
        // setTimeout(() => {bot.sendMessage(ChatID, "Для запуска скрипта наипшите в терминале 'npm run dev'...")}, 100);
        // bot.sendDocument(ChatID, 'MessageScript/main.js');
        
    }
})
