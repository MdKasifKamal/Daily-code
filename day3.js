  for(let i = 1; i <= 5; i++) {
    console.log(i);
}
// print even mumber type 1
 for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
   }
// print even mumber type 2
for(let i = 2; i <= 10; i+=2) {
   
       console.log(i);
    
   }

 // print reverse number
  for(let i = 10; i >= 1; i--) {
     console.log(i);
 }

// print even odd
 for(let i = 1; i <= 10; i++) {
     if(i % 2 === 0) {
        console.log(i + " is even number");
     } else {
       console.log(i + " is odd number");
   }
 }

 // take input from user and print
 let num = Number(prompt("Enter a number: "));
 if(num>=0){
     console.log(num + " is positive number");
 }
 else{
     console.log(num + " is negative number");
 }

// print vote age

let age = prompt("Enter your age: ");

if(age=== null){
  console.error("you cancelled the prompt");
}
else {if(age.trim()===""){
    console.log("you did not enter any value"); 
}
else{
   age = Number(age.trim());
   if(isNaN(age)){
    console.log("Invalid input. Please enter a numeric value for age.");
   }
    else{  
        console.log("confirm it is a number");
}
}
}