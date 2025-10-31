console.log("Hello Kasif");
console.info("Welcome to JavaScript programming"); //info me ikha hua me i ka sign aa jata hai
console.warn("I warn you"); // yellow color me warning dikhata hai
console.error(" error in javascript");// red color me error dikhata hai
console.table({name: "Kasif", age: 25, country: "India"}); // table format me dikhata hai

// `` tempelate string
let name = "Kasif";
let age = 25;
const country = "India";
console.log(`My name is ${name}, I am ${age} years old and I live in ${country}`);
// split() is to broken string into array
let word = "JavaScript";
console.log(word.split(''));
// split by space
let phrase = "I love programming";
console.log(phrase.split(' '));
// split by word
let sentence = "JavaScript ias fan";
console.log(sentence.split('a'));

// replace() method
let text = "I love html";
console.log(text.replace("html", "JavaScript"));
//replace by word
let statement = "JavaScript ias fun";
console.log(statement.replace("a", "wer"));
////replace all word
let stat = "JavaScript ias fun";
console.log(stat.replaceAll("a", "wer"));
// includes() method if you check a word is present in string or not
let msg = "JavaScript is fun";
console.log(msg.includes("fun"));
console.log(msg.includes("Kasif"));