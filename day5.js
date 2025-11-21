// //print the sum
// let sum = 0;
// for(let i = 1; i <31; i++){
//   if(i % 2 === 0){
//     sum += i;
//   }
// }
// console.log(`the sum of even numbers between 1 to 31 is ${sum}`);

// let i = 1 ;
// while(i<20){
//   if(i%2!==0){
//     console.log(i);
//   }
// i++;
// }

// let val = +prompt("enter a number");
// for(let i = 1; i <=val; i++){
//   if(i % 2 === 0){
//     console.log(`${i}even`);
//   }
//   else{
//     console.log(`${i}odd`);
//   }
// }

// Type of recursion
// function abcd(){
//   console.log("function called");
//   abcd();
// }
// abcd();

function abcd(n){
  if(n===0) return; // base case or condition to stop recursion
  console.log(n); // print number before recursive call (head recursion)
  abcd(n-1);  // recursive call
}
abcd(5);

let balance = 1000;
let flag = false;
let counter = 0;
while(balance > 0 && counter !== 3){
  let withdraw = +prompt("enter amount to withdraw");
  counter++;
  if(withdraw <= balance)
    balance -= withdraw;
  else{ 
    flag = true;
    break;  
  }
}
if(flag === true  ){
  console.log("insufficient balance");
} 
else{
  console.log("transaction successful");
}


