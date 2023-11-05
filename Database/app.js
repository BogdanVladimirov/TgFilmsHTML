const fs = require('fs');

fs.readFile('document.json', 'utf8', function(error, data) {
    if (error) throw error;
    //console.log(data);
    result = JSON.parse(data);
    const names = Object.keys(result);
    const years = [];
    function YearOfTheFilms()
    {
        for (let name of names) {
            if (!years.includes(result[name]['year'])) {
                years.push(result[name]['year']);
            }
        }
        years.sort();
        console.log(years);
    }
    
    const countries = [];
    function CountryOfTheFilms()
    {
        for (let name of names) {
            for(let index of result[name]['country'])
            {
                if (!countries.includes(index)) {
                    countries.push(index);
                }
            }
        }
        countries.sort();
        console.log(countries);
    }
    
    const genres = [];
    function GenreOfTheFilms()
    {
        for (let name of names) {
            for(let index of result[name]['genre']){
                if (!genres.includes(index)) {
                    genres.push(index);
                }
            }
        }
        genres.sort();
        console.log(genres);
    }
    YearOfTheFilms();
    CountryOfTheFilms();
    GenreOfTheFilms();
});
