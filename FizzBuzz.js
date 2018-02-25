/*Chapter 2 Exercise
Print a list of numbers from 1 to 100. For numbers that have a lowest common denomenator of 3, print the word  Fizz. 
For numbers that have a lowest common denomenator of 5, print the word Buzz. 
For numbers that have a lowest common multiple of both 3 and 5, print FizzBuzz.
*/

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
};