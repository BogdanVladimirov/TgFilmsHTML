const Form = document.getElementById("form");

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
    let request = prompt("Введите название");
    for (let key of Object.keys(Films))
    {
        if(key == request)
        {
            console.log(Films[key]);
        }
    }
}


function FilmByYear(request)
{
    for (let key of Object.keys(Films))
    {
        if(Films[key]["years"] == request)
        {
            console.log(key);
        }
    }
}

function FilmByContry1(request)
{
    for (let key of Object.keys(Films))
    {
        if(Films[key]["contry"] == request)
        {
            console.log(key);
        }

    }
}

// function FilmByContry(request)
// {
//     for (let key of Object.keys(Films))
//     {
        
//         for (let key2 of Object.keys(Films[key]))
//         {
//             for (let index of Object.keys(Films[key][key2]))
//             {
//                 if(Films[key][key2][index] == request)
//                 {
//                     console.log(key);
//                 }
//             }
//         }
//     }
// }

function FilmByGerne(request)
{
    for (let key of Object.keys(Films))
    {
        
        for (let key2 of Object.keys(Films[key]))
        {
            for (let index of Object.keys(Films[key][key2]))
            {
                if(Films[key][key2][index] == request)
                {
                    console.log(key);
                }
            }
        }
    }
}

Form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(Form);
    data = Object.fromEntries(data.entries());
    // console.log(data);
    //FilmByYear(data.FromYear);
    FilmByContry1(data.Contry);
    // FilmByGerne(data.Categories);
});
