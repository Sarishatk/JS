// armstrong number

// num = 153

// number = num

// len = String(num).length

// sum = 0

// while(num>0){

//     last_digit = num % 10

//     sum+= last_digit**len

//     num = Math.floor(num/10)
// }

// console.log(sum == number?"armstrong number":"not an armstrong numbers");



// fins the asum of  prime numbers in given range
let start = 4;
let stop= 30;
let sum = 0

for(let num = start;num<=stop;num++){

    if(num>1){

        let is_prime = true

       for (let i = 2; i < num; i++){

        if(num%i == 0){

            is_prime = false

            break
        }
       }
       
       if(is_prime){

        sum+=num
       }
    }
}
console.log(sum);



// using while loop

// let start = 4

// let stop = 30

// let num = start

// let sum = 0

// while(num <=30){

//     if(num>1){
//         is_prime = true
//         let i = 2

//         if(i<num){

//         }
//     }

// }
