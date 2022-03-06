// reverseOfANumber accepts a number and return its reverse
const reverseOfANumber = (num) => {
    let reverse = "";
    // check for integer value
    if (Number.parseInt(num) != num)
        throw "Reverse of a number is not supported for non-integral numbers";
    // check if num is negative
    if (num < 0)
        throw "Reverse of a number is not supported for negative integral numbers";
    // return reverse
    if (num == 0) return reverse;

    // calculate the remainder
    const remainder = num % 10;
    // calculate the quotient
    const quotient = Number.parseInt(num / 10);
    // append remainder to the reverse string
    reverse += remainder;
    // Return reverse
    return reverse + reverseOfANumber(quotient);
};
