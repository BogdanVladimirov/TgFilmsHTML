const fs = require('fs');

const array = [""];

fs.readFile('document.json', 'utf8', function(error, data) {
    if (error) throw error;
    //console.log(data);
    result = JSON.parse(data);
    const names = Object.keys(result);
    const years = [];
    for (let name of names) {
        if (!years.includes(result[name]['year'])) {
            years.push(result[name]['year']);
        }
    }
    years.sort();
    console.log(years);


});
