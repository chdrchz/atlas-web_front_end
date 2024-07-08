function countPrimeNumbers() {
    let primeCount = 0;

    for (let i = 2; i < 100; i++) {
        let isPrime = true;
        
        for (let j = 2; j <= i / 2; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primeCount++;
        }
    }

    return primeCount;
}

let startTime = performance.now();
let primeCount = countPrimeNumbers();
let endTime = performance.now();

let totalTime = endTime - startTime;

console.log(`Execution time of printing countPrimeNumbers was ${totalTime} milliseconds`);
