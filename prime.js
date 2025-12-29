// check whether the number is prime or not

let number = 7
is_prime = true

for(let i=2;i<number;i++){
    if(number%i ==0){
        is_prime = false
        break
    }
}

console.log(is_prime == true?'prime number':'not prime');
