window.onload = function() {
    let button = document.querySelector("button");

    //add an event handler...
    button.onclick = loadCat;
};

function loadCat()
{
    let securityValues = {
        method: "GET", //<-- this is the HTTP verb
        mode: "cors", //<-- cross origin resource sharing (security setting)
        headers: {
            "Context-Type": "application/json",
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe581e5cb09"
        }
    };
    fetch("https://api.thecatapi.com/v1/images/search", securityValues)
        .then(function(response) {
            //we have our response now, get the JSON data from the response
            return response.json();
        })
        .then(function(json) {
            //do something with the data
            console.log(json);

            //change the cat image on the page
            let image = document.getElementById("portrait");
            image.setAttribute("src", json[0].url);
        });
}


