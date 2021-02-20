// A pangram is a sentence that contains every single letter of the alphabet at least once.For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A - Z at least once(case is irrelevant).

// Given a string, detect whether or not it is a pangram.Return True if it is, False if not.Ignore numbers and punctuation.


function isPangram(string) {
    let tempObj = {};
    let tempArr = string.match(/[a-zA-Z]/g).join('').toLowerCase().split('');
    tempArr.forEach(el => tempObj[el] = 1);
    return Object.keys(tempObj).length === 26 ? true : false;
}
console.log(isPangram('The qux jumsvad.nsfvmnlou408374283orufv w 08sou0 $#4 3 23 ps over the lazy dog'))



// var string = "The quick brown fox jumps over the lazy dog."
// Test.assertEquals(isPangram(string), true)
// var string = "This is not a pangram."
// Test.assertEquals(isPangram(string), false)
