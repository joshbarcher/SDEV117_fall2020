//create an object that represents our class
let ourClass = {
    title: "Front End Web Dev With Javascript",
    identifier: "SDEV 117",
    numStudents: 21,
    isVirtual: true,
    hasProjector: false,
    students: ["Peter", "David", "Gudulia", "Matison", "Raju"],
    syllabus: {
        latePolicy: "3 days, 50% credit",
        hours: "MW 11am-1pm, F 11am",
        outcomes: [
            "Effectively test and debug JavaScript code.",
            "Apply JavaScript to a web page to make it more interactive.",
            "Apply best practices to code, including proper naming " +
            "conventions, indentation, and documentation."
        ]
    },
    foo: function() {
        //put any code here to execute when you call ourClass.foo()
    }
};

//print out the late policy for the class
console.log(ourClass.syllabus.latePolicy);
console.log();

//print out the learning outcomes for the class
for (let i = 0; i < ourClass.syllabus.outcomes.length; i++)
{
    console.log(ourClass.syllabus.outcomes[i]);
}
console.log();

//add another student to the class
ourClass.numStudents++;
ourClass.students.push("Jose");
console.log(ourClass.numStudents); //22
console.log();

//interact with the students array (nested in the object property)
ourClass.students.sort();
for (let i = 0; i < ourClass.students.length; i++)
{
    console.log(ourClass.students[i]);
}