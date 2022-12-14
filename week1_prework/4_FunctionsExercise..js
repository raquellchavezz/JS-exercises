// Week 1 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.


function logGreeting(){ 
  console.log("Hello!")
}
logGreeting(); 



// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.

function getName(){ 
  return "Raquel";
}
console.log(getName());


// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

function logGreeting2(){ 
  return "Hello! My name is " +getName() + ".";
}
console.log(logGreeting2());


// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

function sumNum (num1, num2, num3){ 
  let sum = num1 + num2 + num3;
  return sum;
}

console.log(sumNum(2,2,2));//6
console.log(sumNum(6,2,1));  //9
console.log(sumNum(4,5,1)); //10







// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.

//notes: 
// age <= 14 get a discount and age >= 65 get discount --> return true  
// if age > 14 OR age < 65 = NOT discount --> return false

function discountCheck(age){ 
  if (age <=14 || age >= 65){ 
    return true;
  }else{
    return false;
  }
  } 

  console.log(discountCheck(18)); //false
  console.log(discountCheck(10));  //true
  console.log(discountCheck(14));  // true
  console.log(discountCheck(65)); //true
  





// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.

function myFunc(string, times) { // function takes in string and a number which will be repped by times
  var repeatedString = ""; // repeatedString will store the new string that will repeat x number of times 
  while (times > 0) { //while number of times is >0 we will execute code in {  }
    repeatedString += string; // same as repeatedString + string; 
    times--; // decrement times -1 
  }
  return repeatedString; //" hellohellohello"
}
console.log(myFunc("hello",3)); 


// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);




// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does
// function1 takes in a argument called p1, and multipies that by 2, then returns it.
// since we have assigned y = 4, this means that when we look at z, z is assigned to the function and 4 is 
// passed into the function arugment. So, essentially y is 4 and when we put y as an argument we are 
// calculating 4*2 and returning that which is 8 when we conosle log z. 
//  When we console log the value of y it is just 4. 

// 2. What prints out for the value of y
// answer: 4
// 3. What prints out for the value of z
//answer: 8
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
// I was correct. 


// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
/* takes in arguements p1 and p2 then assigns the variable x to the value of p1-p2. It then
returns the value of x 
*/
// 2. What prints out for the value of a
// answer: 6
// 3. What prints out for the value of b
// answer: so 6 - 1 = 5 the answer is 5.
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
// After running the code I saw that my inital answer for part 3 was wrong. I forgot that we had 
// the value of variable a from the previous question and could use that to do the calucaltion. 
// I learned to slowly think through the problem and to review the variables you currently have, especially if they are being resused. 




// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice";
console.log(groceryList.split(","));

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
const splitHere = "--->"; 
console.log(mySchedule.split(splitHere,2)); 

// but another way would be: 
// const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
// const myArray = mySchedule.split("--->", 2);
// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// I found this assignment to be easier than the others, I used FCC 113 as a review because I forgot some of the properties to use. 

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.