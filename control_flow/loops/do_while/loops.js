//prompt the user repeatedly until they enter a number
let num;
do
{
    num = prompt("Enter a number");
    num = parseFloat(num);

} while (Number.isNaN(num));

//output the number
alert("Your number is " + num);

//how not to write the code segment above with a while loop (redundant code)
let anotherNum = prompt("Enter a number");
anotherNum = parseFloat(anotherNum);

while (Number.isNaN(anotherNum))
{
    anotherNum = prompt("Enter a number");
    anotherNum = parseFloat(anotherNum);
}

alert("Your number is " + anotherNum);