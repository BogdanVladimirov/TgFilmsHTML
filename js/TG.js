const Form = document.getElementById("form");
const tg = window.Telegram.WebApp; // tg

let Films = {
    "Barbie": {
        "years": 2023,
        "contry": ["USA", "Great Britan"],
        "genre": ["comedy", "adventure", "fantasy"],
        "path": "/films/2023/Barbie.mp4"
    },

    "Oppenheimer": {
        "years": 2023,
        "contry": ["USA", "Great Britan"],
        "genre": ["drama", "biography", "history"],
        "path": "/films/2023/Oppenheimer.mp4"
    },

    "Spider-Man: Across the Spider-Verse": {
        "years": 2023,
        "contry": ["USA"],
        "genre": ["cartoon", "science", "fiction", "fantasy", "action", "adventure"],
        "path": "/films/2023/Spider-Man: Across the Spider-Verse.mp4"
    },

    "Hotel Transylvania: Transormania": {
        "years": 2022,
        "contry": ["USA"],
        "genre": ["caroon", "fantasy", "horror"],
        "path": "/films/2022/Hotel Transylvania: Transormania.mp4"
    },

    "Venom: Let There Be Carnage": {
        "years": 2021,
        "contry": ["USA", "China"],
        "genre": ["fantasy", "action", "horror"],
        "path": "/films/2021/Venom: Let There Be Carnage.mp4"
    }


};






function FilmByYear(FromYear, ToYear)
{
    const Match = [];
    for (let key of Object.keys(Films))
    {
        if(Films[key]["years"] >= FromYear && Films[key]["years"] <= ToYear)
        {
            Match.push(Films[key]);           
        }
    }
    
    let dataSend = JSON.stringify(Match);
    console.log(dataSend)
    tg.sendData(dataSend);
}

function FilmByContry(request)
{
    const Match = [];
    for (let key of Object.keys(Films))
    {
        for (let cont of Object.keys(Films[key]["contry"]))
        {
            console.log()
            if(Films[key]["contry"][cont] == request)
            {
                Match.push(Films[key]);
                
            }
        }
    }
    let dataSend = JSON.stringify(Match);
    tg.sendData(dataSend);
}

function FilmByGerne(request)
{
    const Match = [];
    for (let key of Object.keys(Films))
    {
        for (let genre of Object.keys(Films[key]["genre"]))
        {
            if(Films[key]["genre"][genre] == request)
            {
                Match.push(Films[key]);
            }
        }
    }
    let dataSend = JSON.stringify(Match);
    tg.sendData(dataSend);
}

function FilmByYearAndContry(FromYear, ToYear, Contry)
{
    const Match = [];
    for(let key of Object.keys(Films))
    {
        for(let contry of Object.keys(Films[key]["contry"]))
        {
            if(Films[key]["years"] >= FromYear && Films[key]["years"] <= ToYear && Films[key]["contry"][contry] == Contry)
            {
                Match.push(Films[key]);
            }
        }
    }
    let dataSend = JSON.stringify(Match);
    tg.sendData(dataSend);
}

function FilmByYearAndGerne(FromYear, ToYear, Genre)
{
    const Match = [];
    for(let key of Object.keys(Films))
    {
        for(let genre of Object.keys(Films[key]["genre"]))
        {
            if(Films[key]["years"] >= FromYear && Films[key]["years"] <= ToYear && Films[key]["genre"][genre] == Genre)
            {
                Match.push(Films[key]);
            }
        }
    }
    let dataSend = JSON.stringify(Match);
    tg.sendData(dataSend);
}

function FilmByContryAndGerne(Contry, Genre)
{
    const Match = [];
    for(let key of Object.keys(Films))
    {
        for(let contry of Object.keys(Films[key]["contry"]))
        {        for(let genre of Object.keys(Films[key]["genre"]))
            {
                if(Films[key]["contry"][contry] == Contry && Films[key]["genre"][genre] == Genre)
                {
                    Match.push(Films[key]);
                }
            }
        }
    }
    let dataSend = JSON.stringify(Match);
    tg.sendData(dataSend);
}

function FilmByContryAndGerneAndYear(FromYear, ToYear, Contry, Genre)
{
    const Match = [];
    for(let key of Object.keys(Films))
    {
        for(let contry of Object.keys(Films[key]["contry"]))
        {        for(let genre of Object.keys(Films[key]["genre"]))
            {
                if(Films[key]["contry"][contry] == Contry && Films[key]["genre"][genre] == Genre && Films[key]["years"] >= FromYear && Films[key]["years"] <= ToYear)
                {
                    Match.push(Films[key]);
                }
            }
        }
    }
    let dataSend = JSON.stringify(Match);
    tg.sendData(dataSend);
}

Form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(Form);
    data = Object.fromEntries(data.entries());
    if(data.FromYear == "NS")
    {
        data.FromYear = 0;
    }
    //
    if(data.ToYear != "NS" && data.Contry == "NS" && data.Categories == "NS")
    {
        FilmByYear(data.FromYear, data.ToYear);
    }
    if(data.ToYear == "NS" && data.Contry != "NS" && data.Categories == "NS")
    {
        FilmByContry(data.Contry);
    }
    if(data.ToYear == "NS" && data.Contry == "NS" && data.Categories != "NS")
    {
        FilmByGerne(data.Categories);
    }
    if(data.ToYear != "NS" && data.Contry != "NS" && data.Categories == "NS")
    {
        FilmByYearAndContry(data.FromYear, data.ToYear, data.Contry);
    }
    if(data.ToYear != "NS" && data.Contry == "NS" && data.Categories != "NS")
    {
        FilmByYearAndGerne(data.FromYear, data.ToYear, data.Categories);
    }
    if(data.ToYear == "NS" && data.Contry != "NS" && data.Categories != "NS")
    {
        FilmByContryAndGerne(data.Contry, data.Categories);
    }
    if(data.ToYear != "NS" && data.Contry != "NS" && data.Categories != "NS")
    {
        FilmByContryAndGerneAndYear(data.FromYear, data.ToYear, data.Contry, data.Categories);
    }
});
