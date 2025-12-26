// function without parameters and arguments example printing a message
function sayhello() {
  console.log("Hello Kasif")
}
sayhello();

// function with parameters and arguments example adding two numbers
function add(a , b){
  return a+b;
}
console.log(add(2 , 3));

// function with parameters example here dont give any so ans is hi undefined 
function sayhi(name){
  console.log(`Hi ${name}`)
}
sayhi();

// function with default parameters here set the default value is Kasif if no argument is given so ans automatically Kasif
function sayh(name ="Kasif"){
  console.log(`Hi ${name}`)
}
sayh();
 
// function with parameters example here i give some argument so ans is hi kasif
function sayhi(name){
  console.log(`Hi ${name}`)
}
sayhi("Kasif");

// add num using rest  parameters with forEach loop
function addnum(...nums){
  let sum = 0;
  nums.forEach(function(num){
    sum += num;
  })
  console.log(sum);
  
}
addnum(1,2,3,4,5);

// add num using rest parameters with for loop
function addnus(...nus){
  let sum = 0;
  for(let i=0; i<nus.length; i++){
    sum += nus[i]
  }
  console.log(sum);
}
addnus(1,2,3,4,5,6,7,8,9,10);