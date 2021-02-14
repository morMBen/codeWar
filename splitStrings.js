// Complete the solution so that it splits the string into pairs of two characters.If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

//     Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']
// splitStrings = (string) => {
//     let tempArr = [];
//     for (let i = 0, n = 0; i < Math.floor(string.length / 2); i++, n = n + 2) {
//         tempArr[i] = string.slice(n, n + 2);
//     }
//     string.length % 2 > 0 ? tempArr.push(string.slice(string.length - 1, string.length) + '_') : null;
//     console.log(string);
//     return tempArr;
// }
splitStrings = (string) => {
    let tempArr = [];
    for (let i = 0, n = 0; i < Math.floor(string.length / 2); i++, n = n + 2) {
        tempArr[i] = string.slice(n, n + 2);
    }
    string.length % 2 > 0 ? tempArr.push(string.slice(string.length - 1, string.length) + '_') : null;
    console.log(string);
    return tempArr;
}

console.log(splitStrings('motinoa'));
