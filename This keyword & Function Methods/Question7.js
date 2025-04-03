function multiplyNumbers(a, b) {
    return a * b;
}

const result = multiplyNumbers.apply(null, [5, 3]);

console.log(result);