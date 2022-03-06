// Factorial accepts and argument and calculate factorial of that number
const factorial = (num) => {
    // check if num is negative
    if (num < 0) throw "Factorial is not supported for negative numbers";
    // check for integer value
    if (Number.parseInt(num) != num)
        throw "Factorial is not supported for non-integral numbers";
    // return 1 when num is equal to 1 or 0
    if (num <= 1) return 1;
    // return num * (num-1)!
    return num * factorial(num - 1);
};
