//add an event handler for the button to add a new table record
let button = document.querySelector("button");
button.onclick = function() {
    //gather data for a new record
    let name = prompt("Enter your name");
    let email = prompt("Enter your email");
    let phone = prompt("Enter your phone number");

    //create new elements for a row
    let tr = document.createElement("tr"); //create an <tr>
    let tdName = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdPhone = document.createElement("td");

    //populate the new elements
    tdName.textContent = name;
    tdEmail.textContent = email;
    tdPhone.textContent = phone;

    //add the cells to the row
    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPhone);

    //add the row to the table
    let tableBody = document.querySelector("table#contact_table tbody");
    tableBody.appendChild(tr);
};

function domNavigation()
{
    let quotes = document.querySelectorAll("span.quote");

    for (let i = 0; i < quotes.length; i++)
    {
        //change the quote
        let quote = quotes[i];
        quote.style.fontWeight = "bold";
        quote.style.display = "block";
        quote.style.margin = "10px 20px";

        let old = quote.textContent;
        quote.textContent = "\"" + old + "\"";
        quote.style.backgroundColor = "beige";

        //select a parent element and change it
        let parentPara = quotes[i].parentElement;
        parentPara.style.fontFamily = "Courier New";
    }

    let list = document.querySelector("ol.list");
    let items = list.children;

    for (let i = 0; i < items.length; i++)
    {
        items[i].style.textDecoration = "underline";
    }
}

function domChanges()
{
    //change the CSS class(es) for an element
    let firstParagraph = document.querySelector("p:first-of-type");
    //firstParagraph.setAttribute("class", "interesting");

    firstParagraph.classList.add("interesting");
    firstParagraph.classList.add("foo");
    firstParagraph.classList.add("bar");

    firstParagraph.classList.remove("foo");

    //select an element and change the text of the element
    //and an HTML attribute
    let link = document.querySelector("a.wiki");
    link.textContent = "here!!!";

    //read an attribute
    let oldDestination = link.getAttribute("href");
    console.log("Old link is " + oldDestination);

    //change an attribute
    link.setAttribute("href", "https://www.google.com");

    //select just the first li with a class of other
    let others = document.getElementsByClassName("other")[0];
    let mlk = others[0];
    mlk.style.fontWeight = "bold";

    //target every element with a class of other
    let otherQuotes = document.getElementsByClassName("other");
    for (let i = 0; i < otherQuotes.length; i++)
    {
        otherQuotes[i].style.backgroundColor = "rgb(200, 200, 200)";
    }

    //select all paragraphs on the page and make their font
    //slightly different
    let paragraphs = document.getElementsByTagName("h4");
    for (let i = 0; i < paragraphs.length; i++)
    {
        let paragraph = paragraphs[i];
        paragraph.style.fontFamily = "Bookman Old Style";
        paragraph.style.color = "rgb(117,52,52)";
        paragraph.style.fontSize = "0.8em";
    }

    //underline all quotes on the page
    let quotes = document.querySelectorAll("span.quote");
    for (let i = 0; i < quotes.length; i++)
    {
        quotes[i].style.textDecoration = "underline";
    }

    //practice selecting elements
    let single = document.querySelector("ol li");
    let group = document.querySelectorAll("ol li");

    console.log(single);
    console.log(group);

    single.style.color = "red";

    /*for (let i = 0; i < group.length; i++)
    {
        let elementColor = "";
        if (i % 2 === 0)
        {
            elementColor = "lightgreen";
        }
        else
        {
            elementColor = "lightpink";
        }

        let singleElement = group[i];
        singleElement.style.backgroundColor = elementColor;
        singleElement.style.fontWeight = "bold";
        singleElement.style.fontFamily = "Lato";
    }*/
}










