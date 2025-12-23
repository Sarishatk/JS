let salary = Number(prompt("Enter your salary:"));

let bonus;

if (salary >= 50000) {

    bonus = salary * 0.10;

}
 else if (salary >= 30000) {

    bonus = salary * 0.07;

} else {
    bonus = salary * 0.05;
}

let totalSalary = salary + bonus;

console.log("Bonus:", bonus);

console.log("Total Salary:", totalSalary);
