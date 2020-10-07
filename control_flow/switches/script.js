let account = prompt("Please enter your account type (admin, guest, user)");
let output = document.getElementById("output");

//check account type
switch (account)
{
    case "admin":
        output.innerHTML = "Welcome admin, the world is at your fingertips!";
        break;
    case "guest":
        output.innerHTML = "Welcome guest, show yourself around!";
        break;
    case "user":
        output.innerHTML = "Welcome, basic user!";
        break;
    default:
        output.innerHTML = "I don't know what account type you have?!?!";
        break;
}

if (account === "admin")
{
    output.innerHTML = "Welcome admin, the world is at your fingertips!";
}
else if (account === "guest")
{
    output.innerHTML = "Welcome guest, show yourself around!";
}
else if (account === "user")
{
    output.innerHTML = "Welcome, basic user!";
}
else
{
    output.innerHTML = "I don't know what account type you have?!?!";
}






