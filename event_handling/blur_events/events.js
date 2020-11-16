window.onload = function() {
    let button = document.querySelector("button");

    //gain focus!
    button.onfocus = function(event) {
        let clicked = event.target;
        clicked.style.backgroundColor = "rgb(255,246,65)";
        clicked.style.border = "2px solid black";
    };

    //lose focus!
    button.onblur = function(event) {
        let clicked = event.target;
        clicked.style.backgroundColor = ""; // set back to default gray
        clicked.style.border = "";
    };

    //add a focus event when you have tabbed to a checkbox
    let sections = document.querySelectorAll("section");
    for (let i = 0; i < sections.length; i++)
    {
        //add an event handler to all five checkboxes
        sections[i].onfocus = function(event) {
            let section = event.target;
            section.style.fontWeight = "bold";
        };
    }
};

