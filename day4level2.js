// let passs = prompt("enter your password");
// while(passs !=="stop"){
//   console.log(passs);
//   passs = prompt("enter your password");
// }


// //  enter paassword max 3 times
// let attempts = 0;
// let opened = false;
// let pass = "kasif123";
// let password = prompt("enter your password");
// attempts++;
// if(password === pass) opened = true;
// while(password !== pass ){
//   if(attempts >= 3){
//     console.error("too many failed attempts. try again later.");
//     break;
//   }
//   password = prompt("enter your password");
//   if(password === pass) opened = true;

//   attempts++;
// }
// if(opened= true)
// console.log("login successful");

//enter your age
let age = prompt("Enter your age:");

if (age === null) {
  console.error("You cancelled the prompt");
} 
else if (age.trim() === "") {
  console.error("You did not enter any value");
} 
else {
  age = Number(age.trim());
  
  if (isNaN(age)) {
    console.error("Invalid input. Please enter a number.");
  } 
  else if (age < 0) {
    console.error("Age cannot be negative");
  } 
  else if (age >= 18) {
    console.log("You are eligible to vote");
  } 
  else {
    console.log("You are not eligible to vote");
  }
}
