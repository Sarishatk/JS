
// call back function

//  A function(b) is passed an argument for a main function (A) in which A will be Executed later


// function greet(callback){
//     console.log('hello sarisha');
//     callback();   // calling the passed function
// }

// function sayhello(){
//     console.log('bye');
// }

// greet(sayhello);



// define a function to chcek wether a given number is prime or bot


// function primeOrNot(number) {
//     if (number <= 1) {

//         console.log("not a prime");
//         return;
//     }

//     for (i = 2; i < number; i++) {

//         if (number % i === 0) {

//             console.log("not a prime");

//             return;

//         }
//     }

//     console.log("prime");
// }

// primeOrNot(4); 
// primeOrNot(7); 
// primeOrNot(9); 


// call back function using parameters

function mainFunction(callback,n1,n2){
    callback(n1,n2)
}

function add(n1,n2){
    sum = n1+n2
    console.log(sum);
    
}
mainFunction(add,10,20)


// execution one function is depend on another
// result is not avilable immediately
// used for asynchronous functions