// stringifyNumbers accepts an object and converts all number type values to string

const stringyfyNumbers = (obj) => {
    if (!isObject(obj)) throw "Error : Invalid argument";
    for (let [key, value] of Object.entries(obj)) {
        if (typeof value === "number") {
            obj[key] = `${value}`;
        } else if (isObject(value)) {
            stringyfyNumbers(value);
        }
    }
    return obj;
};
