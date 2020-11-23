

window.onload = function() {
    //select all three elements
    let elements = document.querySelectorAll("div, section, p");

    //add an event handler to all three that changes
    //the background color when clicked!
    for (let i = 0; i < elements.length; i++)
    {
        let element = elements[i];
        element.onclick = function(event) {
            //stop event bubbling!
            event.stopPropagation();

            element.style.backgroundColor = "beige";
        };
    }
}

