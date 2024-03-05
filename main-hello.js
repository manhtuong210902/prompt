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

function inefficientFunction(arr) {
    let sum = 0;
    let oddCount = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (arr[i] % 2 !== 0) {
            oddCount++;
        }
    }

    console.log("Tổng của mảng là: " + sum);
    console.log("Số lẻ trong mảng là: " + oddCount);
}
