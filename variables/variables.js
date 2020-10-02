"use strict"

//script constants
const RATE = 16.5;
const OT_THRESHOLD = 40;
const OT_INCREASE = 0.5;

let pay = 0;
let hours = 42;

//multiply pay * rate
pay = RATE * hours;
console.log("Pay: " + pay);

if (hours > OT_THRESHOLD) {
    //remove regular hours and get
    //overtime pay
    let otHours = hours - OT_THRESHOLD;
    console.log("OT hours: " + otHours);
    console.log("OT rate: " + (RATE * OT_INCREASE));
    pay = pay + (RATE * OT_INCREASE * otHours);
    console.log("OT Pay: " + pay);
}

//output the pay
console.log(pay);

pay = 0;
hours = 42;

//multiply pay * rate
pay = 16.5 * hours;
console.log("Pay: " + pay);

if (hours > 40) {
    //remove regular hours and get
    //overtime pay
    hours = hours - 40;
    console.log("OT hours: " + hours);
    pay = pay + (24.75 * hours);
    console.log("OT rate: " + 24.75);
    console.log("OT Pay: " + pay);
}

//output the pay
console.log(pay);