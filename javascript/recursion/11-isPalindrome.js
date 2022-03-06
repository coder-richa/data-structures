// isPalindrome accepts a string and return true if its reverse is equal to original string
const isPalindrome = (str) => {
    // check for string type
    if (typeof str != "string") throw "Invalid argument";
    // get string size
    let size = str.length;
    str = str.toLowerCase();
    // return true if size less than 2 characters
    if (size < 2) return true;
    // retrive first and last character
    let first = str[0];
    let last = str[size - 1];
    // return palindrome status
    return first === last && isPalindrome(str.slice(1, size - 1));
};
