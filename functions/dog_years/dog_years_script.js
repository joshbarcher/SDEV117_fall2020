//select my button and add a function that
//executes when the user presses the button
let button = document.querySelector("button");
button.onclick = function () {
    //get the dog years
    let textbox = document.getElementById("dog-years");
    let dogYears = parseFloat(textbox.value);

    //convert dog to human years
    let humanYears = dogToHumanYears(dogYears);

    //show the result
    let paragraph = document.getElementById("human-years");
    paragraph.innerHTML = "Human years: " + humanYears;
}

function dogToHumanYears(dogYears)
{
    let humanYears = 0;

    //no more than 3 years, then 10 per year
    if (dogYears <= 3)
    {
        humanYears = dogYears * 10;
    }
    else //more than 3 years
    {
        //first three years are 30 human years
        humanYears = 30;
        dogYears -= 3;

        //later years are 7 per year
        humanYears += dogYears * 7;
    }

    return humanYears;
}

function foo()
{

}

function bar()
{

}