// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj2); // ["first", "last"]
// let obj3 = {};
// keys(obj3); // []


// answer:
// function keys(obj){ // function calleds key that accepts an object defined above 
//     let newArr= []; //creating an empty array so we can add the keys to it later
//     for(const key in obj){// for every key in the boject we will 
//         newArr.push(key); // add the key to the newArr array
// }
// return newArr; // return the newArr-- ends function execution and specifies a value to be returned to the function caller
// }

// // test cases: 
// console.log(keys({ a: 1, b: 2, c: 3 }));  // ["a", "b", "c"]
// console.log(keys({ first: 'Matt', last: 'Lane' })); // ["first", "last"]
// console.log(keys({}));  // []






// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]
// let obj3 = {};
// values(obj3); // []


//answer:
// function values(obj2){ // function named values that takes in an object 
//     let newArr2 =[]; // we need to return an array so we should create an empty array in which we could add to later
//     for(const value in obj2){// for every value in the object 
//         newArr2.push(obj2[value]);  // we will add the key's value to the newly created array called newArr2

//     }
//     return newArr2; // return statement 
// }
// console.log(values({ a: 1, b: 2, c: 3 }));  // should be [1,2,3]
// console.log(values({ first: 'Matt', last: 'Lane', isDogOwner: true })); // testing to see output --> ["Matt", "Lane", true]
// console.log(values({})); //should be []







// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// entries(obj);
// [["a",1], ["b",2], ["c",3]]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
// entries(obj3); // []


//answwer: 
// function entries(obj){  
//     let newArr3 = [];
//     for(const key in obj){ 
//         newArr3.push([key, obj[key]]);
    
//     }
//     return newArr3; 
// }

// console.log(entries({ a: 1, b: 2, c: 3 }));
// // [["a",1], ["b",2], ["c",3]]
// console.log(entries({ first: 'Matt', last: 'Lane', isDogOwner: true })); 
// //[["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// console.log(entries({})); 
// // []



// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key. ****
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]
// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]

// asnwer:
// function pluck(arrayOfObjs, nameOfKey){ 
//   let array = []; 
//   for(let i = 0; i <arrayOfObjs.length; i++){ 
//     if(arrayOfObjs[i].hasOwnProperty(nameOfKey)){
//       array.push(arrayOfObjs[i][nameOfKey]); 
//     }else{
//       (array.push("undefined"));
//     }

//   }
//   return array; 

// }
// console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name'));
// // ["Tim", "Matt", "Elie"]
// console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')); 
// // [true, false, undefined]




// // ------------------------TESTING--------------------------------------------


// problem here is sthis function is not returning the correct array with undefined 
// function pluck(arrayOfObj, nameOfKey){ 
//   // need to return an array with value of key that matches each obj
//   let arr = []; // new array so we can add the values of each key in the object
//   for (let i =0; i < arrayOfObj.length; i++){
//     for(const key in arrayOfObj[i]){
//       if (key === nameOfKey) {
//         arr.push(arrayOfObj[i][key])
//        } 
//       } 
//       } if (arr.length === 0){ // trying to say if the array is empty meaning the array has a length of 0 
//         (arr.push("undefined"))
//     }
//     return arr // need to return statement or else js returns undefined for every function in js 
//   }
 

// console.log(pluck([{ name: "Tim" }, { name: "Matt" }, {nam: "Elie" }] ,'name'));
// // --------TESTING 2 --------------------------------

// function pluck(arrayOfObj, nameOfKey){ 
//   // need to return an array with value of key that matches each obj
//   let arr = []; // new array so we can add the values of each key in the object
//   for (let i =0; i < arrayOfObj.length; i++){
//     for(const key in arrayOfObj[i]){
//       if (key === nameOfKey) {
//         arr.push(arrayOfObj[i][key])
//        } 
//       } 
//       } if (arr.length === 0){ 
//         return undefined
//     }
//     return arr // need to return statement or else js returns undefined for every function in js 
//   }
 

// console.log(pluck([{ name: "Tim" }, { name: "Matt" }, {nam: "Elie" }] ,'name')); // only returning ['Tim', 'Matt'] need undefined in there 





// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".——
// Each key/value pair should be separated by a comma and space except for the last pair.
// Examples:
// stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""

// answer:
// function stringFromObject(obj){ 
//   let answer = ""; // empty string where we can add 
//   for(let key in obj){ 
//     answer +=  `${key} = ${obj[key]}, `;

//   }
//   // to remove last comma and the space 
//   answer = answer.slice(0, answer.length-2) // start at 0 go up to but not including the length of the answer - 2 (this will delete the space and the comma since these are part of the counted length)
//   answer = `"${answer}"`

 
//   return answer;   // start, end

// }
// console.log(stringFromObject({ a: 1, b: '2' }));
// "a = 1, b = 2"
// console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }));
// "name = Elie, job = Instrucor, isCatOwner = false"
 


//this source helped me: https://stackoverflow.com/questions/61493158/write-a-function-called-stringfromobject-that-generates-a-string-from-an-object







// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]

//answwer:
// pastseInt() converts its first argument to a string, parses that string, then returns an integer or NaN 
// object,keys returns a string so need to convert to numbers 

// function minMaxKeyInObject(obj6) {
//   let lowestKey = parseInt(Object.keys(obj6)[0]); //converting the keys of the object of obj6 at position 0 to integer for lowest key
//   let highestKey= parseInt(Object.keys(obj6)[0]); //converting the keys of the object of obj6 at position 0 to integer for highest key
//   for (const key in obj6) { // for every key in obj6 
//     if (parseInt(key) > highestKey) { // if the converted key which is now an integer due to parseInt() is greater than highest key
//       highestKey= parseInt(key) // we will replace the highest key with the converted key that is greater 
//     }
//     else if (parseInt(key) < lowestKey) { // if the key which is also converted to a integer is smaller than lowest key 
//       lowestKey = parseInt(key) // then that key will replace the lowestKey variable 
//     }
    
//   }
  
//   return ([lowestKey,highestKey]) 
// }
// console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));
// console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));









// other possible methods?

// did this method with my mentor
// thoughts: 
// goal: return an  array with lowest, highest keys 
//math.max or math.min??
// maxNum = 0; 
// minNum = 0; 
// need a reg for loop?
// for(const key in object5){ 
// if (object5[key])

// function minMaxKeyInObject(obj5){ 
//   let newArr = []; 
//   let initialized = false; 
//   let maxKey;
//   let minKey;
//   for(let key in obj5){  
//     key = Number(key)
//     if(!initialized){ // if false
//       maxKey= key;
//       minKey= key;
//       initialized = true; 
//     } 
//     // console.log("initialized " +key)
//     if(key>maxKey){ 
//       maxKey= key; 
//     }
//     if(key<minKey){ 
//       minKey=(key);


//     }
  
// }

// return [minKey, maxKey]
// }
// console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' })); //[ 1, 10 ]
// console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' })); //[ 1, 4 ]





// another possible solution I thought of: 

// function minMaxKeyInObject(obj) {
//   let newArr = [];
//   let keys = Object.keys(obj) // 2,3,4,
//   let maxKey = keys[0]*1; // multiplying by 1 turns str number into a number 
//   let minKey = keys[0]*1;
//   for (let i = 0; i < keys.length; i++) {
//     // find the min key
//     if (minKey > keys[i]*1) {
//       minKey = keys[i]*1;
//     }
//     // find max key
//     if (maxKey < keys[i]*1) {
//       maxKey = keys[i]*1;
//     }
//   }
//   newArr.push(minKey, maxKey)
//   return newArr
// }

// console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' })); //[1,10]
// console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' })); //[ 1, 4 ]






