const HALF_IMG_SIZE = 50;

window.onload = function() {
    let img = document.querySelector("img");
    //img.ondblclick = clickTarget;

    let div = document.querySelector("div");
    div.onclick = clickBackground;
    div.onmousemove = movingOnBackground;
};

function movingOnBackground(event)
{
    //get where the user clicked
    let x = event.pageX;
    let y = event.pageY;

    let inputBox = document.querySelector("input");
    inputBox.value = x + ", " + y;
    console.log(x + ", " + y);
}

function clickBackground(event)
{
    console.log("div clicked");

    //get where the user clicked
    let x = event.pageX;
    let y = event.pageY;

    //subtract half the image height/width to center it
    x -= HALF_IMG_SIZE;
    y -= HALF_IMG_SIZE;

    console.log(x + ", " + y);

    //get the image and move it
    let img = document.querySelector("img");
    img.style.left = x + "px";
    img.style.top = y + "px";
}

function clickTarget(event)
{
    console.log("img clicked");

    //get the image
    let img = event.target;

    //move it randomly within the div
    let left = Math.random() * 500;
    let top = Math.random() * 500;

    img.style.left = left + "px";
    img.style.top = top + "px";
}