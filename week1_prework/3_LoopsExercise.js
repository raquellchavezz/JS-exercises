// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

const myArray1= []; // start off w/ an empty array so we can add the numbers to it 
let i = 1; // starting at 1 because we want to include numbers between 1 and 5 inclusive
while(i<=5){  //while the number is less than or equal to 5 we will execute the code in the curly braces
  myArray1.push(i); // .push is adding i (the number at the iteration while the number <= 5) to the array
  i++; // adding one each time to the number when it goes thru loop until the number is = 5
}
console.log(myArray1); // checking output, should be [1, 2, 3, 4, 5]






// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

const myArray2 = []; // start with empty array so we can add numbers to it 
let z = 1; // starting at one because need to have numbers 1-5 inclusive
do{ // start of the do while loop structure, do this while certain condition is true until its not 
  myArray2.push(z); // adding i which represents the number to the array until the number is less than 6
  z++; // adding 1 each time to the number so it can increase until reaches 6 where we exit out of the loop 
} while (z < 6); // while the number (i) is less than 6 we execute the code above
console.log(myArray2); // checking to see how the ouput looks, we should get [1, 2, 3, 4, 5]




// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
const myArray3=[]; //start w empty array
for (let a= 1; a <6; a++){ // start at 1, go through for loop until 1 <6, add 1 to i)
  myArray3.push(a); // add i (the number the iteration is on )to the array
}
console.log(myArray3);  // checking output, should get  [1, 2, 3, 4, 5]


// // Exercise 4. Now we want a loop that prints the integers
// // counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// // writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.


// while loop answer:
const myArray4 = [];  // we have an empty array so we can add numbers to it 
let b = 10; //start at number 10 then we want to count down
while (b >= 1){ // while this condition is true (while the number is greater than or equal to 1) do whats inside the curly braces
  myArray4.push(b); // add the number that the iteration is on to the array
   b--; // decrement bc we're counting down 
}
console.log(myArray4); // checking output, should be [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


// do while loop answer: 


const myArray44 = [];  
let c = 10; 
do{ // start of the do while loop structure, do this while certain condition is true until its not 
  myArray44.push(c); // adding i which represents the number that we're on in the iteration to the array 
  c--; // decreasing by 1 each time to the number so it goes 10,9,8,....1 inclusive
} while (c>0); // while the number (i) is greater than 0 we execute the code above bc we want numbers 1 to 10 so we need to say while the number is > than 0 
console.log(myArray44); //checking should be [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]



// for loop answer:
const myArray444 = []; // start w empty array so we can add numbes
for(let d = 10; d > 0; d--){ // start at number 10, go through for loop while the number is > 0 is true, then we will decrease the number by 1 each time going through loop until condition isn't satisfied
  myArray444.push(d); // adding the number to the array 
}
console.log(myArray444); // checking output should be [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]





// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
 
// while loop answer: 

const myArr5 = []; // start empty array so we can add the numbers 7 to 27
let e = 7; // starting at number 7 inclusive 
while (e <= 27){  // while the number is less than or = to 27 inclusive 
  myArr5.push(e); // we are going to add that number to the array
  e++; // then we add 1 to the number each time 
}
console.log(myArr5); // checking ouput, should be [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]



// // do while loop answer: 

const myArr55= []; // start w empty array 
let f = 7; // start w number 7 since we want to include number 7 
do{  // do the code below while the condition is true 
  myArr55.push(f); // add number to the array
  f++; // add 1 to the number each time 
} while(f <=27); // while the number is <= 27 inclusive
console.log(myArr55); // checking should be [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]



// // for loop answer: 
const myArr555=[]; // start with empty array 
for(g = 7; g<=27; g++){  // start at 7, as long as i ( the number we're at in the iteration) is less than or = to 27, we will execute code below then add 1 to i
  myArr555.push(g); // adding the number the the array
}
console.log(myArr555); // checking output, should be [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]





// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens. 
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.


// while loop answer:
const myArr6 = [];
let h = 0; // start at 0 we are including this number

while (h <= 100) { // while the number is less than or equal to 100, 100 inclusive
  myArr6.push(h); // we will add the number to the array each time while the condition is true
  h+=10; // then add by 10 each time to count by tens 10+10 = 20, 20+10 = 30, etc
}
console.log(myArr6); // checking output, should be [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


//do while loop 
const myArr66 = [];
let j = 0; // start at 0 

do { // execute below code while condition is true at the bottom ( i <=100)
  myArr66.push(j); // adding the number to the array
  j+=10; // adding 10 each time so we can count by 10's 
} while (j <= 100); // while this condition is true, the code in { } will execute
console.log(myArr66); // checking output, should be [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]



// // for loop answer: 
const myArr666 = []; // start with empty array
for (let k = 0; k <=100; k+=10) { // start at 0, as long as i <= 100 execute the code in the { }, add 10 to the number so the next time it goes thru the loop the number will have increased by 10 
  myArr666.push(k); // add the number to the array 
}
console.log(myArr666); //  checking output, should be [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]



// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100. 

// let counterFour = 1;
// while (counterFour < 2) { 
//   console.log("HELP ME!");
//   counterFour--;
// }

/* this is an infinite loop because we are starting at 1 and when it goes thru the loop
the first time, 1 <2 so we console log help me then we subtract 1 from it so now its -1 which
which is less than 2 so we execute the code again and then subtract 1 from -1 so now its -2. 
-2 is less than 2 so we keep going and going, which causes an infinite loop because in this case 
counterFour will always be less than 2. 
we can fix this by changing the sign :
*/

let counterFour = 1; // starting at 1
while (counterFour > - 100 ) { // while the number is greater than - 100 we will execute code below
  console.log("HELP ME!"); // print this as long as the above is true 
  counterFour--; // we will decrease by 1 each time 
}

// 1, -1, -2, -3, -4...-99 --> prints 
// negatives -99 > -100 



// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

var favNum = 8; // fav num = 8
for(let m = 0; m <=8; m++){ // start at 0 go up to and including 8 & add 1 each time to the number 
  console.log(m); // prints 0 to 8 
}




// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let favInt = 99; 

for (let n = 0; n <101; n++ ){ //start at 0, as long as i is less than 101 (so 100 or lower) add 1 each time to the number 
    if (n == favInt){
         console.log( n + " my favorite number!");
    } else {
        console.log(n + " not my favorite number")
    }
  
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// While I was researching different approaches for some of these questions when I got stuck, the most common loop I saw was a for loop.
// With this, I think I would use a for loop to stay consistent with other programmers but also because I thnk the structure of a for loop 
//is more clear as you have a initializer, condition, and increment or decrement. I also think a for loop allows you to be more aware of a potential infinite loop.
// Online, it said that for loops are typically used when you know how many times the loop should run.
// However if you want the loop to break based on a condition that is not the number of times it runs, we should use a while loop. Also, do while loops structure
// is a bit confusing for me so I would avoid this and use a for loop instead. 



// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) { // this means that we're starting outside counter at 0, going up to & including 3, then adding 1 each time the loop finishes
  console.log("counting down from", outsideCounter); // this should be paired with the iteration the loop is at up to and including 3 
  for (let insideCounter = outsideCounter;insideCounter>0; insideCounter--) { // 
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to us or commit your file to GitHub and email us a link.