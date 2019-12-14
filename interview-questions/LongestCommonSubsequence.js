/** 
 * Write a function that takes 2 strings s1 and s2 and returns the LCS
 *  "ABAZDC", "BACBAD" => "ABAD" 
 *  "AGGTAB", "GXTXAYB" => "GTAB"
 */
// an hour
function longestCommonSub(str1, str2) {
    let sequences = {};

    for (let index = 0; index < str1.length; index++) {
        let index2 = str2.search(str1[index]);
        if (index2 != -1) {
            let sequence = str1[index] + helper(str1.substr(index + 1), str2.substr(index2 + 1));
            sequences[sequence.length] = sequence;
        }
    }

    let maxKey = Math.max(...Object.keys(sequences));

    return sequences[maxKey];

    function helper(str1, str2) {
        if (!str1.length || !str2.length) {
            return "";
        }
        let str2Match = str2.search(str1[0]);
        if (str2Match > -1) {
            return str1[0] + helper(str1.substr(1), str2.substr(str2Match + 1));
        }
        return "" + helper(str1.substr(1), str2.substr(str2Match + 1));
    };

}


console.log(longestCommonSub("ABAZDC", "BACBAD"));