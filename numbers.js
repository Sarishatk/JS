// armstrong number

num = 153

number = num

len = String(num).length

sum = 0

while(num>0){

    last_digit = num % 10

    sum+= last_digit**len

    num = Math.floor(num/10)
}

if(number == sum){
    
    console.log(sum,' is armstrong number');
    
}else{
    console.log('not an armstrong number');
    
}