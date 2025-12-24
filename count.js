

// let count = 0

// for(i=1;i<=50; i++){
//     if( i%3 == 0){
//         count+=1
//     }
// }
// console.log(count);


// count the total number of character in the string


// let text = "javascript"
// count = 0
// for(let i=0;i<text.length;i++){
//     count+=1
    
// }
//     console.log(count);

    // return count of specific character in a string

let text = "mississippii";
let target = "s";
let count = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i] === target) {
        count++;
    }
}

console.log(count);
