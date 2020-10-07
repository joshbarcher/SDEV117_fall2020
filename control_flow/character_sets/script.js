let list = document.getElementById("list");

//this string will hold all of our list contents
let listContents = "";

//loop and create several entities and add them to the string
for (let i = 33; i <= 10000; i++)
{
    let htmlEntity = "&#" + i + "; ";
    listContents = listContents + htmlEntity;
}

//update my HTML
list.innerHTML = listContents;