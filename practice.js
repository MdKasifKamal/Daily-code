// for(let i=1; i<=50; i++){
//   if(i%2===0){
//     console.log(`${i} is an even number`);
//   }
//   else{
//     console.log(`${i} is an odd number`)
//   }
// }

// let age = prompt("enter your age");
// if(age === null){
//   console.log("you cancelled the prompt")
// }
// else if(age.trim() === ""){
//   console.log("you did not enter any value")
// }
// else if(isNaN(age.trimEnd())){
//   ("invalid input")
// }
// else{
//   console.log("it is a number")
// }

// for(let i =100; i>0; i--){
//   console.log(i);
// }

// print a sum of number
// let sum=0;
// for(let i=0; i<=10; i++){
//   sum+=i;
//   console.log(sum);
// }

//print multipliction 5 table
// let t = 5;
// for(let i =1; i<=10; i++){
//   console.log(`${t}*${i}=${t*i}`)
// }

// let r = 9;
// for(let i=1; i<=10; i++){
//   console.log(`${r}*${i}=${r*i}`)
// }

// print subtraction table of 10
// let sub =10;
// for(let i=0; i<=10; i++){
//   sub -= i;
//   console.log(`${sub} - ${i} = ${sub - i}`);
// }
// console.log(sub);

//print divisible of 3 & 5 between 1 to 50
// for(let i=1; i<=50; i++){
//   if(i%3===0 && i%5===0)
//   console.log(i);
// }

// prit a factrial number
// let num =5;
// let fact =1;
// for(let i=1; i<=num; i++){
//   fact *= i;
//   console.log(`fa of ${num} is ${fact}`);
// }
// console.log(`factorial of ${num} is ${fact}`);

// print even and sum sepaately
// let evenSum = 0;
// let oddsum = 0;
// for(let i=1; i<=5; i++)
// {
//   if(i%2===0){
//     evenSum += i;
//   }
//   else{
//     oddsum +=i;
//   }
//   console.log(`sum of even number is ${evenSum}`);
// console.log(`sum of odd number is ${oddsum}`);
// }

//print number of square between 1 to 10

// for(let i=1; i<=10; i++){
//   console.log(`square of number ${i}^2=${i*i}`)
// }

// print sum of number

// let sum = 0;
// for(let i=1; i<=100; i++){
//     sum += i;

// }
//     console.log(`sum of number is ${sum}`);

// print multiplication table of 7
// let t = 7;
// for(let i=1; i<=10; i++ ){
//   console.log(`${t}*${i} = ${t*i}`)
// }

// print number divisible by 4 and 7 between 1 to 30
// for(let i=1; i<=30; i++){
//   if(i%4===0 && i%7===0){
//     console.log(i)
//   }
// }

// print prime number between 1 to 50
for(let i = 2; i <= 50; i++) {
  let isPrime = true;

  for(let j = 2; j <= Math.sqrt(i); j++) {
    if(i % j === 0) {
      isPrime = false;  // not a prime number
      break;
    }
  }

  if(isPrime) {
    console.log(i);  // print prime number
  }
}

// print fabonacci series
let n1=0, n2 =1;
console.log("fabonacci series:");
for(let i=1; i<=10; i++){
  console.log(n1);
  let nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}