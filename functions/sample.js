// create a function to return the sum of digitd of a agiven number

function SumOfDigits(num){
sum = 0
    while(num>0){
        digit = num%10
        sum+=digit
        num=Math.floor(num / 10);
    }
console.log(sum);

}
SumOfDigits(32)