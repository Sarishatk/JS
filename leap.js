year = 2000

if(year % 100 == 0 && year % 400 == 0){

    console.log(year,'is leap year and centuray');
    
}
else if (year % 100 != 0 && year % 4 == 0){
    
    console.log(year,'is leap and non century year');
    
}