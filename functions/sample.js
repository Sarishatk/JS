// create a function to return the sum of digitd of a agiven number

// function SumOfDigits(num){
// sum = 0
//     while(num>0){
//         digit = num%10
//         sum+=digit
//         num=Math.floor(num / 10);
//     }
// console.log(sum);

// }
// SumOfDigits(32)



//  create a function to return the total number of digit in a  number

function NumberCount(number){
    count = 0
    while(number>0){
        digit = number%10
        count+=1
        number=Math.floor(number / 10);

    }
    console.log(count);
    
}
NumberCount(467892)