// Write a function toWeirdCase(weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased.The indexing just explained is zero based, so the zero - ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' ').Spaces will only be present if there are multiple words.Words will be separated by a single space(' ').

//     Examples:
// toWeirdCase("String");//=> returns "StRiNg"
// toWeirdCase("Weird string case");//=> returns "WeIrD StRiNg CaSe"

// Unhandled rejection TestError: Expected: 'ThIs Is A TeSt', instead got: 'ThIs Is A tEsT'

function toWeirdCase(string) {
    //TODO
    let arr = string.match(/[a-zA-Z ]/g);
    let temp = 0;
    return arr.map((el, i) => {
        if (el === ' ') {
            temp = i + 1;
            return ' ';
        }
        return (i - temp) % 2 == 0 ? el.toUpperCase() : el.toLowerCase();
    }).join('');

}
console.log(toWeirdCase('this is a test this is a te st'));