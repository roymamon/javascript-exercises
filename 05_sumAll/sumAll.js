const sumAll = function(posInt1, posInt2) {
        if(Number.isInteger(posInt1)
            && Number.isInteger(posInt2)
            && posInt1 >= 0 && posInt2 >= 0) {
                let min = Math.min(posInt1, posInt2);
                let max = Math.max(posInt1, posInt2);
                let res = 0;
                for (i = min ; i <= max ; i++) {
                    res += i;
                }
                return res;
            }
            return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
