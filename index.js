// You need to fork this repl.it and then will turn in the link in your browser as your homework assignment once you are done answering the following questions.

//TESTING you should be able to test your answers by clicking into Shell on the right and typing 'npm test'.

//DEBUGGING type console.log('any string here', varName) to console log values to see your answers before you run test.


// QUESTION 1. Write a standard function definition that takes 1 parameter of data type number and prints out the string, "Happy Birthday!", to the console the same number of times as the parameter. (Each console message should be in a new line)

// function happyBirthday(num) {
//   let counter = 0;
//   while(counter < num){
//     counter++
// console.log("Happy Birthday!")
//   }
// } 
// happyBirthday(3)

// // }
 function happyBirthday(num){
for (let i=0;i<num;i++){
console.log("Happy Birthday!")
}
 }
happyBirthday(5)

// QUESTION 2. Write a standard function definition that takes 1 parameter. The parameter is an array of numbers and the function should return the sum of those numbers.

function sum(add) {
  // add=[2,3,4,5]
  let addition=0;
  for (let i=0;i< add.length;i++){
    addition=addition + add[i];
    console.log(addition)
  
  }
  return addition;

}
//sum()



// QUESTION 3. Write a standard function definition that takes 1 parameter. The parameter is an array of numbers and the function should return the product of those numbers.

function product(mult) {
  //mult=[2,3,4]
  multiply=1;
  for(i=0;i < mult.length;i++){
    multiply=multiply * mult[i]
    console.log(multiply)
  }
return multiply
}
//product()

// QUESTION 4. Write a function definition that takes 1 parameter. The parameter is an array of numbers and the function should return the number of odd numbers in the array. 

const oddChecker = (odd) => {
 let count=0;

  for(i = 0; i < odd.length;i ++){
    if(odd[i] % 2 !==0){
      count++
   
    }
  }
  return count
  
}
console.log('odd',oddChecker([1,2,5]));
// QUESTION 5. Write a function definition that takes 1 parameter. The parameter is an array of numbers and the function should return the number of even numbers in the array. 

const evenChecker = (even) => {
 let count = 0;
  for(let i = 0;i < even.length; i++){
    if(even[i] %2 === 0){
      count ++;
      
    }
  }
    return count
  
}
console.log('even',evenChecker([2,5,8,4,9,10,40]))
//console.log(evenChecker([2,5,8,4]))
// const evenChecker=(even)=> { 
// let counter = 0;
//   for (var i = 0; i < even.length; i++) {
//     if (even[i] % 2 === 0) {
//       counter++;
//     } 
//   }
//     return counter;
  
// }
// QUESTION 6. Write a function definition that takes 1 parameter. The parameter is a string and the function should return the number of vowels in the string. 
// vowels=['a','e','i','o','u']
// const vowelsChecker = (vowel) => {
//  let count = 0;
//  let str;
//  for (i=0; i<vowels.length;i++){
//    if(vowels[i]===str){
//      count ++
//    }
  
//  }
// return count
// }


const vowelsChecker=(str1)=>
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log('vowel',vowelsChecker("ElsabethKidane"));


// QUESTION 7. Back in the old days, the early 2000s, this was a famous technical interview question. Write a function definition that takes no parameters. The function will loop from 1 to 10 and return an array of numbers. While looping,the function will check if the current value in the loop is divisible by 3, 5, or by both. If the current value in the loop is divisible by 3, the function will add the string "Fizz" to an array. If the current value in the loop is divisible by 5, the function will add the string "Buzz" to the array. If the current value in the loop is divisible by both, the function will add the value "FizzBuzz" to the array. The function will return the array of values.
  let array=[];
const fizzBuzz = () => {
for (let i=1; i<=10;i++){
if(i % 3 === 0){
  array[i-1]= "Fizz"
  //console.log(array[i])
} 
else if(i % 5 ===0){
  array[i-1]="Buzz"
  //console.log(array[i])
}
else if(i % 3 === 0 && i % 5===0) {
  array[i-1]="FizzBuzz"
 
  //console.log(array[i])
}
else{
  array[i-1]=i;
  //console.log(i)
   //console.log(array[i-1])
}

}
return array
}
fizzBuzz()


module.exports = {
  happyBirthday, sum, product, oddChecker, evenChecker, vowelsChecker, fizzBuzz
}