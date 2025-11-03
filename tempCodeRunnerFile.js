
let evenSum = 0;
let oddsum = 0;
for(let i=1; i<=50; i++)
{
  if(i%2===0){
    evenSum += i;
  }
  else{
    oddsum +=i;
  }
  console.log(`sum of even number is ${evenSum}`);
console.log(`sum of odd number is ${oddsum}`);
}
