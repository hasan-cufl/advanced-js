
// DOUBLE EQUAL (==) VS TRIPLE EQUAL (===), IMPLICIT CONVERSION

// example 1(double equal compares only value) expected result is true
const first = 2;
const second = "2";
if(first == second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// example 2(triple equal compares value and type) expected result is false
const first = 2;
const second = "2";
if(first === second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// example 3(javascript compares 1 with true by double equal) expected result is true because 1 is a truthy value.
const first = 1;
const second = true;
if(first == second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// example 3(javascript compares 0 with false by double equal) expected result is true because 0 is a falsy value.
const first = 0;
const second = false;
if(first == second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// example 3(javascript compares 1 with true by triple equal) expected result is false because 1 and true are different type.
const first = 1;
const second = true;
if(first === second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}