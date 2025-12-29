// check the prime numbers given range

let start = 1

let stop = 50

for (let num = start; num <= stop; num++) {

    if (num > 1) {

        let is_prime = true;

        for (let i = 2; i < num; i++) {

            if (num % i === 0) {

                is_prime = false

                break;
            }
        }

        if (is_prime) {
            console.log(num);
        }
    }
}