// let elements = new Set([1,0,2,2,8,9])

// console.log(elements);


//add the odd numbers to new list

let number = [5,6,2,4,6,3,2,4]

let odd_num = new Set([])

for(i=0;i<number.length;i++){
    if(number[i]%2 !=0){
        odd_num.add(number[i])
    }
}
console.log(odd_num);
