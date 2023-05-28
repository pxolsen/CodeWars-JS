// INSTRUCTIONS:
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld (dad, son) {
    if (son === 0) return dad;
    if (dad / son === 2) return 0;

    let counter = 0;
    let newDad = dad;
    let newSon = son;

    while (newDad / newSon !== 2 && newSon >= 1) {
        newDad--
        newSon--
        counter++
    }
    if (newSon === 0) {
        newDad = dad;
        newSon = son;
        counter = 0;
        while (newDad / newSon !== 2) {
            newDad++
            newSon++
            counter++
        }
    }
    return counter;
    }
    

console.log(twiceAsOld(36, 7)) // 22
console.log(twiceAsOld(55, 30)) // 5
console.log(twiceAsOld(22, 1)) // 20
console.log(twiceAsOld(29, 0)) // 29