/*
    This is a script for calculating the time passed
    since the UNIX epoch.

    Author: Josh Archer
    File: time.js
    Date: 9/28/2020
 */

"use strict"

const MILLIS_IN_SECOND = 1000;
const SECOND_IN_MINUTES = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_YEAR = 365;

let millis = new Date().getTime();
let seconds = millis / MILLIS_IN_SECOND;
let minutes = seconds / SECOND_IN_MINUTES;
let hours = minutes / MINUTES_IN_HOUR;
let days = hours / HOURS_IN_DAY;
let years = days / DAYS_IN_YEAR; //fudge a bit here...

//round our numbers
millis = Math.round(millis);
seconds = Math.round(seconds);
minutes = Math.round(minutes);
hours = Math.round(hours);
days = Math.round(days);
years = Math.round(years);

//display them
let element = document.querySelector("div#millis span");
element.innerHTML = millis;
element = document.querySelector("div#seconds span");
element.innerHTML = seconds;
element = document.querySelector("div#minutes span");
element.innerHTML = minutes;
element = document.querySelector("div#hours span");
element.innerHTML = hours;
element = document.querySelector("div#days span");
element.innerHTML = days;
element = document.querySelector("div#years span");
element.innerHTML = years;