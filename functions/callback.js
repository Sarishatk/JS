
// call back function

//  A function(b) is passed an argument for a main function (A) in which A will be Executed later


function greet(callback){
    console.log('hello sarisha');
    callback();   // calling the passed function
}

function sayhello(){
    console.log('bye');
}

greet(sayhello);



// define a function to chcek wether a given number is prime or bot
