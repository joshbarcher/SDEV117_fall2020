window.onload = function() {
    registerFocusEvents();
    registerKeyEvents();
};

function registerKeyEvents()
{
    let boxes = document.querySelectorAll("input[type='text']");
    for (let i = 0; i < boxes.length; i++)
    {
        let box = boxes[i];
        box.onkeypress = keyEntry;
    }
}

function keyEntry(event) {
    //prevent regular key entry into the textbox
    event.preventDefault();
    let box = event.target; //<--- very important concept!

    console.log("Key - " + event.key + ", Code - " + event.code);

    //manually enter the key into the box (lowercase)
    let key = event.key;
    key = key.toLowerCase();

    //enter the key into the textbox if it isn't a special character
    let specialChars = "~!@#$%^&*()_+`=-[]{}\\/?|<>,.";

    if (!specialChars.includes(key))
    {
        box.value += key;
    }
}

function registerFocusEvents()
{
    //select all form elements and add focus events
    let elements = document.querySelectorAll("input, select");

    for (let i = 0; i < elements.length; i++)
    {
        let element = elements[i];
        element.onfocus = function(event) {
            element.style.backgroundColor = "#93e9be";
        };
        element.onblur = function(event) {
            element.style.backgroundColor = "#FFFFFF";
        };
    }
}