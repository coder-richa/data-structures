/*****************************************
 *  Test Factorial function starts
 */
console.log("Factorial of 5:", factorial(5));
try {
    console.log("Factorial of -1:", factorial(-1));
} catch (err) {
    console.warn(err);
}
console.log("Factorial of 0:", factorial(0));
/*****************************************
 *  Test Factorial function ends
 */

/*****************************************
 *  Test Fabonacci Series function starts
 */
series = [];
for (let i = 0; i < 15; i++) series.push(fabonacciSeries(i));
console.log(...series);
/*****************************************
 *  Test Fabonacci Series ends
 */

/*****************************************
 *  Test sum of digits function starts
 */
console.log("Sum of digits of 508:", sumOfDigitsOfAPositiveInteger(508));
try {
    console.log("Sum of digits of -50:", sumOfDigitsOfAPositiveInteger(-50));
} catch (err) {
    console.warn(err);
}
console.log("Sum of digits of 111", sumOfDigitsOfAPositiveInteger(111));
/*****************************************
 *  Test sum of digits function ends
 */

/*****************************************
 *  Test power function starts
 */
console.log("Power  of num = 2 exp = 3: ", powerOfANumber(2, 3));
try {
    console.log("Power  of num = 2 exp = 3.5: ", powerOfANumber(2, 3.5));
} catch (err) {
    console.warn(err);
}
console.log("Power  of num = 2 exp = -3: ", powerOfANumber(2, -3));
/*****************************************
 *  Test power function ends
 */

/*****************************************
 *  Test decimal to binary function starts
 */
console.log("Binary equivalent of 10: ", decimalToBinary(10));
try {
    console.log("Binary equivalent of -10: ", decimalToBinary(-10));
} catch (err) {
    console.warn(err);
}
console.log("Binary equivalent of 5: ", decimalToBinary(5));
/*****************************************
 *  Test decimal to binary function ends
 */
/*****************************************
 *  Test product of an array function starts
 */
console.log("Product of [10,20,30]: ", productOfArray([10, 20, 30]));
try {
    console.log(`Product of [10,20,"30"]`, productOfArray([10, 20, "30"]));
} catch (err) {
    console.warn(err);
}
console.log(" Product of [10,20,-10]: ", productOfArray([10, 20, -10]));
/*****************************************
 *  Test product of an array function ends
 */

/*****************************************
 *  Test capitalize first characters of all elements of an array function starts
 */
console.log(
    `capitalizeFirst(['john','peter','pear','ram'])`,
    capitalizeFirst(["john", "peter", "pear", "ram"])
);
try {
    console.log(`capitalizeFirst()`, capitalizeFirst());
} catch (err) {
    console.warn(err);
}
console.log(
    `capitalizeFirst(['this is a sentence.','testing strings','pear','ram'])`,
    capitalizeFirst(["this is a sentence.", "testing strings", "pear", "ram"])
);
/*****************************************
 *  Test capitalize first characters of all elements of an array function ends
 */
/*****************************************
 *  Test capitalize all characters of all elements of an array function starts
 */
console.log(
    `capitalizeWords(['john','peter','pear','ram'])`,
    capitalizeWords(["john", "peter", "pear", "ram"])
);
try {
    console.log(`capitalizeWords()`, capitalizeWords());
} catch (err) {
    console.warn(err);
}
console.log(
    `capitalizeWords(['this is a sentence.','testing strings','pear','ram'])`,
    capitalizeWords(["this is a sentence.", "testing strings", "pear", "ram"])
);
/*****************************************
 *  Test capitalize all characters of all elements of an array function ends
 */

/*****************************************
 *  Test sum of all even numbers of an object function starts
 */
let obj = {
    key1: 123,
    key2: 10,
    innerObj: {
        odd: 1,
        even: 20,
        anotherObj: {
            odd: 3,
            even: 30
        }
    },
    anotherObj: {
        even: 40
    }
};
console.log(
    `nestedEvenSum({
    key1: 123,
    key2: 10,
    innerObj: {
        odd: 1,
        even: 20,
        anotherObj: {
            odd: 3,
            even: 30
        }
    },
    anotherObj: {
        even: 40
    }
})`,
    nestedEvenSum(obj)
);
try {
    console.log(`nestedEvenSum()`, nestedEvenSum());
} catch (err) {
    console.warn(err);
}
console.log(
    `nestedEvenSum({a:1,b:2,c:[10,20]})`,
    nestedEvenSum({ a: 1, b: 2, c: [10, 20] })
);
/*****************************************
 *  Test sum of all even numbers of an object function ends
 */

/*****************************************
 *  Test reverse of a number function starts
 */
console.log("Reverse of 508:", reverseOfANumber(508));
try {
    console.log("Reverse of -50:", reverseOfANumber(-50));
} catch (err) {
    console.warn(err);
}
console.log("Reverse of of 111:", reverseOfANumber(111));
/*****************************************
 *  Test reverse of a number function ends
 */
/*****************************************
 *  Test isPalindrome function starts
 */
console.log("Palindrome of 508:", isPalindrome(`508`));
try {
    console.log("Palindrome of -50:", isPalindrome(-50));
} catch (err) {
    console.warn(err);
}
console.log("Palindrome of of 111:", isPalindrome(`111`));
/*****************************************
 *  Test isPalindrome function ends
 */

/*****************************************
 *  Test stringyfyNumbers of an object function starts
 */

console.log(
    `stringyfyNumbers({
    key1: 123,
    key2: 10,
    innerObj: {
        odd: 1,
        even: 20,
        anotherObj: {
            odd: 3,
            even: 30
        }
    },
    anotherObj: {
        even: 40
    }
})`,
    stringyfyNumbers(obj)
);
try {
    console.log(`stringyfyNumbers()`, stringyfyNumbers());
} catch (err) {
    console.warn(err);
}
console.log(
    `stringyfyNumbers({a:1,b:2,c:[10,20]})`,
    stringyfyNumbers({ a: 1, b: 2, c: [10, 20] })
);
/*****************************************
 *  Test stringyfyNumbers an object function ends
 */
