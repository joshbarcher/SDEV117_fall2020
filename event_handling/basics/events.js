window.onload = function(event) {
    //assign an event handler which is shared among multiple elements
    let paras = document.getElementsByTagName("p");
    for (let i = 0; i < paras.length; i++)
    {
        paras[i].onclick = clickAndReport;
    }

    addButtonEvents();
}

function clickAndReport(event)
{
    let list = document.querySelector("ul");

    //what element did I click on?
    let element = event.target;

    let item = document.createElement("li");
    item.textContent = "Clicked on paragraph " + element.textContent;
    list.appendChild(item);
}

function addButtonEvents()
{
    let button = document.querySelector("button");
    let list = document.querySelector("ul");

    //there are two ways to register "event handlers"
    button.addEventListener("click", function(event) {
        let item = document.createElement("li");
        item.textContent = "Clicked the button";
        list.appendChild(item);
    });

    button.addEventListener("click", function(event) {
        let item = document.createElement("li");
        item.textContent = "Handled elsewhere";
        list.appendChild(item);
    });

    /*button.onclick = function(event) {
        let item = document.createElement("li");
        item.textContent = "Clicked the button";
        list.appendChild(item);
    };

    button.onclick = function(event) {
        let item = document.createElement("li");
        item.textContent = "Handled elsewhere";
        list.appendChild(item);
    };*/
}