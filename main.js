const TelegramApi = require("node-telegram-bot-api");
const token = "6158871311:AAGRPEkXEOgoZKKIYoSWpXLwPX-uQ2GajTU";
const WebAppURL = "https://bogdanvladimirov.github.io/TgFilmsHTML/";
const bot = new TelegramApi(token, {polling: true});

let Films = {
    "Barbie": {
        "years": 2023,
        "contry": ["USA", "Great Britan"],
        "genre": ["comedy", "adventure", "fantasy"],
        "path": "../TgFilms/Films/2023/Barbie.jpg",
        "name": "Barbie"
    },

    "Oppenheimer": {
        "years": 2023,
        "contry": ["USA", "Great Britan"],
        "genre": ["drama", "biography", "history"],
        "path": "../TgFilms/Films/2023/Oppenheimer.jpg",
        "name": "Oppenheimer"
    },

    "Spider-Man: Across the Spider-Verse": {
        "years": 2023,
        "contry": ["USA"],
        "genre": ["cartoon", "science", "fiction", "fantasy", "action", "adventure"],
        "path": "../TgFilms/Films/2023/Spider-Man_Across-the-Spider-Verse.jpeg",
        "name": "Spider-Man: Across the Spider-Verse"
    },

    "Doctor Strange in the Multiverse of Madness": {
        "years": 2022,
        "contry": ["USA"],
        "genre": ["fantasy", "action", "adventure", "science fiction", "horror"],
        "path": "../TgFilms/Films/2022/Doctor Strange in the Multiverse of Madness.jpg",
        "name": "Doctor Strange in the Multiverse of Madness"
    },

    "Venom: Let There Be Carnage": {
        "years": 2021,
        "contry": ["USA", "China"],
        "genre": ["fantasy", "action", "horror"],
        "path": "../TgFilms/Films/2021/Venom_Let There Be Carnage.jpg",
        "name": "Venom: Let There Be Carnage"
    }
};

let forStartSearchByName = 0;

bot.on("message", msg =>
{


    const Text = msg.text;
    const ChatID = msg.chat.id;
    if(msg.text == "/start")
    {
        bot.sendMessage(ChatID, 'Хай, как ты уже понял, это бот для просмотра фильмов, без всяких  там "1xbet", выбери на клавиатуре нужную тебе услугу и поехали!', {
            reply_markup: {
                keyboard:[
                    [{text: 'Поиск по категориям', web_app: {url: WebAppURL}}], ["Поиск по названию"]
                ]
            }
        });
        forStartSearchByName = 0;
    }
    else if(msg.text == "Поиск по названию")
    {
        bot.sendMessage(ChatID, "Напиши название фильма");
        forStartSearchByName = 1;
    }

    else if(msg.text != "awdrgyjilp;")
    {
        if(forStartSearchByName == 1)
        {
            for(let key of Object.keys(Films))
            {
                if (JSON.stringify(Films[key]).toLowerCase().includes(Text.toLowerCase())) {
                    bot.sendMessage(ChatID, Films[key]["name"]);
                    bot.sendPhoto(ChatID, Films[key]["path"]);
                }
            }
        }
    }
    bot.sendMessage(ChatID, msg.web_app_data.data);
})

