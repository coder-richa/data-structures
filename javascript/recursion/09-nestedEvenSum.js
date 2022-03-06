// nestedEvenSum accepts an aobject
//returns sum of all even number values in keys of objects and nested objects
const isObject = (obj) =>
    typeof obj === "object" && !Array.isArray(obj) && obj !== null;
const nestedEvenSum = (obj) => {
    if (!isObject(obj)) throw "Error : Invalid argument";
    let sum = 0;
    for (let [key, value] of Object.entries(obj)) {
        if (typeof value === "number" && isFinite(value) && value % 2 == 0) {
            sum += value;
        } else if (isObject(value)) {
            sum += nestedEvenSum(value);
        }
    }
    return sum;
};
