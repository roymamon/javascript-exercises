const removeFromArray = function() {
    const args = Array.from(arguments); // Convert arguments to an array
    let res = args[0];
    for (i = 0 ; i <= res.length-1 ; i++){
        for (j = 1 ; j <= args.length-1 ; j++){
            if(res[i] === args[j]) {
                res.splice(i,1);
                i--;
            }
        }
    }
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
