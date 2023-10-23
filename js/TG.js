let CINEMA_LIBRARY = {
    "Barbie": {
        "year":    2023,
        "country": ["USA"],
        "genre":   ["Comedy", "Adventure", "Fantasy"],
        "filename": "/Films/2023/Barbie.jpg"
    },
    
    "Oppenheimer": {
        "year":    2023,
        "country": ["USA", "Great Britan"],
        "genre":   ["Drama", "Biography Film", "Historical Film"],
        "filename": "/Films/2023/Oppenheimer.jpg"
    },

    "Spider-Man: Across the Spider-Verse": {
        "year":    2023,
        "country": ["USA"],
        "genre":   ["Cartoon", "Superhero Film", "Action Movie", "Fiction"],
        "filename": "Films/2023/Spider-Man: Across the Spider-Verse.jpg"
    },

    "Avatar: The Way Of Water": {
        "year":    2022,
        "country": ["USA", "Great Britan"],
        "genre":   ["Fictiion", "Adventure", "Sci-fi"],
        "filename": "Films/2022/Avatar: The_Way_Of_Water.jpg"
    },

    "Bullet Train": {
        "year":    2022,
        "country": ["USA"],
        "genre":   ["Comedy", "Action Movie"],
        "filename": "Films/2022/Bullet_Train.jpg"
    },

    "Puss In Boots": {
        "year":    2022,
        "country": ["USA", "Great Britan"],
        "genre":   ["Fictiion", "Adventure", "Fantasy"],
        "filename": "Films/2022/Puss_In_Boots: The_Last_Wish.jpeg"
    },

    "Free Guy": {
        "year":    2022,
        "country": ["USA", "Great Britan"],
        "genre":   ["Fictiion", "Action Movie", "Comedy"],
        "filename": "Films/2021/Free_Guy.jpeg"
    },

    "Free Guy": {
        "year":    2022,
        "country": ["USA", "Great Britan"],
        "genre":   ["Fictiion", "Fantasy", "Biography Movie"],
        "filename": "Films/2021/Cruella.jpg"
    }
};

const Form = document.getElementById("Forma");
const tg = window.Telegram.WebApp;

Form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(Form);
    data = Object.fromEntries(data.entries());
    // console.log(data);
    // data = JSON.stringify(data);
    // tg.sendData(data);


    if (data.name) {
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
        const jdata = JSON.stringify(resultname);
        tg.sendData(jdata);
    }

    if (data.Year1 && data.Year2) {
        const resultyear1 = [];
        for (let key of Object.keys(CINEMA_LIBRARY)) {
            if (CINEMA_LIBRARY[key]["year"] >= +data.Year1 && CINEMA_LIBRARY[key]["year"] <= +data.Year2) {
                resultyear1.push(CINEMA_LIBRARY[key]);
            }
        
        }
        console.log(resultyear1);
    }

    if (data.Country) {
        const resultcountry = [];
        for (let key of Object.keys(CINEMA_LIBRARY)) {
            if  (CINEMA_LIBRARY[key]["country"].includes(data.Country)) {
                resultcountry.push(CINEMA_LIBRARY[key]);
            }
        }
        console.log(resultcountry);
    }

    if (data.Genre) {
        const resultgenre = [];
        for (let key of Object.keys(CINEMA_LIBRARY)) {
            if  (CINEMA_LIBRARY[key]["genre"].includes(data.Genre)) {
                resultgenre.push(CINEMA_LIBRARY[key]);
            }
        }
        console.log(resultgenre);
    }

    // if(data.year) {
    //     const resultyear1 = [];
    //     const year = data.Year1;
    //     for (let key of Object.keys(CINEMA_LIBRARY)) {
    //         if (+CINEMA_LIBRARY[key]["year"] == +year)
    //             resultyear1.push(CINEMA_LIBRARY[key]["year"])
    //             // console.log(key, CINEMA_LIBRARY[key]["year"]);
    //             break;
    //         }
    //         console.log(resultyear1)
    //     }

    
    // if (CINEMA_LIBRARY[key]["year"].includes(data.Year) && CINEMA_LIBRARY[key]["country"].includes(data.Country) && CINEMA_LIBRARY[key]["genre"].includes(data.Genre)) {  
    //         let entireresult = [];
    //         entireresult.push(CINEMA_LIBRARY[key]);
    // }
    //     console.log(entireresult)


// # поиск по названию
// """
// value = input("Укажите название фильма: ")
// for key in CINEMA_LIBRARY:
//     # если названия совпадают или значение пользователя частично есть в названии фильма
//     if key.lower() == value.lower() or value.lower() in key.lower():
//         print(key, CINEMA_LIBRARY[key])
//         break
// else:
//     print("По вашему запросу фильм не найден")
// """


// # поиск по жанру
// value = input("Укажите жанр фильма: ")

// index = 0  # количество совпадений

// for key in CINEMA_LIBRARY:
//     if value.capitalize() in CINEMA_LIBRARY[key]["genre"]:
//         print(key, CINEMA_LIBRARY[key])
//         index += 1

// if index == 0:
//     print("По вашему запросу фильм не найден")

});
