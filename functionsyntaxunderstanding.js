// function str() function create and named
function str(){
  console.log("Hello World"); 
}
str(); // function call

// function with parameter and argument
// function add(v1 , v2) here v1 and v2 are parameters
function add(v1 , v2){
  console.log(`the sum of v1 and v2 is ${v1 + v2}`)
}
add(20); // function call with argument here 20 is argument for v1 and v2 is undefined so ans is NaN
add(20,30); // function call with argument here 20 is argument for v1 and 30 is argument for v2 so ans is 50

 // function with return value
function aabcd(){
  return 12;
}
let vaal = aabcd(); // function call
console.log(vaal); // print the return value of function

function abcd(v){
  return 12+v;
}
let val = abcd(13); // function call
console.log(val);

// // function expression let ab = function xyz() here store a function in a variable cannot be hoisted(cant call before they re defined)
 let ab = function xyz(){
   console.log("function expression");
 }
 ab(); // function call


// fat arrow or arrow function
let aab = (v1 , v2) => {
  console.log(v1 + v2);
}
aab(10,20); // function call

let multi = (a,b) =>{
    return a*b;
}
console.log(multi(4,5));

let strr = (b) => {
  console.log(b);
}
strr("arrow function"); // function call

// default parameter value in function
function addd(v1, v2){
  console.log(v1 + v2);
 }
 addd(); // NaN because both v1 and v2 are undefined  here no default value
 addd(10); // NaN because v2 is undefined here no default value
  addd(10,20); // 30 because both v1 and v2 are defined here no default value

  function aaddd(v1 = 1, v2 =10){
  console.log(v1 + v2);
 }
  aaddd(); // 11 because both v1 and v2 take default value
  
function aaddd(v1=2, v2){ 
  console.log(v1 + v2);
 }

aaddd(); // NaN because v2 is undefined and v1 take default value 2
aaddd(5); // 7 because v1 take 5 and v2 is undefined


// // rest parameter in function
function num(...value){
  console.log(value);
}
num(1,1,2,3,4,5,4,43,24,43) // here value is an array [1,1,2,3,4,5,4,43,24,43]

// rest parameter with normal parameter
function numm(a,b,c, ...valu){
  console.log(a,b,c, valu);
}
numm(1,2,3,4,5,6,7,8,9,909,393,3,33,34); // here a=1,b=2,c=3 and valu=[4,5,6,7,8,9]

function sayhi(name ="Kasif"){
  console.log("Hi"+ " " +name)
}
sayhi(); 


function abccd(a,b, ...val){
  console.log(a,b, val)
}
abccd(1,2,3,4,5,6,7,8,9); // here a=1,b=2 and val=[3,4,5,6,7,8,9]