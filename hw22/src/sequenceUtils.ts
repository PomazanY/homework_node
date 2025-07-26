
// `generateFibonacci`, которая генерирует последовательность Фибоначчи до указанного числа.

function generateFibonacci(limit: number): number[] {
    const sequence: number[] = [];
    let a = 0;
    let b = 1;

    while (a <= limit) {
        sequence.push(a);
        const next = a + b;
        a = b;
        b = next;
    }

    return sequence;
}

const fib = generateFibonacci(50);
console.log(fib); 


// `generatePrimeNumbers`, которая генерирует простые числа до указанного числа.

function generatePrimeNumbers(limit: number): number[] {
    const primes: number[] = [];

    for (let num = 2; num <= limit; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(num);
        }
    }

    return primes;
}
const primeNumbers = generatePrimeNumbers(50)
console.log(primeNumbers);
