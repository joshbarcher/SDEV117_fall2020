var breakfast = prompt("What did you eat for breakfast?");
var exercised = confirm("Did you exercise today?");

if (breakfast === "fruit")
{
    alert("You are wise");
}
else if (exercised)
{
    if (breakfast === "cereal")
    {
        alert("You are studious");
    }
    else if (breakfast === "pancake")
    {
        alert("You are watchful");
    }
    else if (breakfast === "eggs")
    {
        alert("You are silly");
    }
    else
    {
        alert("You are a mystery to me...");
    }
}
else //didn't exercise...
{
    if (breakfast === "cereal")
    {
        alert("You are melodramatic");
    }
    else if (breakfast === "pancake")
    {
        alert("You are unwise");
    }
    else if (breakfast === "eggs")
    {
        alert("You are brave");
    }
    else
    {
        alert("You are a mystery to me...");
    }
}
