// powerOfANumber accepts a number and exponential value
// returns number raise to power exp
const powerOfANumber = (num, exp = 1) => {
    // check for integer value
    if (Number.parseInt(exp) != exp)
        throw "Power of a number is not supported for non-integral numbers";

    // reciprocate number in case of -ve exp
    if (exp < 0) {
        num = 1 / num;
        exp = -exp;
    }
    // check if exp is 0
    if (exp == 0) return 1;
    return num * powerOfANumber(num, exp - 1);
};
