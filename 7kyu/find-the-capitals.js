// INSTRUCTIONS:
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function(word) {
    let caps = /[A-Z]/;
    let arr = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i].match(caps)) {
            arr.push(i)
        }
    }
    return arr;
}

console.log(capitals('CodEWaRs')) // [0,3,4,6]