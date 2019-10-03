const axios = require("axios");

axios({
        "method": "GET",
        "url": "https://edamam-recipe-search.p.rapidapi.com/search",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
            "x-rapidapi-key": "dd3e57cb4bmsh6432a97924ff0dbp1eda95jsn7f07123ba87f"
        }
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })