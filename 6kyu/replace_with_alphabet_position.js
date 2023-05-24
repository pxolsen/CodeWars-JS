// INSTRUCTIONS:
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(str) {

    const alpha = "abcdefghijklmnopqrstuvwxyz"
    let arr = str.toLowerCase().split("")
    
    let newStr = arr.map(letter => letter = alpha.indexOf(letter) + 1)

    return newStr.filter(x => x !== 0).join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
// --> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )