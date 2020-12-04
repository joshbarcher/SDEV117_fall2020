window.onload = function() {
    requestBreeds();

    //load images when the user clicks the button
    let button = document.querySelector("button");
    button.onclick = function() {
        //clear out old images
        let ul = document.getElementById("links");
        ul.innerHTML = "";

        //load selected images
        let select = document.getElementById("breeds");
        let breedId = select.value;
        requestImages(breedId);
    };
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
    .then(loadBreedLinks);
}

function loadBreedLinks(breeds)
{
    //see if we got the data?
    console.log(breeds);

    let select = document.getElementById("breeds");
    for (let i = 0; i < breeds.length; i++)
    {
        let breed = breeds[i];
        let option = document.createElement("option");
        option.textContent = breed.name;
        option.setAttribute("value", breed.id);
        select.appendChild(option);
    }
}

function requestImages(breedId)
{
    let address = "https://api.thecatapi.com/v1/images/search?limit=50&breed_id=" + breedId;
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












