var string1 = "abc";
var string2 = "abc";

console.log(string1 === string2);

var string3 = "ABC";

console.log(string3 === string2);
console.log(string1.toLowerCase() === string3.toLowerCase()); //Turning string 3 to lowercase

var string4 = "bcd";

console.log(string1 < string4);