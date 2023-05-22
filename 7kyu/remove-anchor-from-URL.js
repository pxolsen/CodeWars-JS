// INSTRUCTIONS:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// EXAMPLES:
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// CODE:

function removeUrlAnchor(url) {
    if (url.indexOf("#") === -1) return url;
    return url.substring(0, url.indexOf("#"))
}

console.log(removeUrlAnchor("www.codewars.com#about"))
console.log(removeUrlAnchor("www.codewars.com?page=1"))