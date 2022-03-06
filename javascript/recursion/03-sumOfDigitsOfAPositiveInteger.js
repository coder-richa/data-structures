// sumOfDigitsOfAPositiveInteger accepts a positive integral value and returns sum of its digits
const sumOfDigitsOfAPositiveInteger = (num) => {
    // check if num is negative
    if (num < 0) throw "Sum of digits is not supported for negative numbers";
    // check for integer value
    if (Number.parseInt(num) != num)
        throw "Sum of digits is not supported for non-integral numbers";
    // calculate the remainder
    const remainder = num % 10;
    // calculate the quotient
    const quotient = Number.parseInt(num / 10);
    // return quotient when remainder is 0
    if (remainder === 0) return quotient;
    // return the sum
    return remainder + sumOfDigitsOfAPositiveInteger(quotient);
};
