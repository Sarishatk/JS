// export ,import
// resuable
// dynamic variables


// function func_name(){
// function body

// }
// function name()


function greet(){
    console.log('hello everyone');
    
}
greet()


// func with parameter
// parameter is a variable which accept the value when the function is called

// function add(num1,num2){
//     sum = num1+num2
    
//     // return sum   (which represent a specific value (outside) where the function is called)
//     console.log('hello');

// }
// let result = add(2,3)
// console.log((result));

// define a function to check whether the largest among three numbers

// function largest(a,b,c){
//     if(a >b && a>c){
//         console.log(a);
        
//     }
//     else if(b>a&&b>c){
//         console.log(b);
        
//     }
//     else{
//         console.log(c);
        
//     }
    
// }
// largest(4,6,7)


// define a function which accept two values
// return true if 2 numbers are even
// return false if any of these is even


// function evenornot(num1,num2){

//     if(num1%2 == 0 && num2%2 == 0){
//         return true
//     }else{
//         return false
//     }
// }
//  let result = evenornot(4,6)
//  console.log(result);
 

// define a function named apiresponse which accepts the status value
// if status value 200 return success
// if stsus value equal to 404 return page not found
// if ststus equlas to 500 return serer error

function apiresponse(status){
    if(status == 200){
        return 'success'
        
    }else if(status == 404){
        return 'not found'
        
    }else if(status == 500){
        return 'server error'
        
    }else{
       return 'server crashed'
        
    }
}

let result = apiresponse(200) 
console.log(result);
