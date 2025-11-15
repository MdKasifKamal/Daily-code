//enter your age
let age = promt("enter your age");
if(age === null){
  console.error("you cancelled the prompt")
} 
else { if (age.trim() === ""){
  console.error("you did not enter any value")
} 
else {
age = Number(age);
if(isNaN(age)) {
  console.error("invalid input please enter a number");
}
else { 
  if(age < 0)
    console.error("age cannot be negative");
  else if(age > 18)
  console.log("you are eligible to vote");
  else 
    console.log("you are not eligible to vote");
}

}
}

// for loop to print multiplication table with variable
let t = 5;
for(let i = 1; i <= 10; i++){
  console.log(`${t} x ${i} = ${t*i}`);
}

// multiplication table of 5 and 39 without variable
for(let i = 1; i <= 10; i++){
  console.log(`5 x ${i} = ${5*i}`);
}

for(let i = 1; i<=10; i++){
  console.log(`39 x ${i} = ${39*i}`);
}

// count numbers greater than 8 between 1 to 15
let count =0;
for(let i = 1; i <16; i++){
  if(i>8){
    count++;
    console.log(i);
  }
}
console.log(`numbers greater than 8 are ${count}`);

// password check
let password = "kasif123";
let pass = prompt("enter your password");
if(pass === null){
  console.error("you cancelled the prompt");
}
else{
  if(pass === password){
    console.log("login successful");
}
  else{
    console.error("invalid password");
  }
}

// print password until user enters "stop"
let passs = prompt("enter your password");
while(passs !=="stop"){
  console.log(passs);
  passs = prompt("enter your password");
}


//   enter paassword max 3 times
let attempts = 0;
let opened = false;
let paass = "kasif123";
let passsword = prompt("enter your password");
attempts++;
if(passsword === paass) opened = true;
while(passsword !== paass ){
  if(attempts >= 3){
    console.error("too many failed attempts. try again later.");
    break;
  }
  passsword = prompt("enter your password");
  if(passsword === paass) opened === true;

  attempts++;
}
if(opened === true)
console.log("login successful");

//print your age and check voting eligibility
let agee = prompt("Enter your age:");

if (agee === null) {
  console.error("You cancelled the prompt");
} 
else if (agee.trim() === "") {
  console.error("You did not enter any value");
} 
else {
  agee = Number(agee.trim());
  
  if (isNaN(agee)) {
    console.error("Invalid input. Please enter a number.");
  } 
  else if (agee < 0) {
    console.error("Age cannot be negative");
  } 
  else if (agee >= 18) {
    console.log("You are eligible to vote");
  } 
  else {
    console.log("You are not eligible to vote");
  }
}
