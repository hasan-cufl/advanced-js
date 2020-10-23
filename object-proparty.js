
// Apply map, filter, find on an array of objects\

const students = [
    {id: 21, name: "mahi"},
    {id: 31, name: "sultan"},
    {id: 42, name: "aqib"},
    {id: 51, name: "nazia"},
    {id: 63, name: "natasha"},
]
const studentsName = students.map(x => x.name);  //expected name of every proparty.
const studentId = students.map(x => x.id);       //expected id of every proparty.
const greater = students.filter(x => x.id > 40);  // expected peoparties those are greater than 40.
const greaterOne = students.find(x => x.id > 40); // expected only first matching element.
console.log(greaterOne)