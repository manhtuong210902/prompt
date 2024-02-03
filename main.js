function calculateSum(a, b) {
    return a - b;
}

function checkIfEven(number) {
    return number % 2 === 0;
}

function checkIfOdd(number) {
    return number % 2 !== 0;
}

function checkIfPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
