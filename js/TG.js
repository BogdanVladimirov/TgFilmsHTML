const Form = document.getElementById("form");
let tg = window.Telegram.WebApp;

let Films = {
    "Barbie": {
        "years": 2023,
        "contry": ["USA", "Great Britan"],
        "genre": ["comedy", "adventure", "fantasy"]
    },

    "Oppenheimer": {
        "years": 2023,
        "contry": ["USA", "Great Britan"],
        "genre": ["drama", "biography", "history"]
    },

    "Spider-Man: Across the Spider-Verse": {
        "years": 2023,
        "contry": ["USA"],
        "genre": ["cartoon", "science", "fiction", "fantasy", "action", "adventure"]
    },
};





function FilmByName()
{
    const Match = [];
    let request = prompt("Введите название");
    for (let key of Object.keys(Films))
    {
        if(key == request)
        {
            
        }
    }
}

function FilmByYear(FromYear, ToYear)
{
    const Match = [];
    for (let key of Object.keys(Films))
    {
        if(Films[key]["years"] >= FromYear && Films[key]["years"] <= ToYear)
        {
            Match.push(key);
        }
    }
    
    let result = JSON.stringify(Match);
    console.log(result, typeof result);
    return result;
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
                Match.push(key);
            }
        }
    }
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
                Match.push(key);
            }
        }
    }
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
                Match.push(key);
            }
        }
    }
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
                Match.push(key);
            }
        }
    }
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
                    Match.push(key);
                }
            }
        }
    }
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
                    Match.push(key);
                }
            }
        }
    }
}

Form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(Form);
    data = Object.fromEntries(data.entries());
    dataSend = JSON.stringify(data);
    if(data.FromYear == "NS")
    {
        data.FromYear = 0;
    }
    //
    if(data.ToYear != "NS" && data.Contry == "NS" && data.Categories == "NS")
    {
        tg.sendData(FilmByYear(dataSend));
        console.log(dataSend);
        let Button = document.getElementById("search");
        Button.style.backgroundColor = "red";
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
