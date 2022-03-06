// fabonacciSeries accepts and argument and returns value at given position
const fabonacciSeries = (num) => {
    // check if num is negative
    if (num < 0) throw "Fabonacci Series is not supported for negative numbers";
    // check for integer value
    if (Number.parseInt(num) != num)
        throw "Fabonacci Series is not supported for non-integral numbers";
    // return number itself when num is equal to 0 or 1
    if (num <= 1) return num;
    // return sum of values at previous 2 postions
    return fabonacciSeries(num - 1) + fabonacciSeries(num - 2);
};
