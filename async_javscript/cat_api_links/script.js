window.onload = function() {
    requestBreeds();
    requestImages();
};

function requestBreeds()
{
    fetch("https://api.thecatapi.com/v1/breeds", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe581e5cb09"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        breeds = json;
        loadBreedLinks();
    });
}

function loadBreedLinks()
{
    let select = document.getElementById("breeds");
    for (let i = 0; i < breeds.length; i++)
    {
        let option = document.createElement("option");
        option.textContent = breeds[i].name;
        select.appendChild(option);
    }
}

function requestImages()
{
    let address = "https://api.thecatapi.com/v1/images/search?limit=50&breed_id=cspa";
    let params = {
        method: "GET",
        mode: "cors",
        headers: {
            "Context-Type": "application/json",
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe581e5cb09"
        }
    };
    fetch(address, params)
        .then(function(response) {
            //convert our response to JSON text
            return response.json();
        })
        .then(loadLinks);
}

function loadLinks(json)
{
    //print out our data to see if we got it!
    console.log(json);

    //add a new list item with a link to the image
    let ul = document.getElementById("links");
    for (let i = 0; i < json.length; i++)
    {
        //create a new list item
        let cat = json[i];
        let li = document.createElement("li");

        let anchor = document.createElement("a");
        // anchor.textContent = cat.url;
        anchor.setAttribute("href", cat.url);

        let img = document.createElement("img");
        img.setAttribute("src", cat.url);

        //add img to anchor, anchor to item, item to list
        anchor.appendChild(img);
        li.appendChild(anchor);
        ul.appendChild(li);
    }
}












