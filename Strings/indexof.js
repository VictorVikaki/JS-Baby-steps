var myString = 'I\'m a "fun Victor" string'; //The backslash is not included

console.log(myString.indexOf("string"));
console.log(myString.indexOf("Victor"));

if (myString.indexOf("Victor") === -1){

    console.log("the word 'Victor' is not in the string");

} else{
        console.log("the word 'Victor' starts at position " +
    myString.indexOf("Victor"));
    
}