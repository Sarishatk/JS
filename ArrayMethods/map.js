// we can apply a specific function to each element in array without using loops

// syntax

// array.map(item, index)=>{
// return value
// }


// numbers = [2,3,4,5]

// let result = numbers.map(num =>num**2)

// console.log(result);

// find squre root of each element in a an array
// numbers = [4,9,19,35]

// let result = numbers.map(num=>num**0.5)

// console.log(result);

// find the cube of each element in the array

// num = [1,2,3,4]

// let result = num.map(number=>number**3)

// console.log(result);

// filter
// ===========

// return the elements from the array which matches a given condition


// find the odd numbers from the array of numbers

let numbers = [1,4,5,7,8,9]

let result = numbers.map(num=>num%2!=0)

console.log(result);


