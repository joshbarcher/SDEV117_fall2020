//print out the sum of random numbers within [1, 10]
//until the sum reaches 100
let sum = 0;
let output = "0"; //0 + 3 + 7 + 1 + 10 + ... + 3 = 101

while (sum < 100)
{
    //generate a random number within [1, 10]
    let random = Math.random() * 10; //0-9.99999
    random = Math.floor(random) + 1; //1-10

    //update the sum and output
    sum += random;               //arithmetic...
    output += " + " + random;    //string concatenation...
}

//show the output
console.log(output + " = " + sum);