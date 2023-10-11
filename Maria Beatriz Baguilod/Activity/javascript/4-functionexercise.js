function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1); // charAt to get the letter at a specific position (0 - first letter); toUpperCase is to capitalize; str.slice(1) to include letters following the first letter
}

console.log(capitalize('eggplant'));
console.log(capitalize('pamplemousse'));
console.log(capitalize('squid'));