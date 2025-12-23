var num1 = 4
var num2 = 6
var num3 = 8

if (num1 >num2 && num1 > num3){
    console.log(num1,'is largest');
    
}

else if (num2> num1 && num2>num3){
    console.log(num2,'largest');
    
}
else{
    console.log(num3,'is largest');
    
}


// check the number is divisible by both 3 and 5 or not

var number = 45

if(number % 3 == 0 && number & 5 ==0 ){
    console.log(number ,'is divisible by 3 and 5');
  
}