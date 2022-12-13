// Week 3 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Make an empty array named animals
const animals = []; 
// console.log(animals); //checking empty array

// // Exercise 2. Add the string "frog" to the array
animals.push("frog"); 
console.log(animals); //['frog']

// // Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.
animals.push("cat", "dog", "bird", "monkey");
console.log(animals);  // ['frog', 'cat', 'dog', 'bird', 'monkey']

// // Exercise 4. Update the first item in the array to be "gorilla"
animals[0] = "gorilla" // grabbing the animal at index position 0 and changing it to gorilla 
console.log(animals); // ['gorilla', 'cat', 'dog', 'bird', 'monkey']



// // Exercise 5. Print the number of items in the array (use the array property that will give you this information)
console.log(animals.length)

// // Exercise 6. Print the first item in the array
console.log(animals[0]); 


// // Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)
console.log(animals[animals.length-1]); // accessing the array then tapping into the array and accessing the last element in the array by doing .length-1

// // Exercise 8. Remove the last item from the array
// // pop method removes 
animals.pop(animals[animals.length-1]); 
console.log(animals); // checking output, should be  ['gorilla', 'cat', 'dog', 'bird'] so monkey is no longer in the array it has been removed 


// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.
const assortedThings = ["apple", "banana", "orange", 1, 2,3]
console.log(assortedThings);
// // Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// // Item #0 is potato
// // Item #1 is 4
// // Item #2 is Hello World
// // ...

for(let i = 0; i <= assortedThings.length-1; i++){ 
  console.log("Item # " + [i] + " is " + assortedThings[i]); 
}
/* Code should ouput the below:
Item # 0 is apple
Item # 1 is banana
Item # 2 is orange
Item # 3 is 1
Item # 4 is 2
Item # 5 is 3 */








// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.

function myFunc2(arr){ 
  for(let i =0; i <arr.length; i++){
    if (arr[i] > 100) {  // if number over 100 otherwise it will be small
      console.log(arr[i] + " BIG"); 
    }else if (arr[i] >=0 && arr[i] <=100){ // if number is between 0 and 100 inclusive we will print small
      console.log(arr[i] + " small");
    }else{ 
      console.log(arr[i] + " negative");
    }
}
}

myFunc2([-2,200,50]); 
console.log("**********************************")
myFunc2([10,-1,500]); 
console.log("**********************************")
myFunc2([100,-400,1]); // undefined when console log after the array is evaluated but when call the function itself it prints it correctly each time?










// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.


const me = {
  "name": "Raquel",
  "favoriteAnimal": "cat",
  "favoriteNumber": "8"
}; 
console.log(me);



// Exercise 13. Add another 2 keys and values to the object (you choose what they are)
 me.favoriteColor = "pink";
 me.favoriteFood= "sushi"; 
console.log(me) // checking output, should be {name: 'Raquel', favoriteAnimal: 'cat', favoriteNumber: '8', favoriteColor: 'pink', favoriteFood: 'sushi'}




// Exercise 14. Update the favoriteAnimal value to something different
me.favoriteAnimal= "dog";
console.log(me) // checking should print {name: 'Raquel', favoriteAnimal: 'dog', favoriteNumber: '8', favoriteColor: 'pink', favoriteFood: 'sushi'}



// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.

// 1:
console.log(me["favoriteAnimal"]); // should show dog 

// 2: 
console.log(me.favoriteAnimal); // should show dog 





// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.