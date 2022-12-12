// //# JS-exercises
// // Week 1 - Variables

// // In the following exercises, you will need to place your code or answer underneath each
// // exercise prompt.

// // First try answering these without using references or looking up any information.
// // Then, check your answer by using references and/or running your code.
// // You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// // Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// // But make sure you understand why the correct answer is right.

// // Data Types and Variables

// // Exercise 1. Simply declare a variable named 'emptyVariable'

var emptyVariable; 

// // Exercise 2. Declare a variable called 'myName'
var myName; 


// // Exercise 3. Assign your name as the value for 'myName'
var myName = "Raquel"; 
console.log(myName) //checking the output 

// // // Exercise 4. Declare a variable called dreamDestination and give it the value
// // // of what your dream vacation destination is.

var dreamDestination = "Italy";
// console.log(dreamDestination); 


// // Exercise 5. Make the following variables and assignments
// // - a variable called num1 with a value greater than 1 and less than 10
// // - a variable called num2 with a value of greater than or equal to 1 and less
// // than or equal to 10

var num1 = 2;
var num2 = 10; 

// // Exercise 6. Write a comment below explaining the difference between the rules
// // for num1 and num2 from Exercise 5. What numbers would be valid values for
// // num2 but not num1?
// //Answer:
// // The difference between the rules for num1 and num2 is that a valid number for num1 would 
// // have to fall in between 1 and 10 exclusive. This means that the number cannot be 1 (because the value must be greater than 1)
// // and the number cannot be 10 (the value must be less than 10). On the other hand, with num2, the value of the number can greater
// // than or equal to 1 inclusive and less than or equal to 10 inclusive. In other words, the valid numbers for num2 could be 
// //1,2,3,4,5,6,7,8,9,10 whereas for num1 we would only have 2-9 as valid numbers.
// // The biggest difference is that num1 is using < and > operator while num2 is using the <= and => operators. 

// // Exercise 7. Now we will try some addition.
// // a. Assign the the values of 4 and 6 to num1 and num2, respectively.
// // b. Make a new variable called 'theSum', and use 'num1' and
// // 'num2' to assign its value using the "+" operator.
num1 = 4;         //updating the values of the numbers 
num2 = 6;
var theSum = num1 + num2; // adding the values of num1 + num2 (4 and 6) 
console.log(theSum); // checking output should be 10

// // Exercise 8. Now we will try some multiplication.
// // Make a new variable called 'theProduct', multiply num1 and num2 and assign
// // the resulting value to 'theProduct'.

var theProduct; 
theProduct = num1 * num2; // num1 from above is 6, and num2 from above is 4 --> 24 output
console.log(theProduct); //checking output

// // Exercise 9.
// // Make a new variable called 'statement' and using 'myName' and
// // 'dreamDestination' and the concatenation method of your choice, make the
// // value of statement to be:
// // "Hi, my name is <your name>, and I can't wait to visit <your destination>!"

var statement;
statement = "Hi, my name is " +myName + ", and I can't wait to visit " + dreamDestination +"!";  
console.log(statement);


// // *NOTE* For the following exercises, put your answers in the line below
// // the description of each exercise. For example, below a prompt, you may see:
// // let myAnswerForExercise10= "";
// // If your answer is "foo", then fill in the line to be:
// // let myAnswerForExercise10 = "foo";

// // Exercise 10. What is the data type of the value stored in 'dreamDestination',
// // place your answer in the quotes below:

const myAnswerForExercise10 = "string";
console.log(typeof(dreamDestination)); //checking to confirm data type using typeof



// // Exercise 11. What is the data type of the value stored in 'product', // is this a typo? we have a variable called theProduct so we will evaluate this 
// // place your answer in the quotes below:

const myAnswerForExercise11 = "number";
console.log(typeof(theProduct)); //checking to confirm data type using typeof



// // Exercise 12. What do you think the value of emptyVariable is?
// // Place your answer below:

const myAnswerForExercise12 = "undefined"; // the empty variable wasn't defined so it will be undefined
console.log(typeof(emptyVariable)); //checking to confirm data type using typeof

// // Exercise 13. If
const A = "R";
const B = 1;
const C = 4;
const D = "D";

// What is the value of B + C
// const myAnswerForExercise13 = "5";
console.log(B + C); //checking answer after my guess to confirm

// // Exercise 14 What is the value of
// A + "n" + D
const myAnswerForExercise14 = "RnD";
console.log(A + "n" + D); //checking answer after my guess to confirm


// // Exercise 15 What is the value of
// A + B * 2 + D + C / 2:
const myAnswerForExercise15 = "R2D2"; // use PEMDAS
console.log( A + B * 2 + D + C / 2); //checking answer after my guess to confirm


// Exercise 16 What is the value of A * B
const myAnswerForExercise16 = "NaN";
console.log( A * B); //checking answer after my guess to confirm

// // Exercise 17 What is the value of true || false 
const myAnswerForExercise17 = "true";
console.log(true || false); //checking answer after my guess to confirm


// // Exercise 18 What is the value of 1 === "1" //checking data type
const myAnswerForExercise18 = "false";   
console.log(1 === "1"); //checking answer after my guess to confirm


// // Exercise 19 What is the value of 1 == "1" // converts num to string
const myAnswerForExercise19 = "true";
console.log(1 == "1"); //checking answer after my guess to confirm


// // Exercise 20 What is the value of 1 < 1
const myAnswerForExercise20 = "false";
console.log(1 < 1); //checking answer after my guess to confirm



// // Exercise 21 What is the value of 1 < 2 < 3
const myAnswerForExercise21 = "true";
console.log( 1 < 2 < 3); //checking answer after my guess to confirm


// // Exercise 22 What is the value of 2 < 1 < 3 
const myAnswerForExercise22 = "true";
console.log(2 < 1 < 3 ); //checking answer after my guess to confirm

// Congrats, you made it to the end!
//Did you find this easy or hard? If you used references, which ones helped you?
//Please answer in a comment below.
// I found this to be pretty easy, although I think the last one confused me a bit because we are seeing that 2 is less than 1 which isn't true but then 1 less than 3 is true.
// To understand this better I looked for help via Quora and saw that a community member had actually asked a similar question!
// Here was the reply: 
// "if we break it down into two separate steps we will get
//console.log(3 < 2)  // will output false 
//console.log(false < 1)  // will output true 
// In javascript you get true as final answer
// (3 < 2 < 1) evaluates (True or False) as whole not progressively" - from Quora


//  Email your file to the course staff,
//  or commit your file to GitHub and email us a link.
