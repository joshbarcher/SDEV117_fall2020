//store and print the result
let result = isEven(22);
console.log(result);

//just pass the result to print it immediately
console.log(isEven(21));

let qaSalary = positionSalaries("QA");
let devSalary = positionSalaries("developer");
let ceoSalary = positionSalaries("ceo");

console.log("QA: " + qaSalary);
console.log("Dev: " + devSalary);
console.log("CEO: " + ceoSalary);

function isEven(num)
{
    if (num % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function positionSalaries(position)
{
    let result = 0;
    switch (position)
    {
        case "CTO":
            result = 100000;
            break;
        case "QA":
            result = 75000;
            break;
        case "developer":
            result = 90000;
            break;
        case "dev ops":
            result = 95000;
            break;
        default:
            result = NaN;
    }
    return result;
}