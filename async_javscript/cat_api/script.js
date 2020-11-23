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
            "x-api-key": ""
        }
    };
    fetch("https://api.thecatapi.com/v1/images/search", securityValues);
}


