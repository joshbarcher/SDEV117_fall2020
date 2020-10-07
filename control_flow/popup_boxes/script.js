let num1 = prompt("Enter a number");
let num2 = prompt("Enter another number");

//converting to actual numbers before arithmetic is important
num1 = parseFloat(num1);
num2 = parseFloat(num2);

console.log(Number.isNaN(num1));
console.log(Number.isNaN(num2));

if (!Number.isNaN(num1) && !Number.isNaN(num2))
{
    let result = num1 / num2;
    alert(num1  + " / " + num2 + " = " + result); //10 + 3 = 13
}
else
{
    alert("You must enter valid numbers to use this program");
}