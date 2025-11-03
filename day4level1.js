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