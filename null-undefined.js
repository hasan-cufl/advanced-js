
// Null Vs Undefined, different ways you will get undefined

// exanple 1 (where not defined the value of the variable)
var pakhi;
console.log(pakhi);

// example 2 (where no return)
function addNumber(num1, num2){
    const result = num1 + num2;
}
const result = addNumber(12, 14);
console.log(result);

// example 3 (where no parameter)
function add(num1, num2){
    const result = num1 + num2;
    return result;
}
const number = add(12);
console.log(number);

// example 4 (where the proparty "passion" not defined in object)
const person = {name: "faridul hasan", address: "dhaka", phone: 45891};
console.log(person.passion);

// example 5 (where an element not in an array)
const ages = [22, 34, 33];
console.log(ages[5]);

// example 6
const fun = undefined;
console.log(fun)
