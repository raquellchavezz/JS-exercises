// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.
// Examples:
// prependToString('awesome', 'very') // --> 'veryawesome'
// prependToString('world', 'hello ') // --> 'hello world'
// prependToString('nothing', '') // --> 'nothing'
// Prepend puts the second string in front of the first.

function prependToString (str1, str2){
  return str2 + str1;
}
console.log(prependToString("awesome", "very"));
console.log(prependToString(" world", "hello"));
console.log(prependToString('nothing', ''))// --> 'nothing'



// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
// The function should return true if the first string includes the character, otherwise it should return false.
// IMPORTANT: Do not use the built in string.includes() function!
// Examples:
// stringIncludes('awesome', 'e'); // --> true 
// stringIncludes('awesome', 'z'); // --> false
//notes: asking "is this letter in the word? if yes --> true if no --> false"
// needs to iterate through the whole word not just one letter and stop 
// similar to asking if there is a red starbust in a bag and the first one you pick is pink so you
// automatically say no theres no red, but we didnt look through the whole bag so there could be a red 
//need to check whole bag aka the whole word 



function stringIncludes(word, letter){
  for (let i=0; i< word.length; i++){ // iterate through the word
    if (word[i] === letter) { // if the iteration we are on in the word is the same as the letter we chose 
      return true; 
    } 
  }
  return false; // im leaving this function now and saying false so if we put too early then we would exit it and return false 
}
console.log(stringIncludes("apple","a")); // true
console.log(stringIncludes('awesome', 'e')); // --> true
console.log(stringIncludes('awesome', 'z')); // --> false
//coulnd't return false inside the loop bc that meant we could exit the loop w out checking all of the letters so need to put return outside 


// Exercise 3. Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
// The function should return the last index at which the character exists or -1 if the character is not found.
// IMPORTANT: Do not use the built in "string".lastIndexOf() function!
// Examples:
// stringLastIndexOf('awesome', 'e'); // --> 6
// stringLastIndexOf('awesome', 'z'); // --> -1

//function accepts word and a letter
// we want to know where the last place the letter exists in the word 
// so it should return the index position where at the last place the letter is seen OR -1 if 
// we can't find the letter at all




function stringLastIndexOf(strWord1,strChar2){ 
  for(let i = strWord1.length-1; i >=0 ; i--){  // we are starting at the last index letter 
    // we will continue to loop as long as i is greater than or equal to 0 (accounts for the 0th index postion)
    // we will also decrement each time to get to the first letter in the word
    if (strWord1[i] === strChar2) { //conditon whatever letter we are at in the iteration is equal to the letter we threw into the function when we called it
      return i; // we will return the index postion at which that letter was found 
    } 
  }
 return -1 // if not, we return -1 
}
console.log(stringLastIndexOf("apple", "e")) //--> [4]
console.log(stringLastIndexOf("pineapple","p")); // --[6]
console.log(stringLastIndexOf("christmas", "s")) //[8]
console.log(stringLastIndexOf("cat", "z")) //--> -1

// counting backwards 


// function stringLastIndexOf(strW, strC){ // takes in a word and a char
//   let latestIndex= -1; // asigning a variable -1, this will act as our default value 
//   // can just think we are saying let the last index always = -1 UNLESS we loop through and satisfy the conditions 
//   for (let i= 0; i<strW.length; i++){ // we start at 0, as long as i is less than the length of the word, we will ad 1 to i each time to go thru the entire word
//     if (strW[i] === strC){ // if the iteration at which we are in the word (the words value at the position )is equal to the character we chose
//        latestIndex= i; // we will change the lastIndex value to the position that the character was found to match
//     }
//   } 
//   return latestIndex; // or else just return -1 
// }

// console.log(stringLastIndexOf("apple","e"));//[4]
// console.log(stringLastIndexOf("cat", "z")); // -1
// console.log(stringLastIndexOf("christmas", "s")); //[8]
// console.log(stringLastIndexOf("pineapple","p")); // [6]




// Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
// The function should return a new string with the characters removed.
// Examples:
// removeFromString('Elie', 2, 2) // --> 'El'
//                 string, start number, stop number
// removeFromString('Elie', 0, 1) // --> 'lie'
// removeFromString('Hello School', 0, 6) // --> 'School'
// removeFromString('Hello School', 2, 4) // --> 'HeSchool'
// removeFromString('Hello School', 6, 400) // --> 'Hello '


//Use a for loop too loop thru characters
//if statement to pick out characters you want
//Pick out the characters from the strings and if they meet the conditions then add them together

function removeFromString(string, startIndex, numRemove) { 
  let newString = ""; // create empty variable called new string that will hold the new word 
  for(let i = 0; i < string.length; i++) { // lets start at i =0 so the first iteration is 0 then keep adding 1 to i until i is greater than string.length
    // we will iterate as long as i is LESS than the string.length (so we want to go thru all the index positons)
    if(i < startIndex || i >= startIndex+numRemove) { // if i is less than the startIndex and if i is greater than or equal to the startIndex + numRemove
      // basically taking the in between, we're selecting the numbers before and after to create our new string 
      //want to add all chars to newString
      newString += string[i]; // we will add to the empty string 
    }
  }
  return newString;
}
console.log(removeFromString('Elie', 2, 2)) // --> 'El'
// string, start, stop
console.log(removeFromString('Elie', 0, 1))// --> 'lie'
console.log(removeFromString('Hello School', 0, 6))// --> 'School'
console.log(removeFromString('Hello School', 2, 4))// --> 'HeSchool'
console.log(removeFromString('Hello School', 6, 400))// --> 'Hello '







// Exercise 5. Write a function called indexOf, which accepts an array and a number.
// The function should return the first index at which the value exists or -1 if the value is not found.
// IMPORTANT: Do not use the built in array.indexOf() function!
// Examples:
// let arr = [5, 10, 15, 20];
// indexOf(arr, 20); // --> 3
// let arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // --> 1
// let arr3 = [1, 2];
// // indexOf(arr3, 10); // --> -1

let arr = [5, 10, 15, 20]; // setting up our array of numbers
function indexOf(arr, num){ // function that takes in the array and a number which , we want to see where this number exists in the array (if it does) and return its postion in which its found
  for(let i = 0; i < arr.length; i ++){  // iterating through the array 
    if(arr[i]===num){  // if the array at positon i is = to the number 
      return i; // we will retun the index position of i 
    }

  }
  return -1; // if its not found we return -1 
}
console.log(indexOf(arr, 20));




// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. 
// The function should return true if the value exists in the collection when we search starting from the starting index.
// Otherwise, it should return false.
//  The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a 
// starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; 
// since objects have no sort order, the third parameter is ignored.
// Examples:
// includes([1, 2, 3], 1) // --> true

        //collection, value, startIndexPos

// includes([1, 2, 3], 1, 2) // --> false
// includes([1, 2, 3], 6) // --> false
// includes({ 'a': 1, 'b': 2 }, 1) // --> true
// includes({ 'a': 1, 'b': 2 }, 'a') // --> false
// includes('abcd', 'b') // --> true
// includes('abcd', 'e') // --> false
// includes('abcd', 'a', 2) // --> false

function includes (collection, value, startIndex){
  if (startIndex === undefined){ // if the startIndex is undefined (since its optional) we will have a default value of 0 
    startIndex= 0;
  }
  if(collection instanceof Array || typeof collection === "string"){ // instanceOf used to check the type of an object at run time
    // if collection is an the type array OR the the data type of the collection is a string
    for (let i=startIndex; i< collection.length; i++){ // iterate through the array or string 
      // i will start at the startIndex if given, if not we start at 0 
      // as long as i is less than the collection length (whether that be an array or a string)
      // we will add one to i 
      if (collection[i] === value){  // then if the collection value at i is equal to the value 
         return true; // we will return true --> example "abcd, 'a', 2 --> false
    }
  } 
  }else { //obj
     for (let key in collection){ // if the key in the collection (key value pairs name: raquel)
       if (collection[key] === value){ // if the collection key value is equal to the value thats thrown into the function 
     return true; // return true 
       }
  }
}return false; // if none of these are satisfied return false 
}


console.log(includes([1, 2, 3], 1, 2))// --> false
console.log(includes([1, 2, 3], 6)) // --> false
console.log(includes({ 'a': 1, 'b': 2 }, 1)) // --> true
console.log(includes({ 'a': 1, 'b': 2 }, 'a')) // --> false
console.log(includes('abcd', 'b')) // --> true
console.log(includes('abcd', 'e')) // --> false
console.log(includes('abcd', 'a', 2)) // --> false
// number 4 & 5 were a little bit hard 