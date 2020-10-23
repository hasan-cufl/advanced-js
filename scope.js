
// Scope, block scope, access outer scope variable

let bonus = 20;

function sum(num1, num2){
    const result = num1 + num2 + bonus;
    console.log(result);
    return result;  
}
// variable inside function isn't accessible from outside of function.
// but variable outside function is accessible from inside of function. example "bonus"
// example
// console.log(result);
const output = sum(7, 3);
console.log(output)

// example 
function sum(num1, num2){
    const result = num1 + num2 + bonus;
    if(result > 9){
        var mood = "happy";
        mood = "fishy";
        mood = "funcky"
        console.log(mood)
    }
    console.log(mood);
    return result;  
}
const output = sum(7, 3);