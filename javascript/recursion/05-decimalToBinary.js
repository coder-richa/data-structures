// decimalToBinary accepts a positive integral value and returns its binary equivalent
const decimalToBinary = (num, base = 2) => {
    // check if num is negative
    if (num < 0)
        throw "Binary conversion is not supported for negative numbers";
    // check for integer value
    if (Number.parseInt(num) != num)
        throw "Binary conversion is not supported for non-integral numbers";
    // return empty when num is 0
    if (num === 0) return ``;
    // calculate the remainder
    const remainder = num % base;
    // calculate the quotient
    quotient = Number.parseInt(num / base);
    // return the sum
    return `${decimalToBinary(quotient)}`.concat(`${remainder}`);
};
