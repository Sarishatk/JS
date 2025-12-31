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

// numbers = [1,0,2,0,7,8]

// new_array = []

// for(let i = 0;i<numbers.length;i++){
//  if(numbers[i]!=0){
//     new_array.push(numbers[i])
//  }
// }
// while(new_array.length < numbers.length){
//     new_array.push(0)
// }
// console.log(new_array);





// calculate the count of even and odd numbers
// sum of all elemeths in the array
// create a new array which contains only the uniuq elements from the above array


// let numbers = [3,4,5,6,8,13,1,5]

// let even_count = 0

// let odd_count = 0

// for(i=0;i<=numbers.length;i++){

//     if(numbers[i]%2 == 0){
//         even_count+=1
//     }
//     else{
//         odd_count+=1
//     }


// }
// console.log('even count',even_count);
// console.log('odd count', odd_count);

// sum of all elemeths in the array

//  numbers = [3,4,5,6,8,13,1,5]

//  let sum =0

//  for(i=0;i<numbers.length;i++){
//     sum+=numbers[i]
//  }
//  console.log(sum);
 


 // create a new array which contains only the uniuq elements from the above array

 numbers = [2,3,4,5,6,6,6,3]

 let uniques = []

 for(i=0;i<numbers.length;i++){
    if(!uniques.includes(numbers[i])){
        uniques.push(numbers[i])
    }
 }
 console.log(uniques);
 