// INSTRUCTIONS:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove (str) {
    return str[str.length-1] === '!' ? str.substring(0, str.length-1) : str
}

console.log(remove("Hi!")) // "Hi"