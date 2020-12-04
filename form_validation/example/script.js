window.onload = function() {
    let button = document.getElementById("submit");
    button.onclick = validateForm;
}

function validateForm(event)
{
    //prevent the form from submitting
    event.preventDefault();

    //validate the form...
    let name = document.getElementById("name").value;

    let aside = document.getElementById("name-error");
    if (name.length < 3 || name.length > 10)
    {
        aside.style.display = "inline-block";
    }
    else
    {
        aside.style.display = "none";
        let button = event.target;
        button.form.submit();
    }
}

function practice()
{
    let radios = document.querySelectorAll("input[name='gender']");
    for (let i = 0; i < radios.length; i++)
    {
        let radio = radios[i];
        if (radio.checked)
        {
            console.log("Radio checked with value " + radio.value);
        }
    }

    let boxes = document.querySelectorAll("input[type='checkbox']")
    for (let i = 0; i < boxes.length; i++)
    {
        checkCheckbox(boxes[i]);
    }
}

function checkCheckbox(checkbox)
{
    if (checkbox.checked)
    {
        console.log("You heard about us through a(n) " + checkbox.name);
    }
}
