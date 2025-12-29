// check whether the number is prime or not

let number = 7
is_prime = true

for(let i=2;i<number;i++){
    if(number%i ==0){
        is_prime = false
        break
    }
}

if(is_prime == true){
    console.log('number is prime');
    
}else{
    console.log('number is not prime');
    
}