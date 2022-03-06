// productOfArray accepts an array and returns product of array values
const productOfArray = (arr) => {
    if (!Array.isArray(arr)) throw "Error : Invalid argument";
    if (arr.length == 0) return 1;
    const elem = arr.shift();

    if (!Number.isFinite(elem)) throw "Error : Non-numeric value encountered";
    return elem * productOfArray(arr);
};
