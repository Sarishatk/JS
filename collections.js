
// Array
// =========

// orderd, indexed, allow duplicates


// let elements = ['hlo',true,100]

// console.log(elements[1]);

// elements.push(false)

// console.log(elements);

// console.log((elements.toReversed()))




// find the even numbers from a given range and display then in array

let start = 3

let stop=20

let evenNumbers = []
for(let i = start;i<=stop;i++){
    if(i%2==0){
        evenNumbers.push(i)
    }
}
console.log(evenNumbers);
