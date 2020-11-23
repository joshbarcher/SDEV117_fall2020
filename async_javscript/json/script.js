let jsonText = '{"name": "Scranton Office Park", "stories": "3", "company": "Dunder Mifflin"}';
let manager = {
    title: "Assistant to the Regional Manager",
    pay: 25000,
    name: "Michael Scott"
};

console.log(jsonText);
console.log(manager);

//JSON format --> JS object
let scrantonBuilding = JSON.parse(jsonText);
console.log(scrantonBuilding);

//JS object --> JSON format
let formattedJsonText = JSON.stringify(manager);
console.log(formattedJsonText);