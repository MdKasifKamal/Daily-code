function abcd(v1, v2 ){
  console.log(v1 + v2);
}
abcd(0,0); // arguments value

// arr spread operator example  
let arr = [1,2,23,34,4]
console.log(...arr)

// IIFE Immediately Invoked Function Expression
( function(){
  let b = 1000;

})(); // this will invoke the function immediately uses for private scope and any one cant see variable b value outside this function


// Hof function example
function hof(func){
  func();
}
hof(() => console.log("Hello from higher order function!"));
// thsi is the example of default parameter value if no argument si not passed so default value will be used
function ab(name =" Kasif"){
  console.log("Hello"+ name);
}
ab();

// this is the example of required parameter 
function abc(name , a){
  console.log("Hello"+ name);
  console.log("value of a is "+ a);
}
abc("mk"); // here a is required parameter but no argument is passed so its value will be undefined

// rest params example with multiple arguments
function sum(...args){
  console.log(args);
}
sum(1,3,4,33,4,45,)

// summing all the arguments using rest parameter
function summ(...numbers) {
    return numbers.reduce((acc , num) => acc+num, 0);
}
console.log(summ(1,2,3,4,5,6,7,8,9,10));

// destructuring assignment in function parameters yaha hum destructuring method se array or object easily nikal skte bina kisi dot or [ ] ke
function display({name , age}){
  console.log(`Hello my name is ${name} and my age is ${age}`)
}
display({name: "Kasif" , age : 24})

//Positional arguments example iska matala ye ki function me jo argument pehle pass hoga wo pehle parameter me jayega 
function abccd(v1, v2 ){
return v1*v2;
}
console.log(abccd(1 , 0))

// spread argument example 
function abbcd(a, b , c ){
  return a+b+c;
}
const nums = [1, 2, 3];
console.log(abbcd(...nums)); // spread operator is used here to spread the array elements as individual arguments

// hoisting

sayhello(); // function call before declaration so function is hoisted is allowed
function sayhello() {
    console.log("Hello, world!");
}

console.log(x); // variable x is hoisted but its value is not assigned yet so it will be undefined
var x = 5;
console.log(x); // now variable x is assigned value 5
 
// function expression hoisting example because function expression is not hoisted so it will give error
av();
var av = function() {
    console.log("This is a function expression.");
}


// nested function or lexical scoping example

 function outer(){
  let outerval = "Kasif";
  function inner() {
    console.log(outerval) // inner function can access outer function variable due to lexical scoping and also accessible due to scope chain
  }
  inner();
 }
 outer();

 // arrow function

 // arrow function also called fat arrow function example with multiple parameters
const greet = (a, b) => a+b;
console.log(greet(2,3));

// arrow function with no parameter with curly braces
const gree = ()=>{
  console.log("hell I am arrow function")
}
 
// arrow function with no parameter without curly braces
const gre = () => console.log("hello I am also arrow function");

// arrow function with single parameter
const greets = name => console.log("Hello " + name);

// arrow function with single parameter with curly braces
const greetss = name => {
  console.log("Hello " + name);
}

// first claass function
// first claass function means it can be treated like any other variable or means value ki tarah treat krta hai

const sayHi = () => console.log("Hi there!");
const run = sayHi; // function ko ek variable me store kiya
run(); // function call via variable

// this first class function stored in variable can be passed as argument to another function
const gret = function(){
  console.log("Hello there!");
}
gret();


// function ko another function me pass krna
function fun(callback){
  callback();
}
fun(() => console.log("Callback function executed!"));


// function ko argument ke taur pe pass krna   also called higher order function and callback function
function abv(val){
  val();
}
abv(function(){
  console.log("Function passed as argument executed!");
});


// anonmymous
// anonmymous function example pass as a argument to another function
settimeout(function(){
  console.log("This is an anonymous function executed after 2 seconds");
}, 2000);

// anonymous function store in variable example
const fun = function () {
  console.log("Hello");
};

fun();

 