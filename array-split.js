
// Array slice, splice, array join elements

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);
// not remove from original array. In () first number is for start-number and socond number is for the end-number.
console.log(part);
console.log(nums);

const part2 = nums.splice(2, 4);
//splice cuts elements from original array. In () first number is for start-number and second number is for delete-count.  
console.log(part2);
console.log(nums);

// Inject elements in splice also possible
const part3 = nums.splice(2, 4, 11, 22);
console.log(part3);
console.log(nums);

// join
const together = nums.join(",");
console.log(together)