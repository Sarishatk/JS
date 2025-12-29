// check the prime numbers given range

// let start = 1

// let stop = 50

// for (let num = start; num <= stop; num++) {

//     if (num > 1) {

//         let is_prime = true;

//         for (let i = 2; i < num; i++) {

//             if (num % i === 0) {

//                 is_prime = false

//                 break;
//             }
//         }

//         if (is_prime) {
//             console.log(num);
//         }
//     }
// }


// identify the total number of prime numbers in a given range

// let start = 1;
// let stop= 30;
// let count = 0

// for(let num = start;num<=stop;num++){

//     if(num>1){
//         let is_prime = true
//        for (let i = 2; i < num; i++){
//         if(num%i == 0){
//             is_prime = false
//             break
//         }
//        }
//        if(is_prime){
//         count++
//        }
//     }
// }
// console.log("Total prime numbers:", count);



// identify the largest prime number in given range
// let start = 1;
// let stop= 30;
// let largest_prime = 1

// for(let num = start;num<=stop;num++){

//     if(num>1){

//         let is_prime = true
//        for (let i = 2; i < num; i++){
//         if(num%i == 0){
//             is_prime = false
//             break
//         }
//        }
//        if(is_prime){
//       largest_prime = num;
        
//        }
//     }
// }
// if (largest_prime !== 1) {
//     console.log("largest:", largest_prime);
// } else {
//     console.log("not found");
// }




// i = 1

// while(i<=7){
//     console.log(i);
//     i++

// }


// i = 10
// while(i<=30){
//     if(i%2 == 0){
//         console.log(i);
        
//     }
//     i++
// } 



let num = 15
while(num<=105){
    if (num%3==0 && num%5 ==0){
        console.log(num);
        
    }
    num++
}