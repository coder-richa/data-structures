// capitalizeFirst accepts an array of strings
//returns capitalize first character of every string element
const capitalizeFirst = (arr) => {
    if (!Array.isArray(arr)) throw "Error : Invalid argument";
    let capitalizeArray = [];
    if (arr.length == 0) return capitalizeArray;
    const word = `${arr.shift()}`;
    capitalizeArray.push(`${word[0].toUpperCase().concat(word.slice(1))}`);
    return [...capitalizeArray, ...capitalizeFirst(arr)];
};
