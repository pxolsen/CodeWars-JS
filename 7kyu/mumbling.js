// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    s = s.toLowerCase();
    let newStr = "";
    for (let i =0; i < s.length; i++) {
        instances = i + 1;
        newStr += s[i].toUpperCase()
        instances--
        while (instances !== 0) {
            newStr += s[i];
            instances--
        }
        if (i !== s.length-1) newStr += "-";
    }
    return newStr
}

console.log(accum("abcd")) // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")) // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")) // "C-Ww-Aaa-Tttt"


// BETTER SOLUTION:
// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }