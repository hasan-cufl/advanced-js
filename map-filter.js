
// MAP, FILTER, FIND, SMART WAY TO RUN FOR LOOP
const number = [2, 3, 5, 7, 4, 6];

const square = []
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const result = element * element;
    square.push(result);
}
console.log(square)


function square(element){
    return element * element;
}
number.map(square);
     // this function can be used inside map or can be declare the function in map.
     // first way to use map
     // inside map 3 parameters can be used. 1: element, 2: index, 3: array.
const square = number.map(function(element){
    return element * element;
})

    // second way to use map.
    // can be used arrow function
const square = element => element * element;
const square = x => x * x;

const square = number.map(x => x * x)

console.log(square)


    // filter 
    // filter return an array even if the array is empty.
const greater = number.filter(x => x > 5);
    // or
const less = number.filter(x => x < 5);
console.log(less)

    //  find
    // find return the first matching element.
const element = number.find(x => x > 5);
console.log(element)