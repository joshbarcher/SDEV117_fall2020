//create an object that represents our class
let ourClass = {
    title: "Front End Web Dev With Javascript",
    identifier: "SDEV 117",
    numStudents: 21,
    isVirtual: true,
    hasProjector: false,
    studentsPresent: ["Peter", "David", "Gudulia", "Matison", "Raju"],
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
    addNewStudent: function(student) {
        this.studentsPresent.push(student);

        //call a method from another method
        this.incrementNumStudents();
    },
    incrementNumStudents: function() {
        this.numStudents++;
    },
    reset: function() {
        this.title = "";
        this.identifier = "";
        this.numStudents = 0;
        this.isVirtual = false;
        this.hasProjector = false;
        this.studentsPresent = [];
        this.syllabus = {}
    },
    numStudentsNotInClass: function() {
        return this.numStudents - this.studentsPresent.length;
    }
};

//practice calling our reset method
ourClass.reset();

ourClass.addNewStudent("Ian");
ourClass.addNewStudent("Renee");
console.log(ourClass.numStudents);
console.log();

for (let i = 0; i < ourClass.studentsPresent.length; i++)
{
    console.log(ourClass.studentsPresent[i]);
}
console.log();

//print out number of missing students
console.log(ourClass.numStudentsNotInClass());

function testingOurObject()
{
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
    ourClass.studentsPresent.push("Jose");
    console.log(ourClass.numStudents); //22
    console.log();

    //interact with the students array (nested in the object property)
    ourClass.studentsPresent.sort();
    for (let i = 0; i < ourClass.studentsPresent.length; i++)
    {
        console.log(ourClass.studentsPresent[i]);
    }
}