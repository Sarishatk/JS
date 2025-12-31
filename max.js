// find the largest number in the given array
// numbers = [1,3,4,5,7,8,9]

// largets_number = numbers[0]

// for(i = 0;i < numbers.length;i++){
//     if(numbers[i]> largets_number){
//         largets_number = numbers[i]
//     }
// }
// console.log(largets_number);



// find the smallest elements in the above array

// numbers = [1,3,4,5,7,8,9]
// smallest = numbers[0]

// for(i = 0;i < numbers.length;i++){
//     if(numbers[i]< smallest){
//         largets_number = numbers[i]
//     }
// }
// console.log(smallest);



// move all zeros from the array to the end

numbers = [1,0,2,0,7,8]

new_array = []

for(let i = 0;i<numbers.length;i++){
 if(numbers[i]!=0){
    new_array.push(numbers[i])
 }
}
while(new_array.length < numbers.length){
    new_array.push(0)
}
console.log(new_array);





