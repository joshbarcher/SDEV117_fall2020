//script constants
const RATE = 16.5;
const OT_THRESHOLD = 40;
const OT_INCREASE = 0.5;

let pay = 0;
let hours = 42;

//multiply pay * rate
pay = RATE * hours;

if (hours > OT_THRESHOLD) {
    //remove regular hours and get
    //overtime pay
    let otHours = hours - OT_THRESHOLD;
    pay = pay + (RATE * OT_INCREASE * otHours);
}

//output the pay
console.log(pay);