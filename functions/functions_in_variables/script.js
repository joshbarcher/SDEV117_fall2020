//put a function in a variable!
let lessThan = function(first, second) {
    return first < second;
};

let result = lessThan(3, 14);
console.log("Result: " + result);

compare(10, 4, lessThan);

/*
    Accepts 2 numbers (one & two)
    and a function to call upon them.
 */
function compare(one, two, func)
{
    if (func(one, two))
    {
        console.log(one + " is less than " + two);
    }
    else if (func(two, one))
    {
        console.log(two + " is less than " + one);
    }
    else
    {
        console.log("They are the same");
    }
}