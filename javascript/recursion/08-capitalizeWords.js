// capitalizeWords accepts an array of strings
//returns capitalize all characters of every string element
const capitalizeWords = (arr) => {
    if (!Array.isArray(arr)) throw "Error : Invalid argument";
    let capitalizeArray = [];
    if (arr.length == 0) return capitalizeArray;
    const word = `${arr.shift()}`;
    capitalizeArray.push(`${word.toUpperCase()}`);
    return [...capitalizeArray, ...capitalizeWords(arr)];
};
