const repeatString = function(str, times) {
    if (times < 0) { return "ERROR"}
     let res = "";
     for(let i = 1 ; i <= times ; i++){
        res = res + str;
     }
     return res;
};

// Do not edit below this line
module.exports = repeatString;
