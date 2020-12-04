window.onload = function() {
    let button = document.querySelector("button");
    button.onclick = validate;
};

function validate(event)
{
    //stop the form from submitting
    event.preventDefault();

    //validate!
}