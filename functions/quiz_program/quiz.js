let mainSection = document.getElementById("quiz");

let soundQuestion = trueFalseQuestion("Can plants respond to sounds?");
let pollinationQuestion = trueFalseQuestion("Are bees the only pollinators?");
let butterflyQuestion = trueFalseQuestion("Butterflies are more attracted to weeds than flowers?");

mainSection.innerHTML += soundQuestion;
mainSection.innerHTML += pollinationQuestion;
mainSection.innerHTML += butterflyQuestion;

//a function that returns the HTML for a true/false quiz question
function trueFalseQuestion(description)
{
    //put together the HTML for the question
    let questionText = "<p>" + description + "</p>";
    questionText += "<ul><li>True</li><li>False</li></ul>";

    //return the HTML
    return questionText;
}