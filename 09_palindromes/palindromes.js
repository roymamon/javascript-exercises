const palindromes = function (str) {

    const filteredStr = str
    .split("") // Split into an array of characters
    .filter((char) => /[a-zA-Z0-9]/.test(char))
    .join("") // Join it back into a string
    .toLowerCase();
   /* for(let i = 0, j = filteredStr.length - 1 ; i<j ; i++,j--) {
        if (filteredStr[i] !== filteredStr[j]) {return false;}
    }
    return true;*/
    const reversedString = filteredStr.split("").reverse().join(""); // Reverse the string
    return filteredStr === reversedString;


};

// Do not edit below this line
module.exports = palindromes;
